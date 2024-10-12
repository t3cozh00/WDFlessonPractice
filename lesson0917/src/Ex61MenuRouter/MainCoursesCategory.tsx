import classes from "./RestaurantMenu.module.css";
import { Routes, Route, Link } from "react-router-dom";
import DishCategory from "./DishCategory";
import { menuCategories } from "./EX61RestaurantMenu";

export default function MainCoursesCategory() {
  return (
    <div className={classes.menu}>
      {/* <Link to={"pizza"}>
        <div>Pizza</div>
      </Link>
      <Link to={"pasta"}>
        <div>Pasta</div>
      </Link>
      <Link to={"hamburger"}>
        <div>Hamburgers</div>
      </Link> */}

      {menuCategories.mainCourses.map(({ category }) => (
        <Link key={category} to={category}>
          <div>{category}</div>
        </Link>
      ))}
      <Routes>
        {menuCategories.mainCourses.map(({ category, items }) => (
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
