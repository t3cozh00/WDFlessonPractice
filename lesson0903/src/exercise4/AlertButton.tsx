import React from "react";
import classes from "./ButtonStyle.module.css";

export default function AlertButton({ alertText }) {
  function alertIsClicked() {
    alert(alertText); // alertText is a variable that is passed to the component
    console.log(alertText);
    console.log({ alertText });
  }

  //() => alert()
  //const alertIsClicked = () => alert()

  return (
    <div>
      <h3>Ex44AlertButton</h3>
      <div className={classes.button} onClick={alertIsClicked}>
        AlertButton
      </div>
      {/* also can be writen as{" "}
      <div className={classes.button} onClick={() => alert(alertText)}>
        AlertButton
      </div> */}
    </div>
  );
}
