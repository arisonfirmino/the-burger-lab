import { db } from "../lib/prisma";

export const fetchProductById = async (id: string) => {
  const burger = await db.burger.findUnique({ where: { id } });
  if (burger) return { product: burger, category: "Lanches" };

  const appetizer = await db.appetizer.findUnique({ where: { id } });
  if (appetizer) return { product: appetizer, category: "Porções" };

  const drink = await db.drink.findUnique({ where: { id } });
  if (drink) return { product: drink, category: "Bebidas" };

  const dessert = await db.dessert.findUnique({ where: { id } });
  if (dessert) return { product: dessert, category: "Sobremesas" };

  return null;
};
