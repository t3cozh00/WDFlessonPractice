export default function Form({ onSubmit }: { onSubmit: (data: any) => void }) {
  return (
    <div>
      <form onSubmit={onSubmit}>
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
    </div>
  );
}
