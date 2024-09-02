"use client";
import { getOrder } from "@/src/store/selectors/orders";
import { addOrder } from "@/src/store/slices/orderSlice";
import { OrderItem } from "@/src/types";
import { Product } from "@prisma/client";
import { useDispatch, useSelector } from "react-redux";

type AddProductButtonProps = {
  product: Product;
};

const AddProductButton = ({ product }: AddProductButtonProps) => {
  const dispatch = useDispatch();
  const orderItems = useSelector(getOrder);

  const addToOrder = () => {
    const { id, name, price } = product;

    // Encuentra el item existente en la orden
    const existingItem = orderItems.find((item) => item.id === id);

    // Crear nuevo ítem o actualizar el existente
    const newOrderItem: OrderItem = {
      id,
      name,
      price,
      quantity: existingItem ? existingItem.quantity + 1 : 1,
      subtotal: price * (existingItem ? existingItem.quantity + 1 : 1),
    };

    dispatch(addOrder(newOrderItem));
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
