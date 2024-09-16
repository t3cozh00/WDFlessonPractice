import { Dishprops } from "./Types";

export default function CategoryDish({ dishName, dishPrice }: Dishprops) {
  return (
    <div>
      <span>
        {dishName}, {dishPrice}€
      </span>
    </div>
  );
}
