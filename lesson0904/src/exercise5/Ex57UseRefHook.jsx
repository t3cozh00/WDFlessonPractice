// Ex57 Practice useRef hook (https://react.dev/reference/react/useRef). Create a component with an input field and a button. Use the useRef hook to capture the current value of the input field and log it to the console when a button is clicked.

import React from "react";
import { useRef } from "react";
import { useState } from "react";

export default function Ex57UseRefHook() {
  const inputRef = useRef(null);
  const [inputValue, setInputValue] = useState("");

  function buttonClick() {
    //console.log(inputRef.current); // Logs the DOM element referenced by inputRef
    console.log(inputRef.current.value); // Logs the current value of the input field
    setInputValue(inputRef.current.value);
  }

  return (
    <div>
      <input type="text" ref={inputRef} />
      <button onClick={buttonClick}>Log Input Value</button>
      <p>{inputValue}</p>
    </div>
  );
}

// inputRef 用于直接访问和操作输入框的 DOM 元素，以便在按钮点击时获取其值。
// inputValue 用于在组件中存储输入框的值，并确保每次状态更新时 UI 进行重新渲染，以便 <p> 元素显示最新的值。
