import React from "react";

export default function Ex104DecreaseCounter({ dispatch }) {
  return (
    <div>
      <button
        onClick={() => {
          dispatch({ type: "DECREMENT" });
        }}
      >
        Decrement
      </button>
    </div>
  );
}
