import { FilterBarProps } from "../types";

const FilterBar = ({ activeFilter, onFilterChange }: FilterBarProps) => {
  const filter_items = [
    { title: "Tudo" },
    { title: "Lanches" },
    { title: "Porções" },
    { title: "Bebidas" },
    { title: "Sobremesas" },
  ];

  return (
    <div className="flex gap-5 overflow-x-scroll px-5 [&::-webkit-scrollbar]:hidden">
      {filter_items.map((item) => (
        <button
          key={item.title}
          onClick={() => onFilterChange(item.title)}
          className={`rounded-full px-5 py-1.5 ${activeFilter === item.title ? "bg-background text-white" : "bg-white"}`}
        >
          {item.title}
        </button>
      ))}
    </div>
  );
};

export default FilterBar;
