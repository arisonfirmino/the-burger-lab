import { Burger, Appetizer, Drink, Dessert } from "@prisma/client";

export interface ProductListProps {
  burgers: Burger[];
  appetizers: Appetizer[];
  drinks: Drink[];
  desserts: Dessert[];
}

export interface ProductProps {
  title: string;
  products: (Burger | Appetizer | Drink | Dessert)[];
}
export interface ProductItemProps {
  product: Burger | Appetizer | Drink | Dessert;
}

export interface FilterBarProps {
  activeFilter: string;
  onFilterChange: (filter: string) => void;
}

export interface ProductPageProps {
  params: {
    id: string;
  };
}
