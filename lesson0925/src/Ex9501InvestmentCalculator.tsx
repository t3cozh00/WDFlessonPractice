// Bonus option1: Implement feature for the user to choose to make additional contributions on monthly basis.
// Bonus option2: Add a graph to visualize the savings and investments

import React, { useState } from "react";
import classes from "./Ex95Table.module.css";

interface InvestmentYearData {
  year: number;
  savedTotalValue: number;
  annualReturn: number;
  totalInvestmentValue: number;
}

export default function Ex9501InvestmentCalculator() {
  const [investmentData, setInvestmentData] = useState<InvestmentYearData[]>(
    []
  );
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

    let newInvestmentData: InvestmentYearData[] = [];
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
      let investmentYearResults: InvestmentYearData = {
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
  }

  return (
    <div>
      <h2>Ex9501InvestmentCalculator</h2>
      <form onSubmit={formYearlySubmissionHandler}>
        <div>
          Initial Investment:
          <input type="number" name="initialInvestment" />
        </div>
        <div>
          Annual Return Rate(%):
          <input type="number" name="returnRate" />
        </div>
        <div>
          Investment Duration:
          <input type="number" name="investmentDuration" />
        </div>
        <div>
          Additional Contribution:
          <input type="number" name="additionalContributionValue" />
        </div>
        <div>
          <label>Yearly</label>
          <input type="radio" name="investmentType" value="yearly" />
          <label>Monthly</label>
          <input type="radio" name="investmentType" value="monthly" />
        </div>
        <button>Calculate</button>
      </form>

      <table className={classes.table}>
        <thead>
          <tr>
            <th>Year</th>
            <th>Saved total value </th>
            <th>Annual return</th>
            <th>Total investment value</th>
          </tr>
        </thead>
        <tbody>
          {investmentData.map((data, i) => (
            <tr key={i}>
              <td>{data.year}</td>
              <td>{data.savedTotalValue.toFixed(2)}</td>
              <td>{data.annualReturn.toFixed(2)}</td>
              <td>{data.totalInvestmentValue.toFixed(2)}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
