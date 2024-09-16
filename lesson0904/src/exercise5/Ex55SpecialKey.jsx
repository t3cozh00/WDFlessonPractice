// Ex55. Create a component with a div element. When a specific key (e.g., "Enter" key) is pressed, update the text content of the div to show a message indicating that the key was pressed.

import React from "react";
import { useState } from "react";

export default function Ex55SpecialKey() {
  const [specialKey, setSpecialKey] = useState(" ");

  const pressKey = (event) => {
    setSpecialKey(`Key pressed: ${event.key}`);
  };

  return (
    <div
      tabIndex={0} // Makes the div focusable so it can detect key presses
      onKeyDown={pressKey} // keeps the onKeyDown event handler attached to the div to detect when a key is pressed
      style={{
        padding: "20px",
        border: "1px solid black",
        width: "200px",
        textAlign: "center",
      }}
    >
      {specialKey}
    </div>
  );
}
