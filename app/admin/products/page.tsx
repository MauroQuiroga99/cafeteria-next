import ProductsTable from "@/components/products/ProductsTable";
import Heading from "@/components/ui/Heading";
import { prisma } from "@/src/lib/prisma";
import React from "react";
import { TypeOf } from "zod";

async function getProducts() {
  const products = await prisma.product.findMany({
    include: {
      category: true,
    },
  });
  return products;
}

export type ProductsWhitCategory = Awaited<ReturnType<typeof getProducts>>;

const ProductsPage = async () => {
  const products = await getProducts();

  return (
    <>
      <Heading> Administrar Productos</Heading>
      <ProductsTable products={products} />
    </>
  );
};

export default ProductsPage;
