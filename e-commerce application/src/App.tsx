import "./App.css";
import ShoppingCart from "./ShoppingCart";

export default function App() {
  const shoppingListObject = [
    { name: "Apple", quantity: 2, price: 1.5 },
    { name: "Banana", quantity: 4, price: 1.5 },
    { name: "Milk", quantity: 1, price: 0.85 },
    { name: "Egg", quantity: 10, price: 0.2 },
  ];
  return (
    <div>
      <ShoppingCart products={shoppingListObject} />
    </div>
  );
}
