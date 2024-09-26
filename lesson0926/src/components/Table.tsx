import classes from "./Ex95TableStyle.module.css";
import { InvestmentData } from "./InvestmentData";

export default function ({
  display,
  investmentData,
}: {
  display: string;
  investmentData: InvestmentData[];
}) {
  return (
    <div style={{ display: display }}>
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
