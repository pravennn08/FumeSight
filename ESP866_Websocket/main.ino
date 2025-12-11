#include <Arduino.h>
#include "ESPWebSocket.h"

// ===== CREATE OBJECT =====
ESPWebSocket espWebSocket;

void setup() {
  espWebSocket.begin();
}

void loop() {
  espWebSocket.loop();
}
