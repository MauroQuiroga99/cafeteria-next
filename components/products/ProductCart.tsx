import { formatCurrency } from "@/src/utils";
import { Product } from "@prisma/client";

type ProductCartProps = {
  product: Product;
};

const ProductCart = ({ product }: ProductCartProps) => {
  return (
    <div className="border rounded-md bg-white">
      <div className="p-5 ">
        <h3 className="text-2xl font-bold"> {product.name} </h3>
        <p className="mt-5 font-black text-4xl text-amber-500">
          {formatCurrency(product.price)}
        </p>
      </div>
    </div>
  );
};

export default ProductCart;
