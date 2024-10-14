import { BrowserRouter as Router, Link, Routes, Route } from "react-router-dom";
import ProductsView from "./ProductsView";
import CartView from "./CartView";
import ProductDetailsView from "./ProductDetailsView";

export default function Display4() {
  return (
    <Router>
      <div>
        <h3 style={{ color: "red" }}>assignment4 product view</h3>
        <nav>
          <Link to={"/"}>
            <div>Products</div>
          </Link>
          <Link to={"/cart"}>
            <div>Cart</div>
          </Link>
        </nav>
        <Routes>
          <Route path="/*" element={<ProductsView />} />
          <Route path="/products/:id" element={<ProductDetailsView />} />
          <Route path="/cart" element={<CartView />} />
        </Routes>
      </div>
    </Router>
  );
}
