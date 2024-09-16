import React from "react";
import { useState } from "react";

export default function Ex510Decrement({ decrementCounter, text }) {
  //   const [counter, setCounter] = useState(0);

  //   function handleIncrement() {
  //     decrementCounter();
  //     setCounter(counter);
  //   }

  return (
    <div>
      <button onClick={decrementCounter}>{text}</button>
    </div>
  );
}
