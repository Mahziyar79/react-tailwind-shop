import React, { useState } from "react";
import { Link } from "react-router-dom";
import PriceRange from "./PriceRange";

function ShopSidebar() {
  const [brandAccordion, setBrandAccordion] = useState(false);
  const [colorAccordion, setColorAccordion] = useState(false);
  const [priceAccordion, setPriceAccordion] = useState(false);

  return (
    <>
      {/* sidebar */}
      <div className="hidden md:col-span-3 xl:col-span-2 md:block col-span-2 row-span-2 pb-4">
        <div className="bg-white p-4 rounded-md mr-4 mt-4 sticky top-20">
          {/* category */}
          <div>
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
            <p className="text-orange-600 text-lg mt-7">فیلتر ها</p>
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
                    <div>
                      <label htmlFor="apple" className="flex items-center">
                        <input
                          type="checkbox"
                          name="brand"
                          id="apple"
                          className="form-checkbox rounded text-orange-600 focus:ring-orange-600"
                        />
                        <span className="mr-2">اپل</span>
                      </label>
                    </div>
                    <div>
                      <label htmlFor="samsung" className="flex items-center">
                        <input
                          type="checkbox"
                          name="brand"
                          id="samsung"
                          className="form-checkbox rounded text-orange-600 focus:ring-orange-600"
                        />
                        <span className="mr-2">سامسونگ</span>
                      </label>
                    </div>
                    <div>
                      <label htmlFor="xiaomi" className="flex items-center">
                        <input
                          type="checkbox"
                          name="brand"
                          id="xiaomi"
                          className="form-checkbox rounded text-orange-600 focus:ring-orange-600"
                        />
                        <span className="mr-2">شیائومی</span>
                      </label>
                    </div>
                  </div>
                )}
              </div>
            </div>
            {/* Acc No2 */}
            <div className="bg-white flex flex-col mt-2 gap-y-4 items-center rounded-lg">
              <div className="w-full">
                <div
                  onClick={() => setColorAccordion(!colorAccordion)}
                  className="hover:bg-gray-50 py-2 text-slate-800 w-full rounded-lg flex items-center justify-between cursor-pointer"
                >
                  <div className="flex items-center">
                    <span>
                      <svg
                        className="w-7 h-7"
                        viewBox="0 0 22 24"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M6.91679 11.0691V19.8219C6.91679 20.5221 6.6315 21.1639 6.17766 21.6307L6.15174 21.6567C6.09338 21.715 6.02855 21.7734 5.9702 21.8188C5.77569 21.9873 5.55524 22.117 5.32832 22.2078C5.257 22.2402 5.18569 22.2661 5.11437 22.2921C4.86151 22.3764 4.58921 22.4153 4.32338 22.4153C4.14833 22.4153 3.97328 22.3958 3.80471 22.3634C3.72042 22.3439 3.63613 22.3245 3.55184 22.2986C3.44811 22.2661 3.35086 22.2337 3.25361 22.1883C3.25361 22.1818 3.2536 22.1818 3.24712 22.1883C3.06558 22.0976 2.89053 21.9938 2.72845 21.8706L2.72196 21.8642C2.63767 21.7993 2.55988 21.7345 2.48856 21.6567C2.41724 21.5789 2.34591 21.5011 2.27459 21.4168C2.15141 21.2547 2.04768 21.0797 1.95691 20.8981C1.96339 20.8916 1.96339 20.8916 1.95691 20.8916C1.95691 20.8916 1.9569 20.8851 1.95042 20.8787C1.91152 20.7879 1.8791 20.6906 1.84668 20.5934C1.82074 20.5091 1.80129 20.4248 1.78184 20.3405C1.74942 20.172 1.72998 19.9969 1.72998 19.8219V11.0691C1.72998 10.0966 2.37833 9.44824 3.35086 9.44824H5.29591C6.26843 9.44824 6.91679 10.0966 6.91679 11.0691Z"
                          stroke="#222F5D"
                          strokeWidth="0.972526"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                        <path
                          d="M14.6973 18.8494V20.7944C14.6973 21.767 14.049 22.4153 13.0765 22.4153H4.32373C4.58955 22.4153 4.86186 22.3764 5.11472 22.2921C5.18604 22.2662 5.25735 22.2403 5.32867 22.2078C5.55559 22.1171 5.77604 21.9874 5.97055 21.8188C6.0289 21.7735 6.09373 21.7151 6.15208 21.6568L6.178 21.6308L10.5868 17.2285H13.0765C14.049 17.2285 14.6973 17.8769 14.6973 18.8494Z"
                          stroke="#222F5D"
                          strokeWidth="0.972526"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                        <path
                          d="M3.55184 22.2989C3.16283 22.1822 2.79329 21.9683 2.48856 21.657C2.17735 21.3523 1.96338 20.9828 1.84668 20.5938C2.09954 21.4042 2.74141 22.0461 3.55184 22.2989Z"
                          stroke="#222F5D"
                          strokeWidth="0.972526"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                        <path
                          d="M12.344 15.4712L10.587 17.2283L6.17822 21.6306C6.63207 21.1637 6.91735 20.5219 6.91735 19.8217V13.5586L8.67438 11.8016C9.36163 11.1143 10.2823 11.1143 10.9695 11.8016L12.344 13.1761C13.0313 13.8633 13.0313 14.784 12.344 15.4712Z"
                          stroke="#222F5D"
                          strokeWidth="0.972526"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                        <path
                          d="M4.32364 20.4705C4.68172 20.4705 4.97199 20.1803 4.97199 19.8222C4.97199 19.4641 4.68172 19.1738 4.32364 19.1738C3.96557 19.1738 3.67529 19.4641 3.67529 19.8222C3.67529 20.1803 3.96557 20.4705 4.32364 20.4705Z"
                          stroke="#222F5D"
                          strokeWidth="0.972526"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                        <circle
                          cx="10.9924"
                          cy="10.9299"
                          r="10.5589"
                          fill="#AFAFAF"
                          fillOpacity="0.29"
                        />
                      </svg>
                    </span>
                    <span className="mr-2 md:text-sm">رنگ محصول</span>
                  </div>
                  <div>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className={`h-5 w-5 transition-all duration-400 ${
                        colorAccordion && "rotate-180"
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
                {colorAccordion && (
                  <div className="py-2 flex flex-col gap-y-2">
                    <div>
                      <label htmlFor="green" className="flex items-center">
                        <input
                          type="checkbox"
                          name="color"
                          id="green"
                          className="form-checkbox rounded text-orange-600 focus:ring-orange-600"
                        />
                        <span className="mr-2">سبز</span>
                      </label>
                    </div>
                    <div>
                      <label htmlFor="red" className="flex items-center">
                        <input
                          type="checkbox"
                          name="color"
                          id="red"
                          className="form-checkbox rounded text-orange-600 focus:ring-orange-600"
                        />
                        <span className="mr-2">قرمز</span>
                      </label>
                    </div>
                    <div>
                      <label htmlFor="blue" className="flex items-center">
                        <input
                          type="checkbox"
                          name="color"
                          id="blue"
                          className="form-checkbox rounded text-orange-600 focus:ring-orange-600"
                        />
                        <span className="mr-2">آبی</span>
                      </label>
                    </div>
                  </div>
                )}
              </div>
            </div>
            {/* Acc No3 */}
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
                  <PriceRange />
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
