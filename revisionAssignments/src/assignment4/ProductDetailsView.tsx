import { getProductById } from "../products";
import { Link, useParams } from "react-router-dom";

export default function ProductDetailsView() {
  const { id } = useParams();
  const product = getProductById(id);

  return (
    <div>
      <h2>{product.name}</h2>
      <div>
        <div>
          <img src="http://via.placeholder.com/400x400" alt="Placeholder" />
        </div>
        <div>
          <h3>${product.price}</h3>
          <p>Description: {product.description}</p>
          <p>Category: {product.category}</p>
          <p>In Stock: {product.stock} pcs</p>
          <p>Rating: {product.rating} / 5.0</p>
          <div>
            <button>Add to Cart</button>
          </div>
          <div>
            <Link to={"/"}>
              <div>Back to Products</div>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
