"use client";

import { useState } from "react";
import { ProductListProps } from "../types";
import FilterBar from "./filter-bar";
import Product from "./product";

const ProductList = ({
  burgers,
  appetizers,
  drinks,
  desserts,
}: ProductListProps) => {
  const [activeFilter, setActiveFilter] = useState("Tudo");

  const filterProducts = () => {
    switch (activeFilter) {
      case "Lanches":
        return <Product title="Lanches" products={burgers} />;
      case "Porções":
        return <Product title="Porções" products={appetizers} />;
      case "Bebidas":
        return <Product title="Bebidas" products={drinks} />;
      case "Sobremesas":
        return <Product title="Sobremesas" products={desserts} />;
      default:
        return (
          <>
            <Product title="Lanches" products={burgers} />
            <Product title="Porções" products={appetizers} />
            <Product title="Bebidas" products={drinks} />
            <Product title="Sobremesas" products={desserts} />
          </>
        );
    }
  };

  return (
    <div className="space-y-5">
      <FilterBar activeFilter={activeFilter} onFilterChange={setActiveFilter} />
      {filterProducts()}
    </div>
  );
};

export default ProductList;
