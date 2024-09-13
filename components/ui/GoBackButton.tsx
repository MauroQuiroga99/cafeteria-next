import Link from "next/link";
import React from "react";

const GoBackButton = () => {
  return (
    <Link
      href={"/admin/products"}
      className="bg-amber-400 w-full lg:w-auto text-xl px-10 py-3 text-center font-bold cursor-pointer"
    >
      Volver
    </Link>
  );
};

export default GoBackButton;
