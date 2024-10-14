import { useState } from "react";

interface Price {
  priceOfSingleVMPerHour: number;
}

export default function CostCalculator({ priceOfSingleVMPerHour }: Price) {
  const [number, setNumber] = useState<number>(1);

  const costHour = priceOfSingleVMPerHour * number;
  const costDay = costHour * 24;
  const costMonth = costDay * 30;
  const costYear = costHour * 8760;

  function handleOnchang(event) {
    setNumber(event.target.value);
  }

  return (
    <div>
      <h3 style={{ color: "red" }}>assignment3 vm calculator</h3>
      <h1>VM Cost Calculator</h1>
      <label htmlFor="vmNumber">Number of VMs</label>
      <input
        type="text"
        id="vmNumber"
        placeholder="Number of VMs"
        value={number}
        onChange={handleOnchang}
      />

      <p>Cost per hour: {costHour}</p>
      <p>Cost per day: {costDay}</p>
      <p>Cost per month: {costMonth}</p>
      <p>Cost per year: {costYear}</p>
    </div>
  );
}
