import ProductsTable from "@/components/products/ProductsTable";
import ProductsPagination from "@/components/ui/ProductsPagination";
import Heading from "@/components/ui/Heading";
import { prisma } from "@/src/lib/prisma";
import { redirect } from "next/navigation";
import Link from "next/link";
import ProductsSearchForm from "@/components/products/ProductsSearchForm";

async function productCount() {
  return await prisma.product.count();
}

async function getProducts(page: number, pageSize: number) {
  const skip = (page - 1) * pageSize;
  const products = await prisma.product.findMany({
    take: pageSize,
    skip,
    include: {
      category: true,
    },
  });
  return products;
}

export type ProductsWhitCategory = Awaited<ReturnType<typeof getProducts>>;

const ProductsPage = async ({
  searchParams,
}: {
  searchParams: { page: string };
}) => {
  const page = +searchParams.page || 1;
  const pageSize = 10;

  if (page < 0) redirect("/admin/products");

  const productsData = getProducts(page, pageSize);
  const totalProductsData = productCount();
  const [products, totalProducts] = await Promise.all([
    productsData,
    totalProductsData,
  ]);
  const totalPages = Math.ceil(totalProducts / pageSize);

  if (page > totalPages) redirect("/admin/products");

  return (
    <>
      <Heading> Administrar Productos</Heading>
      <div className=" flex flex-col lg:flex-row lg:justify-between gap-5">
        <Link
          href={"/admin/products/new"}
          className="bg-amber-400 w-full lg:w-auto text-xl px-10 py-3 text-center font-bold cursor-pointer"
        >
          Crear Producto
        </Link>
        <ProductsSearchForm />
      </div>
      <ProductsTable products={products} />
      <ProductsPagination page={page} totalPages={totalPages} />
    </>
  );
};

export default ProductsPage;
