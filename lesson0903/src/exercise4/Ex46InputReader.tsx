import React from "react";

export default function Ex46InputReader({ readInputText }) {
  return (
    <div>
      <h3>Ex46InputReader</h3>
      <input type="text" onChange={readInputText} />
    </div>
  );
}
