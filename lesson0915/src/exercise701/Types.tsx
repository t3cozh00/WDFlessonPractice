export interface Dishprops {
  dishName: string;
  dishPrice: number;
}

export interface MenuCategoryProps {
  name: string;
  image: string;
  dishes: Dishprops[];
}
