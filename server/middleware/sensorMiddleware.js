export const calculateSensorStatus = function (next) {
  // Temperature Status (in Celsius)
  if (this.temperatureVal >= 18 && this.temperatureVal <= 28) {
    this.tempStatus = "Safe";
  } else if (
    (this.temperatureVal >= 15 && this.temperatureVal < 18) ||
    (this.temperatureVal > 28 && this.temperatureVal <= 32)
  ) {
    this.tempStatus = "Warning";
  } else if (
    (this.temperatureVal >= 10 && this.temperatureVal < 15) ||
    (this.temperatureVal > 32 && this.temperatureVal <= 38)
  ) {
    this.tempStatus = "Danger";
  } else {
    this.tempStatus = "Critical";
  }

  // Humidity Status (%)
  if (this.humidityVal >= 40 && this.humidityVal <= 60) {
    this.humidStatus = "Safe";
  } else if (
    (this.humidityVal >= 30 && this.humidityVal < 40) ||
    (this.humidityVal > 60 && this.humidityVal <= 70)
  ) {
    this.humidStatus = "Warning";
  } else if (
    (this.humidityVal >= 20 && this.humidityVal < 30) ||
    (this.humidityVal > 70 && this.humidityVal <= 80)
  ) {
    this.humidStatus = "Danger";
  } else {
    this.humidStatus = "Critical";
  }

  // Smoke Status (PPM - Parts Per Million)
  if (this.smokeVal < 50) {
    this.smokeStatus = "Safe";
  } else if (this.smokeVal >= 50 && this.smokeVal < 100) {
    this.smokeStatus = "Warning";
  } else if (this.smokeVal >= 100 && this.smokeVal < 200) {
    this.smokeStatus = "Danger";
  } else {
    this.smokeStatus = "Critical";
  }

  // Alcohol Status (PPM)
  if (this.alcoholVal < 10) {
    this.alcoholStatus = "Safe";
  } else if (this.alcoholVal >= 10 && this.alcoholVal < 25) {
    this.alcoholStatus = "Warning";
  } else if (this.alcoholVal >= 25 && this.alcoholVal < 50) {
    this.alcoholStatus = "Danger";
  } else {
    this.alcoholStatus = "Critical";
  }

  // Carbon Dioxide Status (PPM)
  if (this.carbonDioxideVal < 1000) {
    this.carbonDioxideStatus = "Safe";
  } else if (this.carbonDioxideVal >= 1000 && this.carbonDioxideVal < 2000) {
    this.carbonDioxideStatus = "Warning";
  } else if (this.carbonDioxideVal >= 2000 && this.carbonDioxideVal < 5000) {
    this.carbonDioxideStatus = "Danger";
  } else {
    this.carbonDioxideStatus = "Critical";
  }

  // Ammonia Status (PPM)
  if (this.ammoniaVal < 10) {
    this.ammoniaStatus = "Safe";
  } else if (this.ammoniaVal >= 10 && this.ammoniaVal < 25) {
    this.ammoniaStatus = "Warning";
  } else if (this.ammoniaVal >= 25 && this.ammoniaVal < 50) {
    this.ammoniaStatus = "Danger";
  } else {
    this.ammoniaStatus = "Critical";
  }

  next();
};
