import React, { useState } from "react";
import { Link } from "react-router-dom";
import { products } from "../data/Products";
import Slider from "@material-ui/core/Slider";
import GetLowHighPrice from "./GetLowHighPrice";
import SeparateNumbers from "../common/SeparateNumbers";

function ShopSidebar({
  selectedBrandFilter,
  setSelectedBrandFilter,
  setSelectedPriceFilter,
  isShow,
  isCategoryShow
}) {
  const [brandAccordion, setBrandAccordion] = useState(false);
  const [priceAccordion, setPriceAccordion] = useState(false);
  const [value, setValue] = useState([0, 1000000]);
  const rangeSelector = (event, newValue) => {
    setValue(newValue);
  };


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
      <div className={`${isShow} md:col-span-3 xl:col-span-2 md:block col-span-2 row-span-2 pb-4`}>
        <div className="bg-white p-4 rounded-md mr-4 mt-4 sticky top-20">
          {/* category */}
          <div className={`${isCategoryShow}`}>
            <p className="text-orange-600 text-lg">دسته بندی</p>
            <div>
              <div className="flex items-center text-slate-700 mt-4 text-sm">
                <div className="bg-gray-200 relative w-7 h-7 rounded-full -top-2">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-6 w-6 absolute left-0 -bottom-1"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth="2"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z"
                    />
                  </svg>
                </div>
                <p className="mr-1 hover:bg-gray-50 w-full p-2 rounded-lg pl-0">
                  <Link to={"/"}>تلفن همراه</Link>
                </p>
              </div>
              <div className="flex items-center text-slate-700 mt-4 text-sm">
                <div className="bg-gray-200 relative w-7 h-7 rounded-full -top-2">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-6 w-6 absolute left-0 -bottom-1"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth="2"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                    />
                  </svg>
                </div>
                <p className="mr-1.5 hover:bg-gray-50 w-full p-2 rounded-lg pl-0">
                  <Link to={"/"}>لپ تاپ</Link>
                </p>
              </div>
              <div className="flex items-center text-slate-700 mt-4 text-sm">
                <div className="bg-gray-200 relative w-7 h-7 rounded-full -top-2">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-6 w-6 absolute left-0 -bottom-1"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth="2"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
                    />
                  </svg>
                </div>
                <p className="mr-1.5 hover:bg-gray-50 w-full p-2 rounded-lg pl-0">
                  <Link to={"/"}>ساعت هوشمندی</Link>
                </p>
              </div>
            </div>
          </div>
          {/* filters */}
          <div>
            <p className={`text-orange-600 text-lg ${isCategoryShow==='hidden ? mt-0 : mt-7'}`}>فیلتر ها</p>
            {/* Acc No1 */}
            <div className="bg-white flex flex-col mt-2 gap-y-4 items-center rounded-lg">
              <div className="w-full">
                <div
                  onClick={() => setBrandAccordion(!brandAccordion)}
                  className="hover:bg-gray-50 py-2 text-slate-800 w-full rounded-lg flex items-center justify-between cursor-pointer"
                >
                  <div className="flex items-center">
                    <span>
                      <svg
                        className="w-7 h-7"
                        viewBox="0 0 20 22"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <circle
                          cx="10.5"
                          cy="9.5"
                          r="9.5"
                          fill="#AFAFAF"
                          fillOpacity="0.29"
                        />
                        <path
                          d="M12.8334 21.2705H1.16669C0.92752 21.2705 0.729187 21.0722 0.729187 20.833C0.729187 20.5938 0.92752 20.3955 1.16669 20.3955H12.8334C13.0725 20.3955 13.2709 20.5938 13.2709 20.833C13.2709 21.0722 13.0725 21.2705 12.8334 21.2705Z"
                          fill="#222F5D"
                        />
                        <path
                          d="M2.15845 20.8336H1.28345L1.31262 13.8161C1.31262 13.3202 1.54011 12.8594 1.93095 12.5561L6.01428 9.37691C6.59178 8.92775 7.40262 8.92775 7.98595 9.37691L12.0693 12.5502C12.4543 12.8536 12.6876 13.3261 12.6876 13.8161V20.8336H11.8126V13.8219C11.8126 13.6002 11.7076 13.3844 11.5326 13.2444L7.44928 10.0711C7.18678 9.86692 6.81928 9.86692 6.55095 10.0711L2.46762 13.2503C2.29262 13.3844 2.18762 13.6002 2.18762 13.8219L2.15845 20.8336Z"
                          fill="#222F5D"
                        />
                        <path
                          d="M9.91665 21.2712H4.08331C3.84415 21.2712 3.64581 21.0728 3.64581 20.8337V15.292C3.64581 14.5687 4.23498 13.9795 4.95831 13.9795H9.04165C9.76498 13.9795 10.3541 14.5687 10.3541 15.292V20.8337C10.3541 21.0728 10.1558 21.2712 9.91665 21.2712ZM4.52081 20.3962H9.47915V15.292C9.47915 15.0528 9.28081 14.8545 9.04165 14.8545H4.95831C4.71915 14.8545 4.52081 15.0528 4.52081 15.292V20.3962Z"
                          fill="#222F5D"
                        />
                        <path
                          d="M5.83331 18.792C5.59415 18.792 5.39581 18.5937 5.39581 18.3545V17.4795C5.39581 17.2403 5.59415 17.042 5.83331 17.042C6.07248 17.042 6.27081 17.2403 6.27081 17.4795V18.3545C6.27081 18.5937 6.07248 18.792 5.83331 18.792Z"
                          fill="#222F5D"
                        />
                        <path
                          d="M7.875 12.8125H6.125C5.88583 12.8125 5.6875 12.6142 5.6875 12.375C5.6875 12.1358 5.88583 11.9375 6.125 11.9375H7.875C8.11417 11.9375 8.3125 12.1358 8.3125 12.375C8.3125 12.6142 8.11417 12.8125 7.875 12.8125Z"
                          fill="#222F5D"
                        />
                      </svg>
                    </span>
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
                  <div className="py-2 flex flex-col gap-y-2">
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
            <div className="bg-white flex flex-col mt-2 gap-y-4 items-center rounded-lg">
              <div className="w-full">
                <div
                  onClick={() => setPriceAccordion(!priceAccordion)}
                  className="hover:bg-gray-50 py-2 text-slate-800 w-full rounded-lg flex items-center justify-between cursor-pointer"
                >
                  <div className="flex items-center">
                    <span>
                      <svg
                        className="w-7 h-7"
                        viewBox="0 0 24 24"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M11.9069 17.1794C11.6346 17.4452 11.479 17.8277 11.5179 18.2362C11.5763 18.9364 12.2181 19.4486 12.9183 19.4486H14.1502V20.2201C14.1502 21.5622 13.0545 22.6579 11.7124 22.6579H4.26934C2.92726 22.6579 1.83154 21.5622 1.83154 20.2201V15.8568C1.83154 14.5147 2.92726 13.4189 4.26934 13.4189H11.7124C13.0545 13.4189 14.1502 14.5147 14.1502 15.8568V16.7904H12.8405C12.4775 16.7904 12.1468 16.933 11.9069 17.1794Z"
                          stroke="#222F5D"
                          strokeWidth="0.972526"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                        <path
                          d="M1.83154 16.4395V13.4766C1.83154 12.705 2.30484 12.0177 3.02451 11.7454L8.17241 9.80039C8.97637 9.49566 9.83867 10.0922 9.83867 10.9545V13.4182"
                          stroke="#222F5D"
                          strokeWidth="0.972526"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                        <path
                          d="M14.8367 17.4513V18.787C14.8367 19.1436 14.5514 19.4353 14.1883 19.4483H12.9176C12.2174 19.4483 11.5755 18.9361 11.5171 18.2358C11.4782 17.8274 11.6338 17.4449 11.9062 17.179C12.146 16.9327 12.4767 16.79 12.8398 16.79H14.1883C14.5514 16.803 14.8367 17.0947 14.8367 17.4513Z"
                          stroke="#222F5D"
                          strokeWidth="0.972526"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                        <path
                          d="M4.74902 16.1738H9.28748"
                          stroke="#222F5D"
                          strokeWidth="0.972526"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                        <circle
                          cx="12.9924"
                          cy="11.1721"
                          r="10.5589"
                          fill="#AFAFAF"
                          fillOpacity="0.29"
                        />
                      </svg>
                    </span>
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
                  <div className="py-2 flex flex-col gap-y-2">
                    <div
                      style={{
                        display: "block",
                      }}
                    >
                      <p className="text-xs mb-2">
                        {" "}
                        بازه قیمتی خود را مشخص کنید:
                      </p>
                        <Slider
                          value={value}
                          onChange={rangeSelector}
                          valueLabelDisplay="off"
                          step={50000}
                          max={GetLowHighPrice().max}
                        />
                        <p className="text-sm">شروع قیمت : {SeparateNumbers(value[0])} تومان</p>
                        <p className="text-sm my-2">پایان قیمت : {SeparateNumbers(value[1])} تومان</p>
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
