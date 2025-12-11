#include "ESPWebSocket.h"

// ===== CONSTRUCTOR =====
ESPWebSocket::ESPWebSocket() {
  lastTemp = 0;
  lastHumid = 0;
  lastSmoke = 0;
  lastAlcohol = 0;
  lastCarbonDioxide = 0;
  lastAmmonia = 0;
}

// ===== BEGIN =====
void ESPWebSocket::begin() {
  Serial.begin(9600);
  delay(200);

  connectWiFi();
  setupWebSocket();
}

// ===== LOOP =====
void ESPWebSocket::loop() {
  webSocket.loop();
  handleSerial();
}

// ===== CONNECT WIFI =====
void ESPWebSocket::connectWiFi() {
  WiFi.begin(ssid, password);
  Serial.print("WIFI_CONNECTING");

  while (WiFi.status() != WL_CONNECTED) {
    delay(500);
    Serial.print(".");
  }

  Serial.println("\nWIFI_OK");
  Serial.print("IP: ");
  Serial.println(WiFi.localIP());
}

// ===== SETUP WEBSOCKET =====
void ESPWebSocket::setupWebSocket() {
  webSocket.begin(serverIP, serverPort, "/");
  webSocket.onEvent(ESPWebSocket::webSocketEvent);
  webSocket.setReconnectInterval(5000);
}

// ===== HANDLE SERIAL =====
void ESPWebSocket::handleSerial() {
  if (Serial.available()) {
    String msg = Serial.readStringUntil('\n');
    msg.trim();

    if (msg.length() > 0) {
      StaticJsonDocument<256> doc;
      DeserializationError err = deserializeJson(doc, msg);

      if (!err) {
        lastTemp          = sanitizeFloat(doc["temperatureVal"]);
        lastHumid         = sanitizeFloat(doc["humidityVal"]);
        lastSmoke         = sanitizeFloat(doc["smokeVal"]);
        lastAlcohol       = sanitizeFloat(doc["alcoholVal"]);
        lastCarbonDioxide = sanitizeFloat(doc["carbonDioxideVal"]);
        lastAmmonia       = sanitizeFloat(doc["ammoniaVal"]);

        sendWebSocketData("sensor", doc);
      }
    }
  }
}

// ===== SEND JSON OVER WEBSOCKET =====
void ESPWebSocket::sendWebSocketData(const char* type, StaticJsonDocument<256>& dataDoc) {
  StaticJsonDocument<512> wsDoc;
  wsDoc["type"] = type;
  wsDoc["data"] = dataDoc.as<JsonObject>();

  String jsonStr;
  serializeJson(wsDoc, jsonStr);
  webSocket.sendTXT(jsonStr);
}

// ===== SANITIZE FLOAT =====
float ESPWebSocket::sanitizeFloat(float v) {
  if (isnan(v) || isinf(v)) return 0.0;
  return v;
}

// ===== STATIC WEBSOCKET EVENT HANDLER =====
void ESPWebSocket::webSocketEvent(WStype_t type, uint8_t* payload, size_t length) {
  switch (type) {
    case WStype_CONNECTED:
      Serial.println("WS_CONNECTED");
      {
        StaticJsonDocument<128> doc;
        doc["type"] = "status";
        doc["message"] = "ESP-01 connected";
        String jsonStr;
        serializeJson(doc, jsonStr);
        // Need a reference to WebSocketsClient to send, workaround: print only
        Serial.println("Send WS status JSON: " + jsonStr);
      }
      break;

    case WStype_DISCONNECTED:
      Serial.println("WS_DISCONNECTED");
      break;

    case WStype_TEXT:
      Serial.print("WS_MSG: ");
      Serial.println((char*)payload);
      break;
  }
}
