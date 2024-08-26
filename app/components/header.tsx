"use client";

import { signIn, signOut, useSession } from "next-auth/react";
import { ShoppingBasketIcon, UserIcon } from "lucide-react";
import Image from "next/image";

export default function Header() {
  const { data } = useSession();
  const handleLogInClick = () => signIn("google");
  const handleSignOutClick = () => signOut();

  return (
    <header className="flex items-center justify-between px-5 pt-5">
      <h1 className="bangers text-2xl">The Burger Lab</h1>

      {data?.user ? (
        <div className="flex items-center gap-2.5">
          <button
            onClick={handleSignOutClick}
            className="h-10 w-10 overflow-hidden rounded-full"
          >
            <Image
              src={data.user.image ?? ""}
              alt={data.user.name ?? ""}
              height={1024}
              width={1024}
              className="w-full"
            />
          </button>
          <span className="text-2xl">|</span>
          <button className="flex h-10 w-10 items-center justify-center rounded-full bg-black text-white">
            <ShoppingBasketIcon size={20} />
          </button>
        </div>
      ) : (
        <button
          onClick={handleLogInClick}
          className="flex h-10 w-10 items-center justify-center rounded-full bg-black text-white"
        >
          <UserIcon size={20} />
        </button>
      )}
    </header>
  );
}
