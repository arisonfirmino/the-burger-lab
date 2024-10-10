"use client";

import { useState } from "react";
import { MinusIcon, PlusIcon } from "lucide-react";

const CountButton = () => {
  const [count, setCount] = useState(1);

  const increaseCount = () => {
    setCount((prevCount) => prevCount + 1);
  };

  const decreaseCount = () => {
    setCount((prevCount) => (prevCount > 0 ? prevCount - 1 : 0));
  };

  return (
    <div className="flex items-center rounded-full bg-white shadow">
      <button
        onClick={decreaseCount}
        className="flex h-10 w-10 items-center justify-center rounded-full bg-background text-white"
      >
        <MinusIcon size={20} />
      </button>
      <span className="flex w-12 items-center justify-center font-semibold">
        {count}
      </span>
      <button
        onClick={increaseCount}
        className="flex h-10 w-10 items-center justify-center rounded-full bg-background text-white"
      >
        <PlusIcon size={20} />
      </button>
    </div>
  );
};

export default CountButton;
