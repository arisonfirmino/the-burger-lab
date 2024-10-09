"use client";

import { signIn } from "next-auth/react";
import { UserIcon } from "lucide-react";

const SignInButton = () => {
  const handleSignInClick = () => signIn("google");

  return (
    <button
      onClick={handleSignInClick}
      className="flex h-14 w-14 items-center justify-center rounded-full bg-gray-200 text-gray-400 shadow"
    >
      <UserIcon />
    </button>
  );
};

export default SignInButton;
