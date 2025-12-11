import { ShieldCheck, TriangleAlert, Angry, Skull } from "lucide-react";
export const getBadgeConfig = (status: string) => {
  switch (status) {
    case "Safe":
      return {
        className: "bg-green-500 text-white dark:bg-green-600",
        icon: ShieldCheck,
        iconColor: "text-white",
      };
    case "Warning":
      return {
        className: "bg-yellow-500 text-white dark:bg-yellow-600",
        icon: TriangleAlert,
        iconColor: "text-white",
      };
    case "Danger":
      return {
        className: "bg-orange-500 text-white dark:bg-orange-600",
        icon: Angry,
        iconColor: "text-white",
      };
    case "Critical":
      return {
        className: "bg-red-500 text-white dark:bg-red-600",
        icon: Skull,
        iconColor: "text-white",
      };
    default:
      return {
        className: "bg-gray-500 text-white dark:bg-gray-600",
        icon: ShieldCheck,
        iconColor: "text-white",
      };
  }
};
