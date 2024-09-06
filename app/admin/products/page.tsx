import ProductsTable from "@/components/products/ProductsTable";
import Heading from "@/components/ui/Heading";
import { prisma } from "@/src/lib/prisma";
import React from "react";

async function getProducts() {
  const products = await prisma.product.findMany();
  return products;
}

const ProductsPage = async () => {
  const products = await getProducts();
  console.log(products);
  return (
    <>
      <Heading> Administrar Productos</Heading>
      <ProductsTable products={products} />
    </>
  );
};

export default ProductsPage;
