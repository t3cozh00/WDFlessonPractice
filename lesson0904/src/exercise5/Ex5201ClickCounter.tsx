import React from "react";

export default function Ex5201ClickCounter() {
  const [counter, setCounter] = React.useState(0);

  function clickHandler() {
    setCounter(counter + 1);
    console.log("Button clicked", counter);
  }
  console.log("Rendered", counter);
  return (
    <div>
      <p>Ex5201ClickCounter</p>
      <p>Clicked {counter} times</p>
      <button onClick={clickHandler}>Click</button>
    </div>
  );
}
