import classes from "./RestaurantMenu.module.css";

import { Link } from "react-router-dom";

export default function MainCoursesCategory() {
  return (
    <div className={classes.menu}>
      <Link to={"/main-courses/pizza"}>
        <div>Pizza</div>
      </Link>
      <Link to={"/main-courses/pasta"}>
        <div>Pasta</div>
      </Link>
      <Link to={"/main-courses/hamburger"}>
        <div>Hamburgers</div>
      </Link>
    </div>
  );
}
