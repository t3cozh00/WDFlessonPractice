import "./App.css";
import Ex81BookList from "./Ex8Lists/Ex81BookList";
import Ex82AddBooks from "./Ex8Lists/Ex82AddList";
import Ex83FilterList from "./Ex8Lists/Ex83FilterList";
import Ex91ControlledForm from "./Ex9Form/Ex91ControlledForm";
import Ex92UncontrolledForm from "./Ex9Form/Ex92UncontrolledForm";
import Ex95InvestCalculator from "./Ex9Form/Ex95InvestCalculator";

function App() {
  return (
    <>
      <Ex95InvestCalculator />
      <hr />
      <Ex92UncontrolledForm />
      <hr />
      <Ex91ControlledForm />
      <hr />
      <Ex83FilterList />
      <hr />
      <Ex82AddBooks />
      <hr />
      <Ex81BookList
        books={[
          "To Kill a Mockingbird",
          "1984",
          "Educated",
          "The Immortal Life of Henrietta Lacks",
          "The Glass Castle",
        ]}
      />
      <hr />
    </>
  );
}

export default App;
