import { fetchProductById } from "@/app/helpers/fetchProductById";
import { ProductPageProps } from "@/app/types";
import { ChevronLeftIcon, HeartIcon } from "lucide-react";
import Image from "next/image";
import { notFound } from "next/navigation";
import AddCart from "./components/add-cart";
import Link from "next/link";

const Product = async ({ params }: ProductPageProps) => {
  const { id } = params;

  const productData = await fetchProductById(id);

  if (!productData) {
    return notFound();
  }

  const { product, category } = productData;

  return (
    <main className="h-screen w-full bg-background">
      <div className="flex items-center justify-between px-5 pb-10 pt-5">
        <Link href="/">
          <button className="flex h-10 w-10 items-center justify-center rounded-full bg-white">
            <ChevronLeftIcon size={20} />
          </button>
        </Link>

        <button className="text-white">
          <HeartIcon size={20} />
        </button>
      </div>

      <section className="h-full space-y-5 rounded-t-[56px] bg-container p-5">
        <Image
          src={product.imageUrl}
          alt={product.name}
          height={1024}
          width={1024}
          className="w-full rounded-[56px]"
        />

        <div className="flex items-center justify-between text-xl font-semibold">
          <h2>{product.name}</h2>
          <span className="text-background">R$ {product.price}</span>
        </div>

        <span className="rounded-full bg-foreground px-2.5 py-0.5 text-xs text-white">
          {category}
        </span>

        <p className="text-sm text-gray-500">{product.description}</p>
      </section>

      <div className="fixed bottom-10 w-full px-10">
        <AddCart />
      </div>
    </main>
  );
};

export default Product;
