import React from "react";

export default function Ex32bColorList({ colors }) {
  //input
  //const colorArray = ["yellow", "red"];
  //output
  //const output = [<li>yellow</li>, <li>red</li>];

  let output = [];

  for (let i = 0; i < colors.length; i++) {
    output.push(<li key={i}>{colors[i]}</li>);
  }

  return (
    <div>
      <h3>Ex32bColorList</h3>
      <ul>{output}</ul>
    </div>
  );
}
