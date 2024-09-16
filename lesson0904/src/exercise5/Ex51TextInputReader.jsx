import React from "react";
import { useState } from "react";

export default function () {
  const [textHolder, setTextHolder] = useState("");
  const [textOutput, setTextOutput] = useState("");

  function textInputChanged(event) {
    // text input value can be read from event.target.value
    // set the textHolder state with the value
    setTextHolder(event.target.value);
  }

  function buttonClick() {
    // set the textOutput state with the value of textHolder
    setTextOutput(textHolder);
  }

  return (
    <div>
      <input type="text" onChange={textInputChanged} />
      <button onClick={buttonClick}>Read text</button>
      <h2>
        Text from text input shall appear below when you click the button:
      </h2>
      <div>{textOutput}</div>
    </div>
  );
}
