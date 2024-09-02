import ProductCart from "@/components/products/ProductCart";
import { prisma } from "@/src/lib/prisma";

//pasar función a una carpeta service
async function getProducts(category: string) {
  const products = await prisma.product.findMany({
    where: {
      category: {
        slug: category,
      },
    },
  });
  return products;
}

const Orderpage = async ({ params }: { params: { category: string } }) => {
  const products = await getProducts(params.category);

  return (
    <>
      <h1 className="text-2xl my-10 ">
        Elige y Personaliza tu pedido a continuación{" "}
      </h1>
      <div className="first:ml-4 first:mr-4 first:mt-4 first:mb-4 grid grid-cols-1 lg:grid-cols-2 2xl:grid-cols-3 gap-3 items-start ">
        {products.map((product) => (
          <ProductCart key={product.id} product={product} />
        ))}
      </div>
    </>
  );
};

export default Orderpage;
