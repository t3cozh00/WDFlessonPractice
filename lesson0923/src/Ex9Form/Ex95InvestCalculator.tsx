import { useState } from "react";
import { useRef } from "react";
import classes from "./Ex95Table.module.css";

export default function Ex95InvestCalculator() {
  const initialInvestmentRef = useRef<HTMLInputElement>();
  const annualReturnRateRef = useRef<HTMLInputElement>();
  const investmentDurationRef = useRef<HTMLInputElement>();
  const additionalAnnualContributionRef = useRef<HTMLInputElement>();

  const [investmentData, setInvestmentData] = useState([]);

  function formCalculateHandler(event) {
    event.preventDefault();
    console.log("Form submitted");

    const initialInvestment = parseInt(initialInvestmentRef.current.value);
    const annualReturnRate = parseInt(annualReturnRateRef.current.value);
    const investmentDuration = parseInt(investmentDurationRef.current.value);
    const additionalAnnualContribution = parseInt(
      additionalAnnualContributionRef.current.value
    );

    // read the form data from the form fileds
    console.log("Initial Investment:", initialInvestment);
    console.log("Annual Return Rate:", annualReturnRate);
    console.log("Investment Duration:", investmentDuration);
    console.log(
      "Additional Annual Contribution:",
      additionalAnnualContribution
    );

    const investmentResults = [];
    let savedTotalValue = initialInvestment;
    let totalInvestmentValue = initialInvestment;
    for (let i = 1; i <= investmentDuration; i++) {
      savedTotalValue += additionalAnnualContribution;
      const annualReturn = totalInvestmentValue * (annualReturnRate / 100);
      totalInvestmentValue += annualReturn + additionalAnnualContribution;
      investmentResults.push({
        year: i,
        savedTotalValue: savedTotalValue,
        annualReturn: annualReturn.toFixed(3),
        totalInvestmentValue: totalInvestmentValue.toFixed(3),
      });
      setInvestmentData(investmentResults);
    }
  }

  return (
    <div>
      <h2>Ex95InvestCalculator</h2>
      <form style={{ textAlign: "left" }} onSubmit={formCalculateHandler}>
        <div>
          Initial Investment:
          <input
            type="text"
            ref={initialInvestmentRef}
            name="initialInvestment"
            placeholder="Initial Investment"
          />
        </div>
        <div>
          Annual Return Rate:
          <input
            type="text"
            ref={annualReturnRateRef}
            name="annualReturnRate"
            placeholder="Annual Return Rate"
          />
        </div>
        <div>
          Investment Duration:
          <input
            type="text"
            ref={investmentDurationRef}
            name="investmentDuration"
            placeholder="Investment Duration"
          />
        </div>
        <div>
          Additional Annual Contribution:
          <input
            type="text"
            ref={additionalAnnualContributionRef}
            name="additionalAnnualContribution"
            placeholder="Additional Annual Contribution"
          />
        </div>
        <div>
          <button>Calculate</button>
        </div>
      </form>
      <div>
        <table className={classes.table}>
          <thead>
            <tr>
              <th>Year</th>
              <th>Saved total value </th>
              <th>Annual return</th>
              <th>Total investment value</th>
            </tr>
          </thead>
          <tbody className={classes.td}>
            {investmentData.map((data, i) => (
              <tr key={i}>
                <td>{data.year}</td>
                <td>{data.savedTotalValue}</td>
                <td>{data.annualReturn}</td>
                <td>{data.totalInvestmentValue}</td>
              </tr>
            ))}

            {/* <tr>
            //   <td>2</td>
            //   <td>1400</td>
            //   <td>88,9</td>
            //   <td>1558,9</td>
            // </tr> */}
          </tbody>
        </table>
      </div>
    </div>
  );
}
