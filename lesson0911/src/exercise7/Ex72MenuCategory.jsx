import React from "react";
import Ex72CategoryDish from "./Ex72CategoryDish";

export default function Ex72MenuCategory({ name, image, dishes }) {
  let dishArray = [];

  for (let i = 0; i < dishes.length; i++) {
    dishArray.push(
      <Ex72CategoryDish
        key={i}
        dishName={dishes[i].name}
        dishPrice={dishes[i].price}
      />
    );
  }

  return (
    <div>
      <img src={image} />
      <h3>{name}</h3>
      {dishArray}
    </div>
  );
}
