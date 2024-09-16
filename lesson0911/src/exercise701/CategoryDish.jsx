import React from "react";

export default function CategoryDish({ dishName, dishPice }) {
  return (
    <div>
      {dishName}, {dishPice}€
    </div>
  );
}
