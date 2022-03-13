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
      <AppBar />
      <div className="px-4 flex items-center gap-x-2 md:hidden my-2">
        <Breadcrumbs />
      </div>

      <div className="2xl:container 2xl:max-w-screen-2xl 2xl:mx-auto grid grid-cols-12 md:gap-8 md:pb-8">
        <CategorySidebar />
        <div className="col-span-12 xl:col-span-10 md:col-span-9 md:ml-4 md:mt-4">
          <div className="hidden md:flex px-4 items-center gap-x-2 bg-white">
            <div className="p-4 flex items-center gap-x-2 rounded-md">
              <Breadcrumbs />
            </div>
          </div>
          <SingleProductPageComp product={product.state.product}/>
        </div>
      </div>
    </>
  );
}

export default SingleProductPage;
