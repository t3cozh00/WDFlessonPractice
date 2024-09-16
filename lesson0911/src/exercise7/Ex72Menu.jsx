import React from "react";
import Ex72MenuCategory from "./Ex72MenuCategory";
import Hamburger from "../assets/Hamburger.jpeg";
import Spaghetti from "../assets/Spaghetti.jpeg";
import Friedchicken from "../assets/Friedchicken.jpeg";

export default function Ex72Menu() {
  const hambugers = [
    { name: "Cheeseburger", price: 10 },
    { name: "Baconburger", price: 12 },
    { name: "Veggieburger", price: 8 },
  ];
  const spaghettis = [
    { name: "Bolognese", price: 15 },
    { name: "Carbonara", price: 17 },
    { name: "Pesto", price: 13 },
  ];
  const friedchickens = [
    { name: "Original", price: 10 },
    { name: "Spicy", price: 12 },
    { name: "BBQ", price: 11 },
  ];

  return (
    <div>
      <h1>Menu</h1>
      <Ex72MenuCategory name="Hamburger" image={Hamburger} dishes={hambugers} />
      <Ex72MenuCategory
        name="Spaghetti"
        image={Spaghetti}
        dishes={spaghettis}
      />
      <Ex72MenuCategory
        name="Friedchicken"
        image={Friedchicken}
        dishes={friedchickens}
      />
    </div>
  );
}
