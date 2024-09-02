import { Product } from "@prisma/client";

// solo los atributos que necesito de Product para el carrito y otros atributos que necesito
export type OrderItem = Pick<Product, "id" | "name" | "price"> & {
  quantity: number;
  subtotal: number;
};
