import CountButton from "./count-button";

const AddCart = () => {
  return (
    <div className="flex items-center gap-10">
      <CountButton />
      <button className="flex h-10 w-full items-center justify-center rounded-full bg-background text-white shadow">
        Adicionar
      </button>
    </div>
  );
};

export default AddCart;
