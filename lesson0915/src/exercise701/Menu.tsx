import MenuCategory from "./MenuCategory";
import Hamburger from "../assets/Hamburger.jpeg";
import Friedchicken from "../assets/Friedchicken.jpeg";
import Spaghetti from "../assets/Spaghetti.jpeg";
import { Dishprops } from "./Types";

export default function Menu() {
  const hamburgers: Dishprops[] = [
    { dishName: "Cheeseburger", dishPrice: 5 },
    { dishName: "Baconburger", dishPrice: 6 },
    { dishName: "Veganburger", dishPrice: 7 },
  ];

  const Friedchickens: Dishprops[] = [
    { dishName: "Friedchicken", dishPrice: 5 },
    { dishName: "Friedchicken wings", dishPrice: 6 },
    { dishName: "Friedchicken legs", dishPrice: 7 },
  ];

  const Spaghettis: Dishprops[] = [
    { dishName: "Spaghetti bolognese", dishPrice: 5 },
    { dishName: "Spaghetti carbonara", dishPrice: 6 },
    { dishName: "Spaghetti aglio e olio", dishPrice: 7 },
  ];

  return (
    <div>
      <h1>Menu</h1>
      <MenuCategory name="Hamburger" image={Hamburger} dishes={hamburgers} />
      <MenuCategory
        name="Friedchicken"
        image={Friedchicken}
        dishes={Friedchickens}
      />
      <MenuCategory name="Spaghetti" image={Spaghetti} dishes={Spaghettis} />
    </div>
  );
}
