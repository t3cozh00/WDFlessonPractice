import React from "react";
import Option from "./Option";

export default function Question({ question, options }) {
  return (
    <div>
      <h1>{question}</h1>
      <div>
        {options.map((option, index) => (
          <Option key={index} option={option} />
        ))}
      </div>
    </div>
  );
}
