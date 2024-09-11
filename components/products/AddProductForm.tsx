"use client";
import { ProductSchema } from "@/src/schema";
import { toast } from "react-toastify";

const AddProductForm = ({ children }: { children: React.ReactNode }) => {
  const handleSubmit = async (FormData: FormData) => {
    const data = {
      name: FormData.get("name"),
      price: FormData.get("price"),
      categoryId: FormData.get("categoryId"),
    };

    const result = ProductSchema.safeParse(data);
    if (!result.success) {
      result.error.issues.forEach((issue) => {
        toast.error(issue.message);
      });
      return;
    }
  };

  return (
    <div className=" bg-white mt-10 px-5 py-10 rounded-md shadow-md max-w-3xl mx-auto">
      <form className="space-y-5" action={handleSubmit}>
        {children}
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
