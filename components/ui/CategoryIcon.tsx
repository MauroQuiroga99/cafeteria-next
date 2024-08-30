import { Category } from "@prisma/client";
import Image from "next/image";
import Link from "next/link";

type CategoryIconProps = {
  category: Category;
};

const CategoryIcon = ({ category }: CategoryIconProps) => {
  return (
    <div
      className={`flex items-center gap-4 w-full border-t border-gray-200 p-3 last-of-type:border-b`}
    >
      <div className="w-14 h-14 relative ">
        <Image
          fill
          src={`/icon_${category.slug}.svg`}
          alt="icono de categoría"
        />
      </div>
      <Link href={`/order/${category.slug}`} className="text-lg font-bold">
        {category.name}
      </Link>
    </div>
  );
};

export default CategoryIcon;
