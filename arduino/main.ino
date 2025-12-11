#include "Sensors.h"
#include "avr/sleep.h"
#include "avr/power.h"

const int dhtPin = 8;
const int mq2Pin = A0;
const int mq135Pin = A1;

volatile int Mode = 0;
enum mode { AUTO, MAINTENANCE, SLEEP};

Sensors sensors(dhtPin, mq2Pin, mq135Pin);

unsigned long lastUpdate = 0;
const unsigned long interval = 1000;

void setup() {
  Serial.begin(9600);
  sensors.init();
  pinMode(2, INPUT_PULLUP);
  attachInterrupt(digitalPinToInterrupt(2), setMode, FALLING);
  Mode = AUTO;
}

void setMode() {
  Mode = (Mode + 1) % 3;

}

void goToSleep() {
  set_sleep_mode(SLEEP_MODE_PWR_DOWN);
  sleep_enable();
  attachInterrupt(digitalPinToInterrupt(2), setMode, LOW);
  sleep_mode();  
  sleep_disable();
  detachInterrupt(digitalPinToInterrupt(2));
}

void loop() {

  if (Serial.available()) {
    String cmd = Serial.readStringUntil('\n');
    cmd.trim();

    if (cmd == "AUTO")  Mode = AUTO;
    else if (cmd == "MAINTENANCE")  Mode = MAINTENANCE;
    else if (cmd == "SLEEP")  Mode = SLEEP;
  }

  if (millis() - lastUpdate >= interval){
    lastUpdate = millis();

    switch (Mode) {
      case AUTO:
        sensors.autoMode();
        break;

      case MAINTENANCE:
        Serial.println("MAINTENANCE");
        sensors.init();
        Mode = AUTO;
        break;
      
      case SLEEP:
        Serial.println("SLEEP MODE");
        goToSleep();
        break;
      }
  }

}
