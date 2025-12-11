#include "Sensors.h"
#include <Arduino.h>
#include "avr/power.h"
#include <Wire.h>
#include <Adafruit_GFX.h>
#include <Adafruit_SSD1306.h>
#include "qrcode.h"


// Constructor implementation
Sensors::Sensors(int dhtPin, int mq2Pin, int mq135Pin, 
                 int dhtType,
                 const char* board,
                 float voltageResolution, 
                 int adcBitResolution,
                 const char* mq2Type,  
                 float mq2RatioCleanAir,
                 const char* mq135Type, 
                 float mq135RatioCleanAir,
                 float correctionFactor) :
    _dht(dhtPin, dhtType),
    _mq2(board, voltageResolution, adcBitResolution, mq2Pin, mq2Type),
    _mq135(board, voltageResolution, adcBitResolution, mq135Pin, mq135Type)
{
    _dhtPin = dhtPin;
    _dhtType = dhtType;
    _mq2Pin = mq2Pin;
    _mq2Type = mq2Type;
    _mq2RatioCleanAir = mq2RatioCleanAir;
    _mq135Pin = mq135Pin;
    _mq135Type = mq135Type;
    _mq135RatioCleanAir = mq135RatioCleanAir;
    _board = board;
    _voltageResolution = voltageResolution;
    _adcBitResolution = adcBitResolution;
    _correctionFactor = correctionFactor;
    
    // Initialize readings to 0
    _temperature = 0;
    _humidity = 0;
    _smoke = 0;
    _alcohol = 0;
    _ammonia = 0;
    _carbonDioxide = 0;
}

// Initialize all sensors
void Sensors::init() {
    Serial.begin(9600);
    Serial.println("Initializing DHT...");
    _dht.begin();
    initMQ2();
    initMQ135();
    disablePins();
}

void Sensors::initMQ2() {
    Serial.println("Initializing MQ-2 Sensor...");
    
    // Set MQ2 parameters
    _mq2.setRegressionMethod(1);
    _mq2.setA(987.99);
    _mq2.setB(-2.162);
    
    _mq2.init();
    _calibrateMQ2();
}

// Initialize MQ135 sensor
void Sensors::initMQ135() {
    Serial.println("Initializing MQ-135 Sensor...");
    
    // Set MQ135 parameters
    _mq135.setRegressionMethod(1);
    _mq135.setA(102.2);
    _mq135.setB(-2.473);
    
    _mq135.init();
    _calibrateMQ135();
}

// Calibrate MQ2 sensor
void Sensors::_calibrateMQ2() {
    Serial.print("Calibrating MQ-2...");
    float calcR0 = 0;

    for (int i = 1; i <= 10; i++) {
        _mq2.update();
        calcR0 += _mq2.calibrate(_mq2RatioCleanAir);
        Serial.print(".");
        delay(500);
    }
    
    _mq2.setR0(calcR0 / 10.0);
    Serial.println(" done!");
    
   if (isinf(calcR0)) {
    Serial.println("Error: R0 is infinite (Open circuit). Check wiring!");
    while (1);
    }
    if (calcR0 == 0) {
        Serial.println("Error: R0 is zero (Short circuit). Check wiring!");
        while (1);
    }
}

// Calibrate MQ135 sensor
void Sensors::_calibrateMQ135() {
    Serial.print("Calibrating MQ-135...");
    float calcR0 = 0;

    for (int i = 1; i <= 10; i++) {
        _mq135.update();
        calcR0 += _mq135.calibrate(_mq135RatioCleanAir);
        Serial.print(".");
        delay(500);
    }
    
    _mq135.setR0(calcR0 / 10.0);
    Serial.println(" done!");
    
    if(isinf(calcR0)) {
      Serial.println("Warning: Connection issue, R0 is infinite (Open circuit detected) please check your wiring and supply"); while(1);
    }

    if(calcR0 == 0){
      Serial.println("Warning: Connection issue found, R0 is zero (Analog pin shorts to ground) please check your wiring and supply"); while(1);
    }
}

// Update all sensor readings at once
void Sensors::updateReadings() {
    // Update DHT readings
    _temperature = _dht.readTemperature();
    _humidity = _dht.readHumidity();
    
    // Update MQ2 readings
    _mq2.update();
    
    // Get smoke from MQ2
    _mq2.setA(36974);
    _mq2.setB(-3.109);
    _smoke = _mq2.readSensor();
    
    // Get alcohol from MQ2
    _mq2.setA(3616.1);
    _mq2.setB(-2.675);
    _alcohol = _mq2.readSensor();
    
    // Update MQ135 readings
    _mq135.update();
    
    // Get ammonia from MQ135
    _mq135.setA(34.668);
    _mq135.setB(-3.369);
    _ammonia = _mq135.readSensor(true, _correctionFactor);
    
    // Get CO2 from MQ135
    _mq135.setA(110.47);
    _mq135.setB(-2.862);
    _carbonDioxide = _mq135.readSensor(true, _correctionFactor) + 400;
}

void Sensors::autoMode() {

    // Update all values first
    updateReadings();

    Serial.print("{");
    Serial.print("\"temperatureVal\": "); Serial.print(_temperature); Serial.print(", ");
    Serial.print("\"humidityVal\": "); Serial.print(_humidity); Serial.print(", ");
    Serial.print("\"smokeVal\": "); Serial.print(_smoke); Serial.print(", ");
    Serial.print("\"alcoholVal\": "); Serial.print(_alcohol); Serial.print(", ");
    Serial.print("\"ammoniaVal\": "); Serial.print(_ammonia); Serial.print(", ");
    Serial.print("\"carbonDioxideVal\": "); Serial.print(_carbonDioxide);
    Serial.println("}");


}

// Individual getter methods
float Sensors::getTemperature() {
    return _temperature;
}

float Sensors::getHumidity() {
    return _humidity;
}

float Sensors::getSmokeReading() {
    return _smoke;
}

float Sensors::getAlcoholReading() {
    return _alcohol;
}

float Sensors::getAmmonia() {
    return _ammonia;
}

float Sensors::getCarbonDioxide() {
    return _carbonDioxide;
}

// void Sensors::sleepMode(){
//     set_sleep_mode(SLEEP_MODE_PWR_DOWN);
//     sleep_enable();
//     attachInterrupt(digitalPinToInterrupt(2),  int LOW);
//     sleep_mode();
//     detachInterrupt(uint8_t interruptNum);
//     sleep_disable();
// }

void Sensors::maintenance() {
    Serial.print("{\"type\":\"pinData\",\"data\":{");

    // DIGITAL PINS D0-D13
    for (uint8_t pin = 0; pin <= 13; pin++) {
        pinMode(pin, INPUT);
        int val = digitalRead(pin);
        float voltage = val * 5.0;

        Serial.print("\"D");
        Serial.print(pin);
        Serial.print("\":");
        Serial.print(voltage, 2);

        if (pin < 13) Serial.print(",");
    }

    // ANALOG PINS A0-A5
    for (uint8_t pin = A0; pin <= A5; pin++) {
        int val = analogRead(pin);
        float voltage = (val / 1023.0) * 5.0;

        Serial.print(",\"A");
        Serial.print(pin - A0);
        Serial.print("\":");
        Serial.print(voltage, 2);
    }

    Serial.println("}}"); // close JSON
}



void Sensors::disablePins() {
    power_spi_disable();
    const uint8_t usedDigital[] = {2};  // only D2
    const uint8_t usedAnalog[] = {A0, A4, A5};  // <-- DO NOT DISABLE SDA/SCL

    // Disable other digital pins
    for (uint8_t i = 0; i <= 13; i++) {
        bool used = false;
        for (uint8_t j = 0; j < sizeof(usedDigital); j++) {
            if (i == usedDigital[j]) used = true;
        }
        if (!used) {
            pinMode(i, OUTPUT);
            digitalWrite(i, LOW); 
        }
    }

   for (uint8_t i = A0; i <= A5; i++) {
        bool used = false;
        for (uint8_t j = 0; j < sizeof(usedAnalog)/sizeof(usedAnalog[0]); j++) {
            if (i == usedAnalog[j]) used = true;
        }
        if (!used) {
            pinMode(i, INPUT_PULLUP);  // Only disable pins NOT in usedAnalog
        }
    }

}

#ifndef SENSORS_H
#define SENSORS_H

#include <Arduino.h>
#include <DHT.h>
#include <MQUnifiedsensor.h>

class Sensors {
private:
    DHT _dht;
    int _dhtPin;
    int _dhtType;
    
    MQUnifiedsensor _mq2;
    int _mq2Pin;
    const char* _mq2Type;
    float _mq2RatioCleanAir;
    
    MQUnifiedsensor _mq135;
    int _mq135Pin;
    const char* _mq135Type;
    float _mq135RatioCleanAir;
    
    const char* _board;
    float _voltageResolution;
    int _adcBitResolution;
    float _correctionFactor;
    
    float _temperature;
    float _humidity;
    float _smoke;
    float _alcohol;
    float _ammonia;
    float _carbonDioxide;
    
    void _calibrateMQ2();
    void _calibrateMQ135();


public:
    Sensors(int dhtPin, int mq2Pin, int mq135Pin, 
            int dhtType = DHT11,
            const char* board = "Arduino UNO",
            float voltageResolution = 3.3, 
            int adcBitResolution = 12,
            const char* mq2Type = "MQ-2",  
            float mq2RatioCleanAir = 9.83,
            const char* mq135Type = "MQ-135", 
            float mq135RatioCleanAir = 3.6,
            float correctionFactor = 1.0);

    void init();
    void initDHT11();
    void initMQ2();
    void initMQ135();
    void updateReadings();
    
    float getTemperature();
    float getHumidity();
    float getSmokeReading();
    float getAlcoholReading();
    float getCarbonDioxide();
    float getAmmonia();


    void autoMode();
    void maintenance();
    void disablePins();
    void displayQR();


};


#endif
