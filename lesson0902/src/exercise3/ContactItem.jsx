import React from "react";

export default function ContactItem({ names, addresses }) {
  return (
    <div
      style={{
        padding: "10px",
        border: "2px solid black",
        margin: "20px",
        cursor: "pointer",
        borderRadius: "10px",
      }}
    >
      <div>
        <h3>{names}</h3>
      </div>
      <div>
        <p>{addresses}</p>
      </div>
    </div>
  );
}
