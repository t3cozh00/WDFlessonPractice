import React from "react";
import Question from "./Question";

export default function Display1({ question, options }) {
  return (
    <div>
      <h3>assignment1 question/option</h3>
      <Question question={question} options={options} />
    </div>
  );
}
