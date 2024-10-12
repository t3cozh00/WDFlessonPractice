import React from "react";
import { useState } from "react";
import Ex510Increment from "./Ex510Increment";
import Ex510Decrement from "./Ex510Decrement";
import Ex510Reset from "./Ex510Reset";

export default function Ex510Counter() {
  const [counter, setCounter] = useState(0);

  function incrementCounter() {
    setCounter(counter + 1);
  }

  function decrementCounter() {
    setCounter(counter - 1);
  }

  function resetCounter() {
    setCounter(0);
  }

  return (
    <div>
      <p>{counter}</p>
      <Ex510Increment
        setDisabled={counter >= 10 ? true : false}
        incrementCounter={incrementCounter}
        text="Increase"
      />
      <Ex510Decrement
        setDisabled={counter <= 0 ? true : false}
        decrementCounter={decrementCounter}
        text="Decrease"
      />
      <Ex510Reset resetCounter={resetCounter} text="Reset" />
    </div>
  );
}
