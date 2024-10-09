import { HeartIcon, HomeIcon, ShoppingCartIcon, UserIcon } from "lucide-react";
import Link from "next/link";

const Nav = () => {
  const nav_items = [
    {
      page: "Home",
      icon: <HomeIcon size={24} />,
      href: "/",
    },
    {
      page: "Favorites",
      icon: <HeartIcon size={24} />,
      href: "/favorites",
    },
    {
      page: "FoodCart",
      icon: <ShoppingCartIcon size={24} />,
      href: "/food-cart",
    },
    {
      page: "Profile",
      icon: <UserIcon size={24} />,
      href: "/profile",
    },
  ];

  return (
    <nav className="fixed bottom-10 left-1/2 z-10 w-full -translate-x-1/2 transform px-10">
      <div className="bg-background flex justify-between rounded-full p-2.5 text-white shadow-md">
        {nav_items.map((item) => (
          <Link
            key={item.page}
            href={item.href}
            className="flex h-14 w-14 items-center justify-center"
          >
            {item.icon}
          </Link>
        ))}
      </div>
    </nav>
  );
};

export default Nav;
