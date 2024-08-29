import { Category } from "@prisma/client";

type CategoryIconProps = {
  category: Category;
};
const CategoryIcon = ({ category }: CategoryIconProps) => {
  return <div> {category.name} </div>;
};

export default CategoryIcon;
