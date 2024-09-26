// Bonus option1: Implement feature for the user to choose to make additional contributions on monthly basis.
// Bonus option2: Add a graph to visualize the savings and investments

import React, { useState } from "react";

import { InvestmentData } from "./InvestmentData";
import AreaChartComponent from "./AreaChart";
import BarChartComponent from "./BarChart";
import Table from "./Table";
import Form from "./Form";

export default function Ex9501InvestmentCalculator() {
  const [investmentData, setInvestmentData] = useState<InvestmentData[]>([]);

  const [display, setDisplay] = useState("none");
  //   const investmentData: InvestmentYearData = [{}];

  function formYearlySubmissionHandler(event: React.FormEvent) {
    event.preventDefault();

    const formData = new FormData(event.target as HTMLFormElement);
    // FormData is a built-in object that allows you to capture form data

    const initialInvestment = Number(formData.get("initialInvestment"));
    console.log("initialInvestment:", initialInvestment);
    const returnRate = Number(formData.get("returnRate"));
    console.log("returnRate:", returnRate);
    const investmentDuration = Number(formData.get("investmentDuration"));
    console.log("investmentDuration:", investmentDuration);
    const additionalContributionValue = Number(
      formData.get("additionalContributionValue")
    );
    console.log("additionalContributionValue:", additionalContributionValue);

    const investmentType = formData.get("investmentType");

    let newInvestmentData: InvestmentData[] = [];
    let totalInvestmentValue = initialInvestment;
    let savedTotalValue = initialInvestment;

    for (let i = 1; i <= investmentDuration; i++) {
      //calculate the values
      let annualReturn = totalInvestmentValue * (returnRate / 100);
      if (investmentType === "monthly") {
        let additionalMonthlyContribution = additionalContributionValue * 12;
        savedTotalValue += additionalMonthlyContribution;
        totalInvestmentValue += annualReturn + additionalMonthlyContribution;
      } else if (investmentType === "yearly") {
        savedTotalValue += additionalContributionValue;
        totalInvestmentValue += annualReturn + additionalContributionValue;
      }

      //create the object
      let investmentYearResults: InvestmentData = {
        year: i,
        savedTotalValue: savedTotalValue,
        annualReturn: annualReturn,
        totalInvestmentValue: totalInvestmentValue,
      };

      // add the object to the array
      newInvestmentData.push(investmentYearResults);
    }
    setInvestmentData(newInvestmentData);
    console.log("investmentData:", investmentData);
    setDisplay("block");
  }

  return (
    <div>
      <h2>Ex95 Investment Yearly or Monthly Calculator</h2>
      <Form onSubmit={formYearlySubmissionHandler} />
      <Table display={display} investmentData={investmentData} />
      <BarChartComponent display={display} data={investmentData} />
      {/* <AreaChartComponent /> */}
    </div>
  );
}
