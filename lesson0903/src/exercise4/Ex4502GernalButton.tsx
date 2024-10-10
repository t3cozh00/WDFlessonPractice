import React from "react";
import classes from "./ButtonStyle.module.css";

export default function Ex4502GernalButton({ buttonText, buttonAction }) {
  return (
    <div>
      <h3>Ex4502GernalButton</h3>
      <button className={classes.button} onClick={buttonAction}>
        {buttonText}
      </button>
    </div>
  );
}
