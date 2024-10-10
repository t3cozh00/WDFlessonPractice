//import React from "react";

export default function ProductInfo({ name, quantity, price }) {
  return (
    <div
      style={{
        textAlign: "left",
        padding: "10px",
        margin: "10px",
        border: "1px solid red",
        borderRadius: "10px",
      }}
    >
      <b>Name: {name}</b>
      <p>Quantity: {quantity}</p>
      <p>Total Price: {price * quantity}€</p>
    </div>
  );
}
