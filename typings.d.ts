// typings.ts
export interface MenuItem {
    name: string;
    description: string;
    price: string;
    imageUrl: string;
  }


export type MenuCategory = "starters" | "mains" | "desserts";

export interface MenuSection {
  category: MenuCategory;
  items: MenuItem[];
}
