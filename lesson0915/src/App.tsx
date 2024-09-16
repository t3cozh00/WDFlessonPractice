import "./App.css";
import { useState } from "react";
import ButtonComponent1 from "./ButtonComponent1";
import DisplayUserInfo from "./DisplayUserInfo";
import PassUserInfo from "./PassUserInfo";
import { UserInfo } from "./Types";
import Menu from "./exercise701/Menu";
import ButtonComponent2 from "./ButtonComponent2";
import ButtonComponent3 from "./ButtonComponent3";

function App() {
  const batMan: UserInfo = { firstName: "Bruce", lastName: "Wayne", age: 42 };

  const [text, setText] = useState("");
  const [message, setMessage] = useState<string>("");

  const handleClick1 = () => {
    setText("Clicked");
    console.log("Button1 clicked");
  };

  const handleClick2 = (event: React.MouseEvent<HTMLButtonElement>) => {
    console.log("Button2 clicked at", event.clientX, event.clientY);
    return "Button2 clicked";
  };

  const handleClick3 = (
    event: React.MouseEvent<HTMLButtonElement>,
    setMessage: React.Dispatch<React.SetStateAction<string>>
  ) => {
    console.log("Button3 clicked at", event.clientX, event.clientY);
    setMessage("Button3 clicked");
  };

  return (
    <>
      <Menu />
      <hr />
      <ButtonComponent3
        label="REACT"
        onClick={(e) => handleClick3(e, setMessage)}
      />
      <p>{message}</p>
      <hr />
      <ButtonComponent2 label="REACT" onClick={handleClick2} />
      <hr />
      <ButtonComponent1 text={text} label="REACT" onClick={handleClick1} />
      <hr />
      <DisplayUserInfo firstName={"John"} lastName="Smith" age={30} />
      <PassUserInfo
        userInfo={{ firstName: "John", lastName: "Smith", age: 30 }}
      />
      <PassUserInfo userInfo={batMan} />
    </>
  );
}

export default App;

//https://react.dev/learn/react-developer-tools
