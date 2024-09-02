"use client";
import { addOrder } from "@/src/store/slices/orderSlice";
import { OrderItem } from "@/src/types";
import { Product } from "@prisma/client";
import { useDispatch } from "react-redux";

type AddProductButtonProps = {
  product: Product;
};

const AddProductButton = ({ product }: AddProductButtonProps) => {
  const dispatch = useDispatch();

  const addToOrder = () => {
    const { id, name, price, ...data } = product;
    const orderItem: OrderItem = {
      id,
      name,
      price,
      quantity: 1,
      subtotal: price * 1,
    };

    dispatch(addOrder(orderItem));
    console.log(orderItem);
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
