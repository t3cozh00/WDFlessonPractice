import React from "react";
import classes from "./ConsoleButton.module.css";

// Exercise 1:
// Create a new component called “ConsoleButton”, which renders a single button element and uses click handler to print text “Hello from ConsoleButton!” to javascript console when the button is clicked by the user. Declare the click handler function inside the “ConsoleButton” component. Render the “ConsoleButton” in the App.js.

export default function ConsoleButton({ consoleText }) {
  function buttonIsClicked() {
    console.log(consoleText);
  }

  return (
    <div className={classes.button} onClick={buttonIsClicked}>
      ConsoleButton
    </div> // passing event reference to the onclick event
  );
}
