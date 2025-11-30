// import { LabelList, PolarGrid, RadialBar, RadialBarChart } from "recharts";

// import {
//   type ChartConfig,
//   ChartContainer,
//   ChartTooltip,
//   ChartTooltipContent,
// } from "@/components/ui/chart";

// const chartData = [
//   {
//     browser: "Humidity",
//     value: 10,
//     fill: "var(--color-temp)",
//   },
//   {
//     browser: "Temperature",
//     value: 100,
//     fill: "var(--color-humid)",
//   },
// ];

// const chartConfig = {
//   value: {
//     label: "Value",
//   },
//   humid: {
//     label: "Humidity",
//     color: "var(--chart-2)",
//   },
//   temp: {
//     label: "Temperature",
//     color: "var(--chart-1)",
//   },
// } satisfies ChartConfig;

// export function AppTemperatureChart() {
//   return (
//     <ChartContainer
//       config={chartConfig}
//       className="mx-auto aspect-square max-h-[250px]"
//     >
//       <RadialBarChart
//         data={chartData}
//         startAngle={180}
//         endAngle={0}
//         innerRadius={38}
//         outerRadius={119}
//       >
//         <PolarGrid
//           gridType="circle"
//           radialLines={false}
//           stroke="none"
//           className="first:fill-muted last:fill-background"
//           polarRadius={[94, 63]}
//         />
//         <ChartTooltip
//           cursor={false}
//           content={<ChartTooltipContent hideLabel nameKey="value" />}
//         />
//         <RadialBar dataKey="value" background cornerRadius={15}>
//           <LabelList
//             position="insideStart"
//             dataKey="browser"
//             className="fill-white capitalize mix-blend-luminosity"
//             fontSize={12}
//           />
//         </RadialBar>
//       </RadialBarChart>
//     </ChartContainer>
//   );
// }

import { TrendingUp } from "lucide-react";
import { Label, PolarRadiusAxis, RadialBar, RadialBarChart } from "recharts";

import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  type ChartConfig,
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
} from "@/components/ui/chart";

export const description = "A radial chart with stacked sections";

const chartData = [{ month: "january", desktop: 20, mobile: 5 }];

const chartConfig = {
  desktop: {
    label: "Desktop",
    color: "var(--chart-1)",
  },
  mobile: {
    label: "Mobile",
    color: "var(--chart-2)",
  },
} satisfies ChartConfig;

export function AppTemperatureChart() {
  const totalVisitors = chartData[0].desktop + chartData[0].mobile;

  return (
    <ChartContainer
      config={chartConfig}
      className="mx-auto aspect-square w-full max-w-[250px]"
    >
      <RadialBarChart
        data={chartData}
        endAngle={360}
        innerRadius={80}
        outerRadius={130}
      >
        <ChartTooltip
          cursor={false}
          content={<ChartTooltipContent hideLabel />}
        />
        <PolarRadiusAxis tick={false} tickLine={false} axisLine={false}>
          <Label
            content={({ viewBox }) => {
              if (viewBox && "cx" in viewBox && "cy" in viewBox) {
                return (
                  <text x={viewBox.cx} y={viewBox.cy} textAnchor="middle">
                    <tspan
                      x={viewBox.cx}
                      y={(viewBox.cy || 0) - 16}
                      className="fill-foreground text-2xl font-bold"
                    >
                      {totalVisitors.toLocaleString()}
                    </tspan>
                    <tspan
                      x={viewBox.cx}
                      y={(viewBox.cy || 0) + 4}
                      className="fill-muted-foreground"
                    >
                      Temperature
                    </tspan>
                  </text>
                );
              }
              if (viewBox && "cx" in viewBox && "cy" in viewBox) {
                return (
                  <text x={viewBox.cx} y={viewBox.cy} textAnchor="middle">
                    <tspan
                      x={viewBox.cx}
                      y={(viewBox.cy || 0) - 16}
                      className="fill-foreground text-2xl font-bold"
                    >
                      {totalVisitors.toLocaleString()}
                    </tspan>
                    <tspan
                      x={viewBox.cx}
                      y={(viewBox.cy || 0) + 4}
                      className="fill-muted-foreground"
                    >
                      Temperature
                    </tspan>
                  </text>
                );
              }
            }}
          />
        </PolarRadiusAxis>
        <RadialBar
          dataKey="desktop"
          stackId="a"
          cornerRadius={5}
          fill="var(--color-desktop)"
          className="stroke-transparent stroke-2"
        />
        <RadialBar
          dataKey="mobile"
          fill="var(--color-mobile)"
          stackId="a"
          cornerRadius={5}
          className="stroke-transparent stroke-2"
        />
      </RadialBarChart>
    </ChartContainer>
  );
}
