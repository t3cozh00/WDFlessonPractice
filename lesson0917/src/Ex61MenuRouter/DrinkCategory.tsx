import classes from "./RestaurantMenu.module.css";
import { Routes, Route, Link } from "react-router-dom";
import DishCategory from "./DishCategory";
import { menuCategories } from "./EX61RestaurantMenu";

export default function DrinkCategory() {
  return (
    <div className={classes.menu}>
      {/* <Link to={"coke"}>
        <div>Coke</div>
      </Link>
      <Link to={"fanta"}>
        <div>Fanta</div>
      </Link>
      <Link to={"sprite"}>
        <div>Sprite</div>
      </Link> */}

      {menuCategories.drinks.map(({ category }) => (
        <Link key={category} to={category}>
          <div>{category}</div>
        </Link>
      ))}
      <Routes>
        {menuCategories.drinks.map(({ category, items }) => (
          <Route
            key={category}
            path={category}
            element={<DishCategory items={items} />}
          />
        ))}
      </Routes>
    </div>
  );
}
