import { Link } from "react-router-dom";

export default function Product({ id, imagePath, name, price }) {
  return (
    <div key={id} data-testid={`product-${id}`}>
      <img src={imagePath} alt="Placeholder" />
      <div>{name}</div>
      <div>${price}</div>
      <Link to={`/products/${id}`}>
        <div>View Details</div>
      </Link>
    </div>
  );
}
