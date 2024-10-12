export interface DishItem {
  name: string;
  price: number;
}

export interface DishCategoryProps {
  items: DishItem[];
}

export interface Category {
  category: string;
  items: DishItem[];
}

export interface CategoryProps {
  categories: Category[];
}

export interface MenuCategory {
  mainCourses: Category[];
  drinks: Category[];
}
