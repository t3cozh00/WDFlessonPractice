// Ex53 Create a component with a div element. When the mouse is over the div, change its background color to a different color. When the mouse leaves the div, change it back to the original color.
import React from "react";
import { useState } from "react";

export default function Ex53ColorChange() {
  const [colorChange, setColorChange] = useState("black");

  const mouseOverEnter = () => {
    setColorChange("red");
  };
  const mouseOverLeave = () => {
    setColorChange("black");
  };

  return (
    <div>
      <h3
        style={{ backgroundColor: colorChange }}
        onMouseEnter={mouseOverEnter}
        onMouseLeave={mouseOverLeave}
      >
        Ex53ColorChange
      </h3>
    </div>
  );
}
