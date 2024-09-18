import "./App.css";
import Ex81BookList from "./Ex8Lists/Ex81BookList";
import Ex8101BookList from "./Ex8Lists/Ex8101BookList";
import Ex82AddBooks from "./Ex8Lists/Ex82AddBooks";

function App() {
  return (
    <>
      <Ex82AddBooks />
      <hr />
      Ex8101
      <Ex8101BookList
        books={[
          "To Kill a Mockingbird",
          "1984",
          "Educated",
          "The Immortal Life of Henrietta Lacks",
          "The Glass Castle",
        ]}
      />
      <hr />
      Ex81
      <Ex81BookList />
    </>
  );
}

export default App;
