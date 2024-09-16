import React from "react";
import { useState } from "react";

export default function Ex510Reset({ resetCounter, text }) {
  //   const [counter, setCounter] = useState(0);

  //   function handleReset() {
  //     resetCounter();
  //     setCounter(0);
  //   }

  return (
    <div>
      <button onClick={resetCounter}>{text}</button>
    </div>
  );
}
