"use client";
import { addOrder } from "@/src/store/slices/orderSlice";
import { Product } from "@prisma/client";
import { useDispatch } from "react-redux";

type AddProductButtonProps = {
  product: Product;
};

const AddProductButton = ({ product }: AddProductButtonProps) => {
  const dispatch = useDispatch();

  const addToOrder = () => {
    dispatch(addOrder(product));
    console.log(product);
  };

  return (
    <div>
      <button
        onClick={addToOrder}
        type="button"
        className=" bg-indigo-600 hover:bg-indigo-800 text-white w-full mt-5 p-3 uppercase font-bold cursor-pointer rounded-md"
      >
        Agregar
      </button>
    </div>
  );
};

export default AddProductButton;
