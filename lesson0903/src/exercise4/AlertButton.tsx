import React from "react";
import classes from "./ConsoleButton.module.css";

export default function AlertButton({ alertText }) {
  function alertIsClicked() {
    alert(alertText); // alertText is a variable that is passed to the component
    console.log({ alertText });
  }

  //() => alert()
  //const alertIsClicked = () => alert()

  return (
    <div className={classes.button} onClick={alertIsClicked}>
      AlertButton
    </div>
    //also can be writen as <div className={classes.button} onClick={() => alert(alertText)}>AlertButton</div>
  );
}
