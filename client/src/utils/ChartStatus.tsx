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
