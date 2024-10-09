"use client";

import { signOut, useSession } from "next-auth/react";
import Image from "next/image";
import SignInButton from "./signIn-button";
import { BellIcon } from "lucide-react";

const Header = () => {
  const { data: session } = useSession();
  const handleSignOutClick = () => signOut();

  if (!session) {
    return (
      <div className="space-y-2.5">
        <SignInButton />
        <p className="text-lg font-bold">
          Faça login <br /> para realizar seu{" "}
          <span className="text-background">pedido</span>!
        </p>
      </div>
    );
  }

  return (
    <div className="space-y-2.5">
      <div className="flex items-start justify-between">
        <Image
          src={session?.user?.image ?? ""}
          alt={session?.user?.name ?? ""}
          height={1024}
          width={1024}
          onClick={handleSignOutClick}
          className="h-14 w-14 rounded-full shadow"
        />
        <button>
          <BellIcon size={20} />
        </button>
      </div>
      <p className="text-lg font-bold">
        Explore, <br /> desfrute do{" "}
        <span className="text-background">melhor sabor</span>!
      </p>
    </div>
  );
};

export default Header;
