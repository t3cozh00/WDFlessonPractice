import React from "react";
import { useState } from "react";

export default function ClickCounter() {
  //let counter = 1;
  const [counter, setCounter] = useState(0);

  function clickHandler() {
    console.log("click");
    //counter++;
    setCounter(counter + 1);
    console.log(counter); // still hodls the old value, it will updated after the function finishes
  }

  return (
    <div>
      <h1>Click Counter</h1>
      <div>You have clicked the button {counter} times</div>
      <button onClick={clickHandler}>click me</button>
    </div>
  );
}
