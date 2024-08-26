import Image from "next/image";
import Header from "../components/header";
import { db } from "../lib/prisma";
import ItemList from "../components/product-list";

const fetch = async () => {
  const getBurgers = await db.burger.findMany();

  const getAppetizers = await db.appetizer.findMany();

  const getDrinks = await db.drink.findMany();

  const getDesserts = await db.dessert.findMany();

  const [burgers, appetizers, drinks, desserts] = await Promise.all([
    getBurgers,
    getAppetizers,
    getDrinks,
    getDesserts,
  ]);

  return { burgers, appetizers, drinks, desserts };
};

export default async function Home() {
  const { burgers, appetizers, drinks, desserts } = await fetch();

  return (
    <>
      <Header />

      <div className="px-5 pt-5">
        <Image
          src="/"
          alt="Banner"
          height={420}
          width={1024}
          className="rounded-3xl bg-black"
        />
      </div>

      <ItemList
        burgers={burgers}
        appetizers={appetizers}
        drinks={drinks}
        desserts={desserts}
      />
    </>
  );
}
