import "./App.css";
import Header from "./Header";
import NumberList from "./exercise1/exercise1_4";
import GetRandomNumber from "./exercise1/exercise1_5";
import GreetingPersons from "./exercise1/exercise1_6";
import FavoriteFruit from "./exercise1/exercise1_7";
import ColorList from "./exercise2/ColorList";
import ContactList from "./exercise2/ContactList";

function Hello() {
  return <h1>Hyvä</h1>;
}

// exercise2.1
// function Header() {
//   return <h2>Welcome to My APP!</h2>;
// }

// exercise1.1-2
function getGreeting() {
  return "Welcome to the World of React";
}

function App() {
  let a = "world of expression";
  let b = 2;
  let c = 6;
  let d = 8;

  // exercist1.3
  const colorArray = ["red", "yellow", "green", "blue"];
  //const result = colorArray.join(", ");

  return (
    <div>
      <Header />
      <NumberList />
      <GetRandomNumber />
      <GreetingPersons />
      <FavoriteFruit />
      <ColorList />
      <ContactList />

      <h1>Hello, React!</h1>
      <p>{getGreeting()}</p>

      {/* <p>{result}</p> */}
      <p>{colorArray.join(", ")}</p>

      {/* <h1>{Hello()}</h1> */}
      <Hello />
      <Hello></Hello>

      <h1>hello {a}</h1>
      <p>a + b + c </p>
      <p>
        {a} + {b} + {c}
      </p>
      <p>
        {a} + {b + d}
      </p>
    </div>
  );
}

export default App;
