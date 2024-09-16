import React from "react";
import { useState } from "react";
import Ex510Increment from "./Ex510Increment";
import Ex510Decrement from "./Ex510Decrement";
import Ex510Reset from "./Ex510Reset";

export default function Ex510Counter() {
  const [counter, setCounter] = useState(0);

  function incrementCounter() {
    console.log("click");
    setCounter(counter + 1);
    console.log(counter);
  }

  function decrementCounter() {
    console.log("click");
    setCounter(counter - 1);
    console.log(counter);
  }

  function resetCounter() {
    console.log("click");
    setCounter(0);
    console.log(counter);
  }

  return (
    <div>
      <p>{counter}</p>
      <Ex510Increment
        incrementCounter={incrementCounter}
        text="Increase"
        limitCounter={counter}
      />
      <Ex510Decrement decrementCounter={decrementCounter} text="Decrease" />
      <Ex510Reset resetCounter={resetCounter} text="Reset" />
    </div>
  );
}
