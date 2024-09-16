import React from "react";
import { useState } from "react";

export default function HideParagraph() {
  //const displayValue = 'none';
  const [displayValue, setDisplayValue] = useState("none");

  function clickHideText() {
    if (displayValue == "none") {
      setDisplayValue("block");
    } else {
      setDisplayValue("none");
    }
  }

  return (
    <div>
      <button onClick={clickHideText}>Click to hide the text</button>
      <p style={{ display: displayValue }}>Text to be visible and hidden</p>
    </div>
  );
}
