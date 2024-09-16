import React from "react";
import CategoryDish from "./CategoryDish";

export default function MenuCategory({ name, image, dishes }) {
  let dishList = [];
  for (let i = 0; i < dishes.length; i++) {
    dishList.push(
      <CategoryDish
        key={i}
        dishName={dishes[i].name}
        dishPice={dishes[i].price}
      />
    );
  }

  return (
    <div>
      <img src={image} />
      <h3>{name}</h3>
      <p>{dishList}</p>
    </div>
  );
}
