import React from "react";

export default function Ex104ResetCounter({ dispatch }) {
  return (
    <div>
      <button
        onClick={() => {
          dispatch({ type: "RESET" });
        }}
      >
        Reset
      </button>
    </div>
  );
}
