import "./App.css";
import AlertButton from "./exercise4/AlertButton";
import ConsoleButton from "./exercise4/ConsoleButton";
import GeneralButton from "./exercise4/GeneralButton";
import Ex4502GernalButton from "./exercise4/Ex4502GernalButton";
import Ex46InputReader from "./exercise4/Ex46InputReader";

function App() {
  function generalButtonHandler() {
    console.log("It works! yay general button clicked");
  }

  function Revison1010() {
    console.log("Revision1010");
  }

  function handleInputText(event) {
    console.log(event.target.value);
  }

  return (
    <>
      <Ex46InputReader readInputText={handleInputText} />
      <Ex4502GernalButton
        buttonText="Revision1010"
        buttonAction={Revison1010}
      />
      <GeneralButton
        buttonText="this is general button"
        buttonAction={generalButtonHandler}
      />
      <AlertButton alertText="alert!!!" />
      <ConsoleButton consoleText="console button clicked" />
    </>
  );
}

export default App;
