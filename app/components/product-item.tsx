import { PlusIcon } from "lucide-react";
import Image from "next/image";
import { ProductItemProps } from "../types";
import Link from "next/link";

const ProductItem = ({ product }: ProductItemProps) => {
  return (
    <Link href={`/product/${product.id}`}>
      <div className="min-w-40 max-w-40 rounded-xl bg-white p-2.5">
        <Image
          src={product.imageUrl}
          alt={product.name}
          height={1024}
          width={1024}
          className="w-full rounded-xl"
        />

        <h2 className="mt-1.5 truncate font-semibold">{product.name}</h2>
        <p className="line-clamp-2 text-sm text-gray-500">
          {product.description}
        </p>

        <div className="mt-1.5 flex items-center justify-between">
          <span className="font-semibold">R$ {product.price}</span>
          <button className="flex h-5 w-5 items-center justify-center rounded bg-background text-white">
            <PlusIcon size={14} />
          </button>
        </div>
      </div>
    </Link>
  );
};

export default ProductItem;
