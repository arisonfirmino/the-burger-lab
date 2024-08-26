import Image from "next/image";

interface NavProps {
  onClickCategory: (category: string) => void;
}

export default function Nav({ onClickCategory }: NavProps) {
  const nav_items = [
    {
      title: "Lanches",
      icon: "https://utfs.io/f/8ec139d7-f177-4a36-80bf-9195c22e8be2-7jwus1.png",
    },
    {
      title: "Porções",
      icon: "https://utfs.io/f/a7e06a72-2145-4dac-93d6-581e945f8f24-lx387c.png",
    },
    {
      title: "Sobremesas",
      icon: "https://utfs.io/f/3f4047a8-ede1-46a7-b2cd-9abda1943d95-ti4xxc.png",
    },
    {
      title: "Bebidas",
      icon: "https://utfs.io/f/6bc5e5fd-bbc2-4a96-88ed-dc41ab12b239-yrjg4y.png",
    },
  ];

  return (
    <nav className="flex justify-center gap-5 rounded-3xl bg-white shadow-md">
      {nav_items.map((item) => (
        <button
          key={item.title}
          onClick={() => onClickCategory(item.title)}
          className="flex h-20 w-20 flex-col items-center justify-center gap-1"
        >
          <Image
            src={item.icon}
            alt={item.title}
            height={512}
            width={512}
            className="h-7 w-7"
          />
          <span className="bangers text-sm">{item.title}</span>
        </button>
      ))}
    </nav>
  );
}
