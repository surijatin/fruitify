"use client";

import { Pie, PieChart, Cell } from "recharts";

import { Card, CardContent, CardHeader, CardTitle } from "components/ui/card";
import {
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
  ChartLegend,
  ChartLegendContent,
} from "components/ui/chart";

const generateChartConfig = (chartData) => {
  const config = {
    totalCal: {
      label: "Total Calories",
    },
  };

  chartData.forEach((data, index) => {
    config[data.name] = {
      label: data.name,
      color: `hsl(var(--chart-${index + 1}))`,
    };
  });

  return config;
};

export function PieChartComponent({ chartData }) {
  const chartConfig = generateChartConfig(chartData);

  return (
    <Card className="flex flex-col">
      <CardHeader className="items-center pb-0">
        <CardTitle>Distribution of Calories</CardTitle>
      </CardHeader>
      <CardContent className="flex-1 pb-0">
        <ChartContainer
          config={chartConfig}
          className="mx-auto aspect-square max-h-[400px] pb-0 [&_.recharts-pie-label-text]:fill-foreground"
        >
          <PieChart>
            <ChartTooltip content={<ChartTooltipContent hideLabel />} />
            <Pie data={chartData} dataKey="totalCal" label nameKey="name">
              {chartData.map((entry, index) => (
                <Cell
                  key={`cell-${index}`}
                  fill={`hsl(var(--chart-${index + 1}))`}
                />
              ))}
            </Pie>
            <ChartLegend
              content={<ChartLegendContent nameKey="name" />}
              className="-translate-y-2 flex-wrap"
            />
          </PieChart>
        </ChartContainer>
      </CardContent>
    </Card>
  );
}
