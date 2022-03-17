import React from "react";
import AppBar from "../components/AppBar";
import Breadcrumbs from "../components/Breadcrumbs";
import CategorySidebar from "../components/CategorySidebar";
import SingleProductPageComp from "../components/SingleProductPageComp";
import { useLocation } from "react-router-dom";

function SingleProductPage() {
  const product = useLocation();
  return (
    <>
      {product.state ? (
        <AppBar title={product.state.product.title} />
      ) : (
        <AppBar title="محصول یافت نشد" />
      )}

      {product.state && (
        <div className="px-4 flex items-center gap-x-2 md:hidden my-2">
          <Breadcrumbs title={product.state.product.title} />
        </div>
      )}

      <div className="2xl:container 2xl:max-w-screen-2xl 2xl:mx-auto grid grid-cols-12 md:gap-8 md:pb-8">
        <CategorySidebar />
        <div className="col-span-12 xl:col-span-10 md:col-span-9 md:ml-4 md:mt-4">
          {product.state && (
            <div className="hidden md:flex px-4 items-center gap-x-2 bg-white">
              <div className="p-4 flex items-center gap-x-2 rounded-md">
                <Breadcrumbs title={product.state.product.title} />
              </div>
            </div>
          )}

          {product.state ? (
            <SingleProductPageComp product={product.state.product} />
          ) : (
            <h2>محصول مورد نظر پیدا نشد!</h2>
          )}
        </div>
      </div>
    </>
  );
}

export default SingleProductPage;
