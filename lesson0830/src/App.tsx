import "./App.css";
import Header from "./Header";
import Ex14NumberList from "./exercise1/Ex14NumberList";
import Ex15GetRandomNumber from "./exercise1/Ex15GetRandomNumber";
import Ex16GreetingPersons from "./exercise1/Ex16GreetingPersons";
import Ex17FavoriteFruit from "./exercise1/Ex17FavoriteFruit";
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
      <Ex14NumberList />
      <Ex15GetRandomNumber />
      <Ex16GreetingPersons />
      <Ex17FavoriteFruit />
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
