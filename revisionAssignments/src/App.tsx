import "./App.css";
import Display1 from "./assignment1/Display1";
import Display2 from "./assignment2/Display2";
import CostCalculator from "./assignment3/CostCalculator";
import Display4 from "./assignment4/Display4";

function App() {
  return (
    <>
      <Display4 />
      <CostCalculator priceOfSingleVMPerHour={0.5} />
      {/* <Display1 /> */}
      {/* <Display2 /> */}
    </>
  );
}

export default App;
