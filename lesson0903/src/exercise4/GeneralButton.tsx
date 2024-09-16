import React from "react";
import classes from "./ConsoleButton.module.css";

export default function GeneralButton({ buttonText, buttonAction }) {
  return (
    <div className={classes.button} onClick={buttonAction}>
      {buttonText}
    </div>
  );
}
