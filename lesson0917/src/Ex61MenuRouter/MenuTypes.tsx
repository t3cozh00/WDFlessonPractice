export interface DishItem {
  name: string;
  price: number;
}

export interface DishCategoryProps {
  items: DishItem[];
}

export interface MenuCategory {
  category: string;
  items: DishItem[];
}
