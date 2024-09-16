import "./App.css";
import ShoppingCart from "./ShoppingCart";

export default function App() {
  const shoppingListObject = [
    { name: "Apple", quantity: 2, totalPrice: 3 },
    { name: "Banana", quantity: 4, totalPrice: 4.3 },
    { name: "Milk", quantity: 1, totalPrice: 2.5 },
    { name: "Egg", quantity: 10, totalPrice: 6 },
  ];
  return (
    <div>
      <ShoppingCart products={shoppingListObject} />
    </div>
  );
}
