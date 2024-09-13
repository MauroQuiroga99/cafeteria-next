import { formatCurrency, getImagePath } from "@/src/utils";
import { Product } from "@prisma/client";
import Image from "next/image";
import AddProductButton from "./AddProductButton";

type ProductCartProps = {
  product: Product;
};

const ProductCart = ({ product }: ProductCartProps) => {
  const imagePath = getImagePath(product.image);
  return (
    <div className="border rounded-md bg-white">
      <Image
        width={400}
        height={500}
        src={imagePath}
        alt={`Imagen Platillo ${product.name}`}
        quality={75}
      />
      <div className="p-5 ">
        <h3 className="text-2xl font-bold"> {product.name} </h3>
        <p className="mt-5 font-black text-4xl text-amber-500">
          {formatCurrency(product.price)}
        </p>
        <AddProductButton product={product} />
      </div>
    </div>
  );
};

export default ProductCart;
