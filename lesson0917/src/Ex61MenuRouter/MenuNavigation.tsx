import { Link } from "react-router-dom";
import classes from "./RestaurantMenu.module.css";

export default function MenuNavigation() {
  return (
    <div className={classes.menu}>
      <Link to={"/"}>
        <div>Home</div>
      </Link>
      <Link to={"/main-courses"}>
        <div>Main Courses</div>
      </Link>
      <Link to={"/drinks"}>
        <div>Drinks</div>
      </Link>
    </div>
  );
}
