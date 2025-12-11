import {
  Label,
  PolarGrid,
  PolarRadiusAxis,
  RadialBar,
  RadialBarChart,
} from "recharts";

import {
  ChartContainer,
  ChartTooltipContent,
  ChartTooltip,
  type ChartConfig,
} from "@/components/ui/chart";
import { useState, useEffect } from "react";
import { getStatus, getStatusColor } from "@/utils/SensorStatus";

const chartConfig = {
  ammonia: {
    label: "Ammonia",
  },
} satisfies ChartConfig;

interface AppAmmoniaChart {
  maxValue: number;
  label: string;
}
export function AppAmmoniaChart({ maxValue, label }: AppAmmoniaChart) {
  const [ammoniaVal, setAmmoniaValue] = useState(0);

  const percentage = (ammoniaVal / maxValue) * 100;
  const endAngle = (percentage / 100) * 360;
  const [isLgScreen, setIsLgScreen] = useState(false);

  const status = getStatus(ammoniaVal, "ammonia");
  const statusColor = getStatusColor(status);

  useEffect(() => {
    const checkScreenSize = () => {
      setIsLgScreen(window.innerWidth >= 1024);
    };

    checkScreenSize();
    window.addEventListener("resize", checkScreenSize);
    return () => window.removeEventListener("resize", checkScreenSize);
  }, []);

  const chartData = [
    { browser: "safari", ammonia: ammoniaVal, fill: statusColor },
  ];
  useEffect(() => {
    const ws = new WebSocket("ws://localhost:8080");

    ws.onopen = () => {
      ws.send(JSON.stringify({ type: "identify", client: "dashboard" }));
    };

    ws.onmessage = (event) => {
      try {
        const msg = JSON.parse(event.data);

        if (msg.type === "sensor") {
          setAmmoniaValue(msg.data.ammoniaVal);
        }
      } catch (err) {
        console.log("WS JSON ERROR:", err);
      }
    };

    return () => ws.close();
  }, []);

  return (
    <ChartContainer
      config={chartConfig}
      className="mx-auto aspect-square max-h-[250px] pb-0"
    >
      <RadialBarChart
        data={chartData}
        startAngle={0}
        endAngle={endAngle}
        innerRadius={isLgScreen ? 80 : 76}
        outerRadius={isLgScreen ? 140 : 132}
      >
        <PolarGrid
          gridType="circle"
          radialLines={false}
          stroke="none"
          className="first:fill-muted last:fill-background"
          polarRadius={isLgScreen ? [93, 67] : [90, 64]}
        />
        <RadialBar dataKey="ammonia" background cornerRadius={10} />
        <PolarRadiusAxis tick={false} tickLine={false} axisLine={false}>
          <Label
            content={({ viewBox }) => {
              if (viewBox && "cx" in viewBox && "cy" in viewBox) {
                return (
                  <text
                    x={viewBox.cx}
                    y={viewBox.cy}
                    textAnchor="middle"
                    dominantBaseline="middle"
                  >
                    <tspan
                      x={viewBox.cx}
                      y={viewBox.cy}
                      className="fill-foreground text-4xl font-bold"
                    >
                      {chartData[0].ammonia.toLocaleString()}
                    </tspan>
                    <tspan
                      x={viewBox.cx}
                      y={(viewBox.cy || 0) + 24}
                      className="fill-muted-foreground"
                    >
                      {label}
                    </tspan>
                  </text>
                );
              }
            }}
          />
        </PolarRadiusAxis>
        <ChartTooltip
          cursor={false}
          content={<ChartTooltipContent hideLabel />}
        />
      </RadialBarChart>
    </ChartContainer>
  );
}
