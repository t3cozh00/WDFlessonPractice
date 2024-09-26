"use client";

import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";

import { InvestmentData } from "./InvestmentData";

export default function BarChartComponent({
  display,
  data,
}: {
  display: string;
  data: InvestmentData[];
}) {
  //   const investmentData = [
  //     {
  //       year: 1,
  //       savedTotalValue: 1000,
  //       annualReturn: 100,
  //       totalInvestmentValue: 1100,
  //     },
  //     {
  //       year: 2,
  //       savedTotalValue: 1100,
  //       annualReturn: 110,
  //       totalInvestmentValue: 1210,
  //     },
  //     {
  //       year: 3,
  //       savedTotalValue: 1210,
  //       annualReturn: 121,
  //       totalInvestmentValue: 1331,
  //     }
  //   ];
  return (
    <div style={{ display: display }}>
      <BarChart width={400} height={300} data={data}>
        <YAxis />
        <XAxis dataKey="year" />
        <CartesianGrid strokeDasharray="3 3" />
        <Tooltip />
        <Legend />
        <Bar dataKey="savedTotalValue" fill="#8df65c" stackId="1" />
        <Bar dataKey="annualReturn" fill="#f65c5c" stackId="1" />
        {/* <Bar
        dataKey="totalInvestmentValue"
        type="monotone"
        fill="#8b5cf6"
        stackId="1"
      /> */}
      </BarChart>
    </div>
  );
}
