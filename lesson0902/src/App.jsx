import "./App.css";
import Greeter from "./Greeter";
import Ex32ColorList from "./exercise3/Ex32ColorList";
import Ex32bColorList from "./exercise3/Ex32bColorList";
import Ex34ContactList from "./exercise3/Ex34ContactList";

const colorArray = ["yellow", "red", "blue", "green"];

const persons = [
  { name: "Max", address: "333" },
  { name: "Penny", address: "553" },
  { name: "Tom", address: "123" },
  { name: "Jerry", address: "321" },
  { name: "Spike", address: "999" },
  { name: "Screwy", address: "444" },
  { name: "Lightning", address: "222" },
  { name: "Topsy", address: "111" },
];

function App() {
  return (
    <div>
      <Ex34ContactList className="logo" contacts={persons} />
      <Ex32bColorList colors={colorArray} />
      <Ex32ColorList color1="yellow" color2="red" color3="white" />
      <Greeter username="Max" />
      <Greeter username="Peny" />
      <Greeter />
    </div>
  );
}

export default App;
