import AddProductForm from "@/components/products/AddProductForm";
import Heading from "@/components/ui/Heading";
import React from "react";

const CreateProductPage = () => {
  return (
    <>
      <Heading>Nuevo Producto</Heading>
      <AddProductForm />
    </>
  );
};

export default CreateProductPage;
