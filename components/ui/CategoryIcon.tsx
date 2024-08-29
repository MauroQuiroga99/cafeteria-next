import { Category } from "@prisma/client";
import Image from "next/image";

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
      <p className="text-lg font-bold"> {category.name} </p>
    </div>
  );
};

export default CategoryIcon;
