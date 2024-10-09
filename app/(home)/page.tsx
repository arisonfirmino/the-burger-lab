import { db } from "../lib/prisma";
import Header from "../components/header";
import Search from "../components/search";
import ProductList from "../components/product-list";

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

const Home = async () => {
  const { burgers, appetizers, drinks, desserts } = await fetch();

  return (
    <>
      <div className="px-5 pt-5">
        <Header />
      </div>

      <div className="px-5 pt-7">
        <Search />
      </div>

      <div className="pb-36 pt-5">
        <ProductList
          burgers={burgers}
          appetizers={appetizers}
          drinks={drinks}
          desserts={desserts}
        />
      </div>
    </>
  );
};

export default Home;
