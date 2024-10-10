import React from "react";
import classes from "./ButtonStyle.module.css";

export default function GeneralButton({ buttonText, buttonAction }) {
  return (
    <div>
      <h3>Ex45GeneralButton</h3>
      <div className={classes.button} onClick={buttonAction}>
        {buttonText}
      </div>
    </div>
  );
}
