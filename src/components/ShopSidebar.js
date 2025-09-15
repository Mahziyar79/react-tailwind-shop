import GetLowHighPrice from "./GetLowHighPrice";
import { Link } from "react-router-dom";
import SeparateNumbers from "../common/SeparateNumbers";
import Slider from "@material-ui/core/Slider";
import { products } from "../data/Products";
import { useState } from "react";

function ShopSidebar({
  selectedBrandFilter,
  setSelectedBrandFilter,
  setSelectedPriceFilter,
  isShow,
  isCategoryShow,
}) {
  const [brandAccordion, setBrandAccordion] = useState(false);
  const [priceAccordion, setPriceAccordion] = useState(false);
  const [value, setValue] = useState([0, 1000000]);
  const rangeSelector = (event, newValue) => {
    setValue(newValue);
  };
  const categoryItems = [
    {
      name: "تلفن همراه",
      icon: "M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z",
      link: "/",
    },
    {
      name: "لپ تاپ",
      icon: "M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z",
      link: "/",
    },
    {
      name: "ساعت هوشمندی",
      icon: "M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z",
      link: "/",
    },
  ];

  const checkBrands = (e, id) => {
    if (e.target.checked) {
      setSelectedBrandFilter([...selectedBrandFilter, id]);
    } else {
      setSelectedBrandFilter(
        selectedBrandFilter.filter((brand) => brand !== id)
      );
    }
  };

  return (
    <>
      {/* sidebar */}
      <div
        className={`${isShow} md:col-span-3 xl:col-span-2 md:block col-span-2 row-span-2 pb-4 ml-4 md:ml-0`}
      >
        <div className="bg-white dark:bg-gray-600 p-4 rounded-md mr-4 mt-4 sticky top-20">
          {/* category */}
          <div className={`${isCategoryShow}`}>
            <p className="text-orange-600 text-lg">دسته بندی</p>
            <div>
              {categoryItems.map((c) => (
                <div
                  className="flex items-center text-slate-700 dark:text-white mt-4 text-sm"
                  key={c.name}
                >
                  <div className="bg-gray-200 dark:bg-slate-800 relative w-7 h-7 rounded-full p-4">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-6 w-6 absolute top-1 right-1"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      strokeWidth="2"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d={c.icon}
                      />
                    </svg>
                  </div>
                  <p className="mr-1 hover:bg-gray-50 hover:dark:bg-slate-800 w-full p-2 rounded-lg pl-0">
                    <Link to={c.link}>{c.name}</Link>
                  </p>
                </div>
              ))}
            </div>
          </div>
          {/* filters */}
          <div>
            <p
              className={`text-orange-600 text-lg ${
                isCategoryShow === "hidden" ? "mt-0" : "mt-7"
              }`}
            >
              فیلتر ها
            </p>
            {/* Acc No1 */}
            <div className="bg-white dark:bg-slate-800 flex flex-col mt-2 gap-y-4 items-center rounded-lg">
              <div className="w-full">
                <div
                  onClick={() => setBrandAccordion(!brandAccordion)}
                  className="hover:bg-gray-50 py-2 text-slate-800 dark:text-white dark:hover:bg-slate-700 w-full rounded-lg flex items-center justify-between cursor-pointer px-2"
                >
                  <div className="flex items-center">
                    <div className="bg-gray-200 dark:bg-gray-600 relative w-6 h-6 rounded-full">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="currentColor"
                        className="absolute w-4 h-4 left-1 top-1"
                        viewBox="0 0 16 16"
                      >
                        <path d="M8.707 1.5a1 1 0 0 0-1.414 0L.646 8.146a.5.5 0 0 0 .708.708L2 8.207V13.5A1.5 1.5 0 0 0 3.5 15h9a1.5 1.5 0 0 0 1.5-1.5V8.207l.646.647a.5.5 0 0 0 .708-.708L13 5.793V2.5a.5.5 0 0 0-.5-.5h-1a.5.5 0 0 0-.5.5v1.293zM13 7.207V13.5a.5.5 0 0 1-.5.5h-9a.5.5 0 0 1-.5-.5V7.207l5-5z" />
                      </svg>
                    </div>
                    <span className="mr-2 md:text-sm">برند محصول</span>
                  </div>
                  <div>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className={`h-5 w-5 transition-all duration-400 ${
                        brandAccordion && "rotate-180"
                      }`}
                      viewBox="0 0 20 20"
                      fill="currentColor"
                    >
                      <path
                        fillRule="evenodd"
                        d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                        clipRule="evenodd"
                      />
                    </svg>
                  </div>
                </div>
                {brandAccordion && (
                  <div className="p-2 flex flex-col gap-y-2 dark:text-white">
                    {products.map((product) => (
                      <div key={product.id}>
                        <label
                          htmlFor={product.category}
                          className="flex items-center"
                        >
                          <input
                            type="checkbox"
                            name="brand"
                            id={product.category}
                            className="form-checkbox rounded text-orange-600 focus:ring-orange-600"
                            onChange={(e) => checkBrands(e, e.target.id)}
                          />
                          <span className="mr-2">{product.category}</span>
                        </label>
                      </div>
                    ))}
                  </div>
                )}
              </div>
            </div>

            {/* Acc No2 */}
            <div className="bg-white dark:bg-slate-800 flex flex-col mt-2 gap-y-4 items-center rounded-lg">
              <div className="w-full">
                <div
                  onClick={() => setPriceAccordion(!priceAccordion)}
                  className="hover:bg-gray-50 py-2 text-slate-800 dark:text-white dark:hover:bg-slate-700 w-full rounded-lg flex items-center justify-between cursor-pointer px-2"
                >
                  <div className="flex items-center">
                    <div className="bg-gray-200 dark:bg-gray-600 relative w-6 h-6 rounded-full">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="currentColor"
                        className="absolute w-4 h-4 left-1 top-1"
                        viewBox="0 0 16 16"
                      >
                        <path d="M12.136.326A1.5 1.5 0 0 1 14 1.78V3h.5A1.5 1.5 0 0 1 16 4.5v9a1.5 1.5 0 0 1-1.5 1.5h-13A1.5 1.5 0 0 1 0 13.5v-9a1.5 1.5 0 0 1 1.432-1.499zM5.562 3H13V1.78a.5.5 0 0 0-.621-.484zM1.5 4a.5.5 0 0 0-.5.5v9a.5.5 0 0 0 .5.5h13a.5.5 0 0 0 .5-.5v-9a.5.5 0 0 0-.5-.5z" />
                      </svg>
                    </div>
                    <span className="mr-2 md:text-sm">قیمت محصول</span>
                  </div>
                  <div>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className={`h-5 w-5 transition-all duration-400 ${
                        priceAccordion && "rotate-180"
                      }`}
                      viewBox="0 0 20 20"
                      fill="currentColor"
                    >
                      <path
                        fillRule="evenodd"
                        d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                        clipRule="evenodd"
                      />
                    </svg>
                  </div>
                </div>
                {priceAccordion && (
                  <div className="p-2 flex flex-col gap-y-2 dark:text-white">
                    <div
                      style={{
                        display: "block",
                      }}
                    >
                      <p className="text-xs mb-2">
                        بازه قیمتی خود را مشخص کنید:
                      </p>
                      <Slider
                        value={value}
                        onChange={rangeSelector}
                        valueLabelDisplay="off"
                        step={50000}
                        max={GetLowHighPrice().max}
                      />
                      <p className="text-sm">
                        شروع قیمت : {SeparateNumbers(value[0])} تومان
                      </p>
                      <p className="text-sm my-2">
                        پایان قیمت : {SeparateNumbers(value[1])} تومان
                      </p>
                      <button
                        onClick={() => setSelectedPriceFilter(value)}
                        className="bg-red-400 w-full text-sm rounded-md border-2 border-red-400 text-white p-1 hover:bg-white hover:text-red-400 transition-all duration-200"
                      >
                        تایید
                      </button>
                    </div>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default ShopSidebar;
