import { Link, Routes, Route } from "react-router-dom";
import { CategoryProps } from "./MenuTypes";
import DishCategory from "./DishCategory";

export default function MenuCategories({ categories }: CategoryProps) {
  return (
    <div>
      {categories.map(({ category }) => (
        <Link key={category} to={category}>
          <div>{category}</div>
        </Link>
      ))}
      <Routes>
        {categories.map(({ category, items }) => (
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
