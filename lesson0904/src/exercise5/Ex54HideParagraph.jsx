import React from "react";
import { useState } from "react";

export default function HideParagraph() {
  //const displayValue = 'none';
  const [displayValue, setDisplayValue] = useState("none");
  const [buttonText, setButtonText] = useState("show");

  function clickHideText() {
    if (displayValue == "none") {
      setDisplayValue("block");
      setButtonText("hide");
    } else {
      setDisplayValue("none");
      setButtonText("show");
    }
  }

  return (
    <div>
      <button onClick={clickHideText}>Click to {buttonText} the text</button>
      <p style={{ display: displayValue }}>Text to be visible and hidden</p>
    </div>
  );
}
