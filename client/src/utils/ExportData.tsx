// src/utils/exportUtils.ts
import jsPDF from "jspdf";
import autoTable from "jspdf-autotable";
import * as XLSX from "xlsx";

// Types
export interface SensorLog {
  date: string;
  temperatureVal: number;
  humidityVal: number;
  smokeVal: number;
  alcoholVal: number;
  carbonDioxideVal: number;
  ammoniaVal: number;
}

export interface ExportData {
  Date: string;
  Temperature: string;
  "Temp Status": string;
  Humidity: string;
  "Humid Status": string;
  Smoke: string;
  "Smoke Status": string;
  Alcohol: string;
  "Alcohol Status": string;
  CO2: string;
  "CO2 Status": string;
  Ammonia: string;
  "Ammonia Status": string;
}

// Helper function to determine status
const getStatus = (value: number, sensorType: string): string => {
  const thresholds: Record<string, { good: number; warning: number }> = {
    temperature: { good: 25, warning: 30 },
    humidity: { good: 50, warning: 70 },
    smoke: { good: 50, warning: 100 },
    alcohol: { good: 10, warning: 50 },
    carbonDioxide: { good: 400, warning: 1000 },
    ammonia: { good: 10, warning: 25 },
  };

  const threshold = thresholds[sensorType];
  if (!threshold) return "Unknown";

  if (value <= threshold.good) return "Good";
  if (value <= threshold.warning) return "Warning";
  return "Critical";
};

// Helper to transform logs for export
const transformLogsForExport = (logs: SensorLog[]): ExportData[] => {
  return logs.map((log) => ({
    Date: log.date,
    Temperature: `${log.temperatureVal}°C`,
    "Temp Status": getStatus(log.temperatureVal, "temperature"),
    Humidity: `${log.humidityVal}%`,
    "Humid Status": getStatus(log.humidityVal, "humidity"),
    Smoke: `${log.smokeVal} ppm`,
    "Smoke Status": getStatus(log.smokeVal, "smoke"),
    Alcohol: `${log.alcoholVal} ppm`,
    "Alcohol Status": getStatus(log.alcoholVal, "alcohol"),
    CO2: `${log.carbonDioxideVal} ppm`,
    "CO2 Status": getStatus(log.carbonDioxideVal, "carbonDioxide"),
    Ammonia: `${log.ammoniaVal} ppm`,
    "Ammonia Status": getStatus(log.ammoniaVal, "ammonia"),
  }));
};

// PDF Export Function
export const exportToPDF = (logs: SensorLog[], fileName?: string) => {
  try {
    // Initialize PDF document
    const doc = new jsPDF({
      orientation: "landscape",
      unit: "mm",
      format: "a4",
    });

    // Add title
    doc.setFontSize(16);
    doc.text("FumeSight | Sensor Data Report", 14, 15);

    // Add date
    doc.setFontSize(10);
    doc.text(`Generated on: ${new Date().toLocaleString()}`, 14, 22);

    // Prepare data for PDF table
    const tableData = logs.map((log) => [
      log.date,
      `${log.temperatureVal}°C`,
      getStatus(log.temperatureVal, "temperature"),
      `${log.humidityVal}%`,
      getStatus(log.humidityVal, "humidity"),
      `${log.smokeVal} ppm`,
      getStatus(log.smokeVal, "smoke"),
      `${log.alcoholVal} ppm`,
      getStatus(log.alcoholVal, "alcohol"),
      `${log.carbonDioxideVal} ppm`,
      getStatus(log.carbonDioxideVal, "carbonDioxide"),
      `${log.ammoniaVal} ppm`,
      getStatus(log.ammoniaVal, "ammonia"),
    ]);

    // Define table columns
    const headers = [
      [
        "Date",
        "Temp",
        "Status",
        "Humidity",
        "Status",
        "Smoke",
        "Status",
        "Alcohol",
        "Status",
        "CO2",
        "Status",
        "Ammonia",
        "Status",
      ],
    ];

    // Create table
    autoTable(doc, {
      head: headers,
      body: tableData,
      startY: 30,
      theme: "grid",
      styles: { fontSize: 8, cellPadding: 2 },
      headStyles: { fillColor: [41, 128, 185], textColor: 255, fontSize: 9 },
      columnStyles: {
        0: { cellWidth: 25 }, // Date
        1: { cellWidth: 15 }, // Temp
        2: { cellWidth: 15 }, // Temp Status
        3: { cellWidth: 15 }, // Humidity
        4: { cellWidth: 15 }, // Humid Status
        5: { cellWidth: 15 }, // Smoke
        6: { cellWidth: 15 }, // Smoke Status
        7: { cellWidth: 15 }, // Alcohol
        8: { cellWidth: 15 }, // Alcohol Status
        9: { cellWidth: 15 }, // CO2
        10: { cellWidth: 15 }, // CO2 Status
        11: { cellWidth: 15 }, // Ammonia
        12: { cellWidth: 15 }, // Ammonia Status
      },
      didDrawPage: (data) => {
        // Add footer
        const pageCount = doc.getNumberOfPages();
        doc.setFontSize(8);
        doc.text(
          `Page ${data.pageNumber} of ${pageCount}`,
          doc.internal.pageSize.width / 2,
          doc.internal.pageSize.height - 10,
          { align: "center" }
        );
      },
    });

    // Generate filename if not provided
    const finalFileName =
      fileName || `sensor_data_${new Date().toISOString().split("T")[0]}.pdf`;

    // Save PDF
    doc.save(finalFileName);

    return { success: true, fileName: finalFileName };
  } catch (error) {
    console.error("Error exporting to PDF:", error);
    throw new Error("Failed to export to PDF. Please try again.");
  }
};

// Excel Export Function
export const exportToExcel = (logs: SensorLog[], fileName?: string) => {
  try {
    // Transform logs for export
    const exportData = transformLogsForExport(logs);

    // Create worksheet
    const worksheet = XLSX.utils.json_to_sheet(exportData);

    // Auto-size columns
    const maxWidth = exportData.reduce((acc, row) => {
      Object.values(row).forEach((value) => {
        const length = value?.toString().length || 0;
        if (length > acc) acc = length;
      });
      return acc;
    }, 10);

    worksheet["!cols"] = Array(Object.keys(exportData[0] || {}).length)
      .fill(null)
      .map(() => ({ wch: Math.min(maxWidth, 50) }));

    // Create workbook
    const workbook = XLSX.utils.book_new();
    XLSX.utils.book_append_sheet(workbook, worksheet, "Sensor Data");

    // Generate filename if not provided
    const finalFileName =
      fileName || `sensor_data_${new Date().toISOString().split("T")[0]}.xlsx`;

    // Save Excel file
    XLSX.writeFile(workbook, finalFileName);

    return { success: true, fileName: finalFileName };
  } catch (error) {
    console.error("Error exporting to Excel:", error);
    throw new Error("Failed to export to Excel. Please try again.");
  }
};

export const exportSelectedRows = async (
  logs: SensorLog[],
  selectedRows: number[],
  format: "excel" | "pdf" | "word"
) => {
  const selectedLogs = logs.filter((_, index) => selectedRows.includes(index));

  if (selectedLogs.length === 0) {
    throw new Error("No rows selected for export.");
  }

  const fileName = `selected_sensor_data_${
    new Date().toISOString().split("T")[0]
  }`;

  switch (format) {
    case "excel":
      return exportToExcel(selectedLogs, `${fileName}.xlsx`);
    case "pdf":
      return exportToPDF(selectedLogs, `${fileName}.pdf`);
    default:
      throw new Error("Invalid export format.");
  }
};
