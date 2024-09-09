const ProductsSearchForm = () => {
  return (
    <form className="flex items-center">
      <input
        type="text"
        placeholder="Buscar Producto"
        className="p-2 placeholder:gray-400 w-full"
        name="search"
      />

      <input
        type="submit"
        value={"Buscar"}
        className="bg-indigo-600 p-2 uppercase cursor-pointer"
      />
    </form>
  );
};

export default ProductsSearchForm;
