import * as React from "react";
import { ChartContainer } from "@mui/x-charts/ChartContainer";
import { BarPlot } from "@mui/x-charts/BarChart";

const impressionsData = [8000, 7500, 7200, 6900, 6500, 6100, 5900];
const clicksData = [4000, 3500, 3000, 2900, 2600, 2300, 2100];
const conversionsData = [500, 450, 400, 350, 300, 250, 200];

const xLabels = [
  "Campaign A",
  "Campaign B",
  "Campaign C",
  "Campaign D",
  "Campaign E",
  "Campaign F",
  "Campaign G",
];

export default function AdvertiserBarChart() {
  return (
    <ChartContainer
      width={700}
      height={500}
      series={[
        {
          data: impressionsData,
          label: "Impressions",
          type: "bar",
          color: "#8884d8",
        },
        { data: clicksData, label: "Clicks", type: "bar", color: "#82ca9d" },
        {
          data: conversionsData,
          label: "Conversions",
          type: "bar",
          color: "#ffc658",
        },
      ]}
      xAxis={[{ scaleType: "band", data: xLabels }]}
    >
      <BarPlot />
    </ChartContainer>
  );
}
