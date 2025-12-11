#ifndef ESP_WEBSOCKET_H
#define ESP_WEBSOCKET_H

#include <ESP8266WiFi.h>
#include <WebSocketsClient.h>
#include <ArduinoJson.h>

class ESPWebSocket {
  public:
    ESPWebSocket();

    void begin();
    void loop();

  private:
    // WIFI
    const char* ssid = "Dorm514-2G-1";
    const char* password = "D0ntp255m34587";

    // SERVER
    const char* serverIP = "192.168.0.100";
    uint16_t serverPort = 8080;

    // SENSOR VALUES
    float lastTemp;
    float lastHumid;
    float lastSmoke;
    float lastAlcohol;
    float lastCarbonDioxide;
    float lastAmmonia;

    // WEBSOCKET
    WebSocketsClient webSocket;

    // METHODS
    void connectWiFi();
    void setupWebSocket();
    void handleSerial();
    void sendWebSocketData(const char* type, StaticJsonDocument<256>& dataDoc);
    float sanitizeFloat(float v);

    // STATIC EVENT HANDLER
    static void webSocketEvent(WStype_t type, uint8_t* payload, size_t length);
};

#endif
