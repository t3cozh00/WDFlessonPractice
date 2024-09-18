import { DishCategoryProps } from "./MenuTypes";

export default function DishCategory({ items }: DishCategoryProps) {
  return (
    <div>
      {items.map((i) => (
        <li key={i.name}>
          {i.name}, {i.price}€
        </li>
      ))}
    </div>
  );
}
