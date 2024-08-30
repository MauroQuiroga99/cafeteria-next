import React from "react";

const Orderpage = ({ params }: { params: { category: string } }) => {
  console.log(params.category);
  return <div>OrderPage</div>;
};

export default Orderpage;
