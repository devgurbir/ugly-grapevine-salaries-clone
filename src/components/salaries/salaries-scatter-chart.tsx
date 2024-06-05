"use client";
import {
  ScatterChart,
  Scatter,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
  Legend,
} from "recharts";

import data from "./mock-data";
import CustomSalaryTooltip from "./custom-salary-tooltip";

const ABOVE_AVERAGE = 1000000;
const AVERAGE = 750000;

export default function SalariesScatterChart() {
  const chartData = data.map((item) => ({
    ...item,
    x: item.experience,
    y: item.salary / 10000,
  }));

  const aboveAverageData = chartData.filter(
    (item) => item.salary >= ABOVE_AVERAGE
  );
  const averageData = chartData.filter(
    (item) => item.salary < ABOVE_AVERAGE && item.salary >= AVERAGE
  );
  const belowAverageData = chartData.filter((item) => item.salary < AVERAGE);

  return (
    <ResponsiveContainer width="100%" height={400}>
      <ScatterChart
        margin={{
          top: 20,
          right: 20,
          bottom: 24,
          left: 20,
        }}
      >
        {/* <CartesianGrid /> */}
        <XAxis type="number" dataKey="x" name="experience" unit="Y" />
        <YAxis type="number" dataKey="y" name="salary" unit="" />
        <Tooltip
          content={({ payload, active, label }) => {
            if (active && payload?.length) {
              return <CustomSalaryTooltip {...payload[0].payload} />;
            } else {
              return null;
            }
          }}
        />
        <Scatter name="Above avg" data={aboveAverageData} fill="teal" />
        <Scatter name="Average" data={averageData} fill="seagreen" />
        <Scatter name="Below Average" data={belowAverageData} fill="#7FDDCF" />
        <Legend verticalAlign="bottom" height={36} />
      </ScatterChart>
    </ResponsiveContainer>
  );
}
