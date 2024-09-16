import "./App.css";
import AlertButton from "./exercise4/AlertButton";
import ConsoleButton from "./exercise4/ConsoleButton";
import GeneralButton from "./exercise4/GeneralButton";

function App() {
  function generalButtonHandler() {
    console.log("it works! yay general button clicked");
  }

  return (
    <>
      <ConsoleButton consoleText="console when click button" />
      <AlertButton alertText="alert!!!" />
      <GeneralButton
        buttonText="this is general button"
        buttonAction={generalButtonHandler}
      />
    </>
  );
}

export default App;
