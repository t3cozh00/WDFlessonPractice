import React from "react";
import MenuCategory from "./MenuCategory";
import Hamburger from "../assets/Hamburger.jpeg";
import Friedchicken from "../assets/Friedchicken.jpeg";
import Spaghetti from "../assets/Spaghetti.jpeg";

export default function Menu() {
  const hamburgers = [
    { name: "Cheeseburger", price: 5 },
    { name: "Baconburger", price: 6 },
    { name: "Veganburger", price: 7 },
  ];

  const Friedchickens = [
    { name: "Friedchicken", price: 5 },
    { name: "Friedchicken wings", price: 6 },
    { name: "Friedchicken legs", price: 7 },
  ];

  const Spaghettis = [
    { name: "Spaghetti bolognese", price: 5 },
    { name: "Spaghetti carbonara", price: 6 },
    { name: "Spaghetti aglio e olio", price: 7 },
  ];

  return (
    <div>
      <h1>Menu</h1>
      <MenuCategory name="Hamburger" image={Hamburger} dishes={hamburgers} />
      <MenuCategory
        name="Friechicken"
        image={Friedchicken}
        dishes={Friedchickens}
      />
      <MenuCategory name="Spaghetti" image={Spaghetti} dishes={Spaghettis} />
    </div>
  );
}
