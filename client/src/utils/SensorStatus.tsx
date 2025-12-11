export const getStatus = (value: number, sensorType: string): string => {
  switch (sensorType) {
    case "temperature":
      // Temperature Status (in Celsius)
      if (value >= 18 && value <= 28) {
        return "Safe";
      } else if ((value >= 15 && value < 18) || (value > 28 && value <= 32)) {
        return "Warning";
      } else if ((value >= 10 && value < 15) || (value > 32 && value <= 38)) {
        return "Danger";
      } else {
        return "Critical";
      }

    case "humidity":
      // Humidity Status (%)
      if (value >= 40 && value <= 60) {
        return "Safe";
      } else if ((value >= 30 && value < 40) || (value > 60 && value <= 70)) {
        return "Warning";
      } else if ((value >= 20 && value < 30) || (value > 70 && value <= 80)) {
        return "Danger";
      } else {
        return "Critical";
      }

    case "smoke":
      // Smoke Status (PPM - Parts Per Million)
      if (value < 50) {
        return "Safe";
      } else if (value >= 50 && value < 100) {
        return "Warning";
      } else if (value >= 100 && value < 200) {
        return "Danger";
      } else {
        return "Critical";
      }

    case "alcohol":
      // Alcohol Status (PPM)
      if (value < 10) {
        return "Safe";
      } else if (value >= 10 && value < 25) {
        return "Warning";
      } else if (value >= 25 && value < 50) {
        return "Danger";
      } else {
        return "Critical";
      }

    case "carbonDioxide":
      // Carbon Dioxide Status (PPM)
      if (value < 1000) {
        return "Safe";
      } else if (value >= 1000 && value < 2000) {
        return "Warning";
      } else if (value >= 2000 && value < 5000) {
        return "Danger";
      } else {
        return "Critical";
      }

    case "ammonia":
      // Ammonia Status (PPM)
      if (value < 10) {
        return "Safe";
      } else if (value >= 10 && value < 25) {
        return "Warning";
      } else if (value >= 25 && value < 50) {
        return "Danger";
      } else {
        return "Critical";
      }

    default:
      return "Safe";
  }
};

export const getStatusColor = (status: string): string => {
  switch (status) {
    case "Safe":
      return "#10b981"; // Green
    case "Warning":
      return "#f59e0b"; // Amber/Yellow
    case "Danger":
      return "#ef4444"; // Red
    case "Critical":
      return "#7c3aed"; // Purple/Violet
    default:
      return "#6b7280"; // Gray (default)
  }
};
export const getStatusRange = (sensorType: string) => {
  switch (sensorType) {
    case "temperature":
      return {
        safe: [18, 28],
        warning: [15, 18, 28, 32],
        danger: [10, 15, 28, 38],
        critical: [-Infinity, 10, 38, Infinity],
      };

    case "humidity":
      return {
        safe: [40, 60],
        warning: [30, 40, 60, 70],
        danger: [20, 30, 70, 80],
        critical: [-Infinity, 20, 80, Infinity],
      };

    case "smoke":
      // Match the exclusive upper bounds from getStatus
      return {
        safe: [0, 49.999], // value < 50
        warning: [50, 99.999], // value >= 50 && value < 100
        danger: [100, 199.999], // value >= 100 && value < 200
        critical: [200, Infinity], // value >= 200
      };

    case "alcohol":
      return {
        safe: [0, 9.999], // value < 10
        warning: [10, 24.999], // value >= 10 && value < 25
        danger: [25, 49.999], // value >= 25 && value < 50
        critical: [50, Infinity], // value >= 50
      };

    case "carbonDioxide":
      return {
        safe: [0, 999.999], // value < 1000
        warning: [1000, 1999.999], // value >= 1000 && value < 2000
        danger: [2000, 4999.999], // value >= 2000 && value < 5000
        critical: [5000, Infinity], // value >= 5000
      };

    case "ammonia":
      return {
        safe: [0, 9.999], // value < 10
        warning: [10, 24.999], // value >= 10 && value < 25
        danger: [25, 49.999], // value >= 25 && value < 50
        critical: [50, Infinity], // value >= 50
      };

    default:
      return {
        safe: [0, 49.999],
        warning: [50, 99.999],
        danger: [100, 199.999],
        critical: [200, Infinity],
      };
  }
};
