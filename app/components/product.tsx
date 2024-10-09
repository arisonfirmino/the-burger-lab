import { ProductProps } from "../types";
import ProductItem from "./product-item";

const Product = ({ title, products }: ProductProps) => {
  return (
    <div className="space-y-2.5">
      <div className="flex items-center gap-2.5 px-5">
        <h3 className="text-xl font-semibold text-background">{title}</h3>
        <hr className="w-full border-background" />
      </div>
      <div className="flex gap-5 overflow-x-scroll px-5 [&::-webkit-scrollbar]:hidden">
        {products.map((product) => (
          <ProductItem key={product.id} product={product} />
        ))}
      </div>
    </div>
  );
};

export default Product;
