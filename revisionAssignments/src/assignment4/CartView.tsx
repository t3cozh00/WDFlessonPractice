export default function CartView() {
  const cartItems = [
    { id: 1, name: "Product A" },
    { id: 3, name: "Product C" },
  ];
  return (
    <div>
      <h1>Cart View</h1>
      <ul>
        {cartItems.map((item) => (
          <li key={item.id}>
            {item.name} - <button>Remove</button>
          </li>
        ))}
      </ul>
    </div>
  );
}
