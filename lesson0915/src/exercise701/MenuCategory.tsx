import CategoryDish from "./CategoryDish";
import { MenuCategoryProps } from "./Types";

export default function MenuCategory({
  name,
  image,
  dishes,
}: MenuCategoryProps) {
  let dishList = [];
  for (let i = 0; i < dishes.length; i++) {
    dishList.push(
      <CategoryDish
        key={i}
        dishName={dishes[i].dishName}
        dishPrice={dishes[i].dishPrice}
      />
    );
  }

  return (
    <div>
      <img src={image} />
      <h3>{name}</h3>
      <div>{dishList}</div>
    </div>
  );
}
