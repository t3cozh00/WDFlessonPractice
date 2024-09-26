"use client";

import {
  AreaChart,
  Area,
  ResponsiveContainer,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
} from "recharts";

const AreaChartComponent = () => {
  const investmentData = [
    {
      year: 1,
      savedTotalValue: 1000,
      annualReturn: 100,
      totalInvestmentValue: 1100,
    },
    {
      year: 2,
      savedTotalValue: 1100,
      annualReturn: 110,
      totalInvestmentValue: 1210,
    },
    {
      year: 3,
      savedTotalValue: 1210,
      annualReturn: 121,
      totalInvestmentValue: 1331,
    },
    {
      year: 4,
      savedTotalValue: 1331,
      annualReturn: 133.1,
      totalInvestmentValue: 1464.1,
    },
    {
      year: 5,
      savedTotalValue: 1464.1,
      annualReturn: 146.41,
      totalInvestmentValue: 1610.51,
    },
  ];
  return (
    <AreaChart width={400} height={300} data={investmentData}>
      <YAxis />
      <XAxis dataKey="year" />
      <CartesianGrid strokeDasharray="3 3" />
      <Tooltip />
      <Legend />
      <Area
        dataKey="savedTotalValue"
        type="monotone"
        fill="#3b82f6"
        stackId="1"
      />
      <Area
        dataKey="totalInvestmentValue"
        type="monotone"
        fill="#8b5cf6"
        stackId="1"
      />
    </AreaChart>
  );
};

// const CustomTooltip = ({ active, payload, label }) => {
//   if (active && payload && payload.length) {
//     return (
//       <div
//         style={{
//           background: "white",
//           border: "1px solid #ccc",
//           padding: "10px",
//         }}
//       >
//         <p>{`Year: ${label}`}</p>
//         <p>{`Total Investment Value: ${payload[0].value}`}</p>
//         <p>{`Saved Total Value: ${payload[1].value}`}</p>
//       </div>
//     );
//   }
// };

export default AreaChartComponent;
