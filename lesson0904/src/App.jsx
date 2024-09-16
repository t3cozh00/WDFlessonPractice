//import { useState } from "react";
import "./App.css";
import Ex52ClickCounter from "./exercise5/Ex52ClickCounter";
import Ex51TextInputReader from "./exercise5/Ex51TextInputReader";
import Ex54HideParagraph from "./exercise5/Ex54HideParagraph";
import Ex56UserInfo from "./exercise5/Ex56UserInfo";
import Ex55SpecialKey from "./exercise5/Ex55SpecialKey";
import Ex53ColorChange from "./exercise5/Ex53ColorChange";
import Ex57UseRefHook from "./exercise5/Ex57UseRefHook";
import Ex58FocusInput from "./exercise5/Ex58FocusInput";

function App() {
  //const [count, setCount] = useState(0);

  return (
    <>
      <hr />
      <p>Ex58FocusInput</p>
      <Ex58FocusInput />
      <hr />
      <p>Ex57UseRefHook</p>
      <Ex57UseRefHook />
      <hr />
      <p>Ex53ColorChange</p>
      <Ex53ColorChange />
      <hr />
      <p>Ex55SpecialKey</p>
      <Ex55SpecialKey />
      <hr />
      <p>Ex56UserInfo</p>
      <Ex56UserInfo />
      <hr />
      <p>Ex54HideParagraphp</p>
      <Ex54HideParagraph />
      <hr />
      <p>Ex52ClickCounter</p>
      <Ex52ClickCounter />
      <hr />
      <p>Ex51TextInputReader</p>
      <Ex51TextInputReader />
    </>
  );
}

export default App;
