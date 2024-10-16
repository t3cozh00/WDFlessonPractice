import React from "react";
//import { useState } from "react";

//Modify the child component to disable the button after 10 clicks.
//Hint: Use the disabled attribute.
export default function Ex510Increment({
  setDisabled,
  incrementCounter,
  text,
}) {
  //const [buttonDisabled, setButtonDisabled] = useState(false);

  // function handleLimitClick() {
  //   if (counter < 10) {
  //     incrementCounter();
  //   }

  //   if (counter + 1 >= 10) {
  //     setButtonDisabled(true);
  //   }
  // }

  return (
    <div>
      <button disabled={setDisabled} onClick={incrementCounter}>
        {text}
      </button>
    </div>
  );
}
