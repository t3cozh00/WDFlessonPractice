import React from "react";

export default function Ex5101TextInputRead() {
  const [textHolder, setTextHoder] = React.useState("");
  const [textOutput, setTextOutput] = React.useState("");

  function textInputHandler(event) {
    setTextHoder(event.target.value);
  }

  function readerHandler() {
    setTextOutput(textHolder);
    setTextHoder(" ");
  }

  return (
    <div>
      <p>Ex5101TextInputRead</p>
      <input type="text" onChange={textInputHandler} />
      <button onClick={readerHandler}>Click to Read</button>
      <p>{textOutput}</p>
    </div>
  );
}
