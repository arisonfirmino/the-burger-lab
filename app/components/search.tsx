import { SearchIcon } from "lucide-react";

const Search = () => {
  return (
    <form>
      <div className="flex items-center overflow-hidden rounded-full bg-white shadow">
        <input
          type="search"
          placeholder="Pesquisar"
          className="h-14 w-full bg-transparent px-5 outline-none"
        />
        <button
          type="submit"
          className="bg-background flex h-14 w-full max-w-14 items-center justify-center pr-1 text-white"
        >
          <SearchIcon size={20} />
        </button>
      </div>
    </form>
  );
};

export default Search;
