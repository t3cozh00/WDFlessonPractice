import React from "react";

export default function Ex33ContactItem({ names, addresses }) {
  return (
    <div
      style={{
        padding: "10px",
        border: "2px solid black",
        margin: "20px",
        cursor: "pointer",
        borderRadius: "10px",
        textAlign: "left",
      }}
    >
      <h3>{names}</h3>
      <p>{addresses}</p>
    </div>
  );
}
