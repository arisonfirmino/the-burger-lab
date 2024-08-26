import { MoveRightIcon } from "lucide-react";
import Image from "next/image";

export default function Product({ product }: any) {
  return (
    <div className="flex flex-col gap-2.5 px-5">
      <Image
        src={product.imageUrl}
        alt={product.name}
        height={1024}
        width={1024}
        className="w-full rounded-2xl"
      />

      <div className="bangers flex items-center justify-between text-xl font-medium">
        <h2>{product.name}</h2>
        <span>R$ {product.price}</span>
      </div>

      <p className="text-sm">{product.description}</p>

      <button className="bangers flex items-center justify-between rounded-lg bg-black px-5 py-2.5 text-base text-white">
        Adicionar
        <MoveRightIcon size={16} />
      </button>
    </div>
  );
}
