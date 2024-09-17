import React from "react";

import { MenuItem } from "./MenuTypes";

export default function DishCategory({ dishItems }: MenuItem) {
  return (
    <div>
      {dishItems.map((i) => (
        <div key={i.name}>
          {i.name}, {i.price}€
        </div>
      ))}
    </div>
  );
}
