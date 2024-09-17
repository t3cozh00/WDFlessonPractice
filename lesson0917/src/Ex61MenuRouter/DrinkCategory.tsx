import classes from "./RestaurantMenu.module.css";

import { Link } from "react-router-dom";

export default function DrinkCategory() {
  return (
    <div className={classes.menu}>
      <Link to={"/drinks/coke"}>
        <div>Coke</div>
      </Link>
      <Link to={"/drinks/fanta"}>
        <div>Fanta</div>
      </Link>
      <Link to={"/drinks/sprite"}>
        <div>Sprite</div>
      </Link>
    </div>
  );
}
