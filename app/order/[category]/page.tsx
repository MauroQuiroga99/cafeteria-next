import { prisma } from "@/src/lib/prisma";

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
  console.log(products);

  return (
    <div>
      <h1>Order Page</h1>
    </div>
  );
};

export default Orderpage;
