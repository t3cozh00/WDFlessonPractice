import { getAllProducts } from "../products";
import Product from "./Product";

export default function ProductsView() {
  const products = getAllProducts();

  return (
    <div>
      <h1>Shop Products</h1>
      <div>
        {products.map((product) => (
          <Product
            key={product.id}
            name={product.name}
            id={product.id}
            price={product.price}
            imagePath="http://via.placeholder.com/200x200"
          />
        ))}
      </div>
    </div>
  );
}
