import ProductForm from "./ProductForm";

const AddProductForm = () => {
  return (
    <div className=" bg-white mt-10 px-5 py-10 rounded-md shadow-md max-w-3xl mx-auto">
      <form className="space-y-5" action="">
        <ProductForm />
        <input
          className="bg-indigo-600 hover:bg-indigo-800 text-white w-full mt-5 cursor-pointer p-3 uppercase font-bold"
          type="submit"
          value="Registrar Producto"
        />
      </form>
    </div>
  );
};

export default AddProductForm;
