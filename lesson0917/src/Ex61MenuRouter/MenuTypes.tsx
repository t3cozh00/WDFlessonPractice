export interface DishItem {
  name: string;
  price: number;
}

export interface MenuItem {
  dishItems: DishItem[];
}

// export interface MenuCategoryProps {
//   menuItems: MenuItem[];
// }
