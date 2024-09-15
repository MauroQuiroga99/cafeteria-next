import { prisma } from "@/src/lib/prisma";
import CategoryIcon from "../ui/CategoryIcon";
import Logo from "../ui/Logo";
import Link from "next/link";

async function getCategories() {
  return await prisma.category.findMany();
}

const OrderSidebar = async () => {
  const categories = await getCategories();
  console.log(categories);

  return (
    <aside className="md:w-72 md:h-screen bg-white">
      <Logo />
      <div className="flex flex-col mt-2 justify-center items-center ">
        <Link
          href={"/admin/products"}
          className=" flex justify-center text-lg rounded-lg bg-amber-400 w-1 lg:w-auto px-5 py-2 text-center font-bold cursor-pointer"
        >
          Administrar Cáfetería
        </Link>
      </div>
      <nav className="mt-4">
        {categories.map((category) => (
          <CategoryIcon key={category.id} category={category} />
        ))}
      </nav>
    </aside>
  );
};

export default OrderSidebar;
