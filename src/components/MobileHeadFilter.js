import React, { useState } from "react";
import ShopSidebar from "./ShopSidebar";

function MobileHeadFilter({
  setSelectedHeaderFilter,
  selectedBrandFilter,
  setSelectedBrandFilter,
  setSelectedPriceFilter,
}) {
  const [filterPopular, setFilterPopular] = useState(false);
  const [filterPrice, setFilterPrice] = useState(false);
  const [filterPopularName, setFilterPopularName] = useState("محبوب ترین");

  const filterPopularHandler = (name, popular) => {
    setFilterPopularName(name);
    setSelectedHeaderFilter(popular);
    setFilterPopular(false)
  };
  const filterPriceHandler = () => {
    setFilterPrice(!filterPrice);
    setFilterPopular(false)
  };
  const popularHandler = () => {
    setFilterPopular(!filterPopular);
    setFilterPrice(false)
  };

  return (
    <>
      {/* filter sort */}
      <div className="md:hidden px-4 flex items-center justify-between gap-x-2 mb-4">
        <div
          onClick={() => popularHandler()}
          className="bg-white flex items-center justify-center gap-x-2 p-2 rounded-md w-full cursor-pointer shadow-md"
        >
          <span>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5 stroke-orange-600"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth="2"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M3 4h13M3 8h9m-9 4h9m5-4v12m0 0l-4-4m4 4l4-4"
              />
            </svg>
          </span>
          <span className="text-sm text-slate-800">{filterPopularName}</span>
        </div>
        <div
          onClick={() => filterPriceHandler()}
          className="bg-white flex items-center justify-center gap-x-2 p-2 rounded-md w-full cursor-pointer shadow-md"
        >
          <span>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5 stroke-gray-400"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth="2"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M3 4a1 1 0 011-1h16a1 1 0 011 1v2.586a1 1 0 01-.293.707l-6.414 6.414a1 1 0 00-.293.707V17l-4 4v-6.586a1 1 0 00-.293-.707L3.293 7.293A1 1 0 013 6.586V4z"
              />
            </svg>
          </span>
          <span className="text-sm text-slate-800">فیلتر </span>
        </div>
      </div>

      {/* sort popular */}
      {filterPopular && (
        <div className="md:hidden px-4 flex items-center flex-col justify-between gap-y-2 mb-4">
          <div
            onClick={() => filterPopularHandler("محبوب ترین", "popular")}
            className="bg-white flex items-center justify-center gap-x-3 p-2 rounded-md w-full cursor-pointer shadow-md"
          >
            <span>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5 stroke-gray-400"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth="2"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M3 4a1 1 0 011-1h16a1 1 0 011 1v2.586a1 1 0 01-.293.707l-6.414 6.414a1 1 0 00-.293.707V17l-4 4v-6.586a1 1 0 00-.293-.707L3.293 7.293A1 1 0 013 6.586V4z"
                />
              </svg>
            </span>
            <span className="text-sm text-slate-800">محبوب ترین</span>
          </div>
          <div
            onClick={() => filterPopularHandler("گران ترین", "highPrice")}
            className="bg-white flex items-center justify-center gap-x-3 p-2 rounded-md w-full cursor-pointer shadow-md"
          >
            <span>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5 stroke-gray-400"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth="2"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M3 4a1 1 0 011-1h16a1 1 0 011 1v2.586a1 1 0 01-.293.707l-6.414 6.414a1 1 0 00-.293.707V17l-4 4v-6.586a1 1 0 00-.293-.707L3.293 7.293A1 1 0 013 6.586V4z"
                />
              </svg>
            </span>
            <span className="text-sm text-slate-800">گران ترین ها</span>
          </div>
          <div
            onClick={() => filterPopularHandler("ارزان ترین", "LowPrice")}
            className="bg-white flex items-center justify-center gap-x-3 p-2 rounded-md w-full cursor-pointer shadow-md"
          >
            <span>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5 stroke-gray-400"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth="2"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M3 4a1 1 0 011-1h16a1 1 0 011 1v2.586a1 1 0 01-.293.707l-6.414 6.414a1 1 0 00-.293.707V17l-4 4v-6.586a1 1 0 00-.293-.707L3.293 7.293A1 1 0 013 6.586V4z"
                />
              </svg>
            </span>
            <span className="text-sm text-slate-800">ارزان ترین ها</span>
          </div>
          <div
            onClick={() => filterPopularHandler("پرفروش ترین", "seller")}
            className="bg-white flex items-center justify-center gap-x-3 p-2 rounded-md w-full cursor-pointer shadow-md"
          >
            <span>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5 stroke-gray-400"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth="2"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M3 4a1 1 0 011-1h16a1 1 0 011 1v2.586a1 1 0 01-.293.707l-6.414 6.414a1 1 0 00-.293.707V17l-4 4v-6.586a1 1 0 00-.293-.707L3.293 7.293A1 1 0 013 6.586V4z"
                />
              </svg>
            </span>
            <span className="text-sm text-slate-800">پرفروش ترین ها</span>
          </div>
        </div>
      )}

      {/* price & brand filter */}
      {filterPrice && (
        <ShopSidebar
          selectedBrandFilter={selectedBrandFilter}
          setSelectedBrandFilter={setSelectedBrandFilter}
          setSelectedPriceFilter={setSelectedPriceFilter}
          isShow="block"
          isCategoryShow="hidden"
        />
      )}
    </>
  );
}

export default MobileHeadFilter;
