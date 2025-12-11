import { Badge } from "@/components/ui/badge";
import { getStatus } from "../utils/SensorStatus.tsx";
import { getBadgeConfig } from "../utils/BadgeConfig.tsx";

export type StatusBadgeProps = {
  value: number;
  sensorType: string;
};

export function AppStatusBadge({ value, sensorType }: StatusBadgeProps) {
  const status = getStatus(value, sensorType);
  const badgeConfig = getBadgeConfig(status);
  const Icon = badgeConfig.icon;

  return (
    <Badge
      variant="secondary"
      className={`text-white px-1.5 ${badgeConfig.className}`}
    >
      <Icon className={badgeConfig.iconColor} size={14} />
      <span className="ml-1">{status}</span>
    </Badge>
  );
}
