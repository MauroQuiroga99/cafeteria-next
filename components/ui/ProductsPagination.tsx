import Link from "next/link";

type ProductsPaginationProps = {
  page: number;
};

const ProductsPagination = ({ page }: ProductsPaginationProps) => {
  return (
    <nav className=" flex justify-center py-10">
      <Link href={`/admin/products?page=${page + 1}`}>&raquo;</Link>
    </nav>
  );
};

export default ProductsPagination;
