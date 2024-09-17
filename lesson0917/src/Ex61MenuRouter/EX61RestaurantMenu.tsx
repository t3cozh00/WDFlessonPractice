// import Ex61Drinks from "./Ex61Drinks";
// import Ex61MainCourse from "./Ex61MainCourse";
import MainCoursesCategory from "./MainCoursesCategory";
import DrinkCategory from "./DrinkCategory";
import DishCategory from "./DishCategory";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import MenuNavigation from "./MenuNavigation";

const menuCategories = {
  mainCourses: [
    {
      category: "pizza",
      items: [
        { name: "Margherita", price: 10 },
        { name: "Pepperoni", price: 12 },
        { name: "Hawaiian", price: 8 },
      ],
    },
    {
      category: "pasta",
      items: [
        { name: "Carbonara", price: 15 },
        { name: "Bolognese", price: 12 },
        { name: "Pesto", price: 10 },
      ],
    },
    {
      category: "hamburger",
      items: [
        { name: "Cheeseburger", price: 5 },
        { name: "Baconburger", price: 6 },
        { name: "Chickenburger", price: 7 },
      ],
    },
  ],

  drinks: [
    {
      category: "coke",
      items: [
        { name: "Coke", price: 2 },
        { name: "Diet Coke", price: 2 },
        { name: "Coke Zero", price: 2 },
      ],
    },
    {
      category: "fanta",
      items: [
        { name: "Fanta", price: 2 },
        { name: "Fanta Zero", price: 2 },
        { name: "Fanta Orange", price: 2 },
      ],
    },
    {
      category: "sprite",
      items: [
        { name: "Sprite", price: 2 },
        { name: "Sprite Zero", price: 2 },
        { name: "Sprite Lemon", price: 2 },
      ],
    },
  ],
};

export default function EX61RestaurantMenu() {
  return (
    <div>
      <BrowserRouter>
        <MenuNavigation />
        <h4>
          Welcome to our restaurant.
          <br />
          This is a restaurant that serves delicious food and drinks.
          <br />
          Please choose from the menu categories.
        </h4>

        <Routes>
          <Route path="/main-courses" element={<MainCoursesCategory />} />
          <Route path="/drinks" element={<DrinkCategory />} />

          {/* Dynamic Routes for Main Courses */}
          {menuCategories.mainCourses.map(({ category, items }) => (
            <Route
              key={category}
              path={`/main-courses/${category}`}
              element={<DishCategory dishItems={items} />}
            />
          ))}

          {/* Dynamic Routes for Drinks */}
          {menuCategories.drinks.map(({ category, items }) => (
            <Route
              key={category}
              path={`/drinks/${category}`}
              element={<DishCategory dishItems={items} />}
            />
          ))}
        </Routes>
      </BrowserRouter>
    </div>
  );
}
