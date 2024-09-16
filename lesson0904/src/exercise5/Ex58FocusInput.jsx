// Ex58 Practice useRef hook. Create a component, which renders an text input and a button. When the button is clicked the text input field should be focused. Once you have declared the ref to the input element you can focus the input element with inputRef.current.focus();

import React from "react";
import { useRef } from "react";
import { useState } from "react";

export default function Ex58FocusInput() {
  const inputRef = useRef(null);
  const [inputValue, setInputValue] = useState("");

  function buttonClick() {
    setInputValue(inputRef.current.value);
    inputRef.current.value = "";
    setInputValue("");
    inputRef.current.focus();
  }

  return (
    <div>
      <input
        type="text"
        ref={inputRef}
        value={inputValue}
        onChange={(e) => setInputValue(e.target.value)}
      />
      <button onClick={buttonClick}>Log</button>
      <p>{inputValue}</p>
    </div>
  );
}
