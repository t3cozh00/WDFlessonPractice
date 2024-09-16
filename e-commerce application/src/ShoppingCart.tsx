//import React from "react";
import ProductInfo from "./ProductInfo";

export default function ShoppingCart({ products }) {
  let shoppingList = [];
  for (let i = 0; i < products.length; i++) {
    shoppingList.push(
      <li key={i}>
        <ProductInfo
          key={i}
          name={products[i].name}
          quantity={products[i].quantity}
          totalPrice={products[i].totalPrice}
        />
      </li>
    );
  }
  return <div>{shoppingList}</div>;
}
