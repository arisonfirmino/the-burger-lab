"use client";

import { useEffect, useState } from "react";
import { Appetizer, Burger, Dessert, Drink } from "@prisma/client";
import Image from "next/image";
import Nav from "./nav";
import Product from "./product";

interface ItemListProps {
  burgers: Burger[];
  appetizers: Appetizer[];
  drinks: Drink[];
  desserts: Dessert[];
}

const getItemsByCategory = (
  selectedCategory: string,
  burgers: Burger[],
  appetizers: Appetizer[],
  drinks: Drink[],
  desserts: Dessert[],
) => {
  switch (selectedCategory) {
    case "Lanches":
      return burgers;
    case "Porções":
      return appetizers;
    case "Bebidas":
      return drinks;
    case "Sobremesas":
      return desserts;
    default:
      return [];
  }
};

export default function ProductList({
  burgers,
  appetizers,
  drinks,
  desserts,
}: ItemListProps) {
  const [selectedCategory, setSelectedCategory] = useState("Lanches");
  const [selectedItem, setSelectedItem] = useState<
    Burger | Appetizer | Drink | Dessert | null
  >(null);

  useEffect(() => {
    const items = getItemsByCategory(
      selectedCategory,
      burgers,
      appetizers,
      drinks,
      desserts,
    );
    if (items.length > 0) {
      setSelectedItem(items[0]);
    }
  }, [selectedCategory, burgers, appetizers, drinks, desserts]);

  const handleNavClick = (category: string) => {
    setSelectedCategory(category);
  };

  const handleItemClick = (item: Burger | Appetizer | Drink | Dessert) => {
    setSelectedItem(item);
  };

  const items = getItemsByCategory(
    selectedCategory,
    burgers,
    appetizers,
    drinks,
    desserts,
  );

  return (
    <>
      <div className="px-5 pt-5">
        <Nav onClickCategory={handleNavClick} />
      </div>

      <div className="flex gap-5 overflow-x-scroll p-5 [&::-webkit-scrollbar]:hidden">
        {items.map((item) => (
          <button
            key={item.id}
            onClick={() => handleItemClick(item)}
            className="min-w-16 max-w-16 duration-500 hover:scale-105"
          >
            <Image
              src={item.imageUrl}
              alt={item.name}
              height={1024}
              width={1024}
              className="w-full rounded-lg"
            />
          </button>
        ))}
      </div>

      {selectedItem && <Product product={selectedItem} />}
    </>
  );
}
