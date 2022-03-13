import React from "react";
import SingleProduct from "./SingleProduct";
import { products } from "../data/Products";

function ProductList() {
  return (
    <>
      <div className="md:col-span-9 xl:col-span-10 col-span-12 md:px-0 px-3 md:ml-4">
        {/* product list */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 mx-auto grid-flow-row mb-20 md:mb-0">
          {products.map((product) => {
            return <SingleProduct key={product.id} product={product}/>;
          })}
        </div>
      </div>
    </>
  );
}

export default ProductList;
