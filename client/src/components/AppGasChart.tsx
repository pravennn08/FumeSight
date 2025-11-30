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

const chartConfig = {
  visitors: {
    label: "Temperature",
  },
  safari: {
    label: "Safari",
    color: "var(--chart-2)",
  },
} satisfies ChartConfig;

export function AppGasChart({ maxValue, label }) {
  const value = 20;
  const percentage = (value / maxValue) * 100;
  const endAngle = (percentage / 100) * 360;

  const chartData = [
    { browser: "safari", visitors: value, fill: "var(--color-safari)" },
  ];
  return (
    <ChartContainer
      config={chartConfig}
      className="mx-auto aspect-square max-h-[250px] w-full"
    >
      <RadialBarChart
        data={chartData}
        startAngle={0}
        endAngle={endAngle}
        innerRadius={80}
        outerRadius={140}
      >
        <PolarGrid
          gridType="circle"
          radialLines={false}
          stroke="none"
          className="first:fill-muted last:fill-background"
          polarRadius={[93, 67]}
        />
        <RadialBar dataKey="visitors" background cornerRadius={10} />
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
                      {chartData[0].visitors.toLocaleString()}
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
