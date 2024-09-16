import "./App.css";
import Greeter from "./Greeter";
import ColorList from "./exercise3/ColorList";
import ColorList2 from "./exercise3/ColorList2";
import ContactItem from "./exercise3/ContactItem";
import ContactList from "./exercise3/ContactList";

const colorArray = ["yellow", "red"];

const persons = [
  { name: "Max", address: "333" },
  { name: "Penny", address: "553" },
];

function App() {
  return (
    <div>
      <Greeter username="Max" />
      <Greeter username="Peny" />
      <Greeter />

      <ColorList color1="yellow" color2="red" color3="white" />

      <ColorList2 colors={colorArray} />

      <ContactList className="logo" contacts={persons} />
    </div>
  );
}

export default App;
