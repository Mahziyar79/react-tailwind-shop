import React from "react";
import productImage from "../assets/images/iphone-13-pro-max.png";
import { useDispatch ,useSelector} from "react-redux";
import { addProduct } from "../redux/addProducts/productSlice";
import SeparateNumbers from "../common/SeparateNumbers";

function SingleProductPageComp({ product }) {
  const dispatch = useDispatch();
  const products = useSelector((state) => state.productReducer.cart);
  console.log(products);
  return (
    <div className="md:bg-white rounded-md md:p-4 md:mt-5">
      {/* single product */}
      <div className="flex justify-center flex-col lg:flex-row">
        <div className="md:flex-row flex flex-col md:flex-auto">
          {/* product image */}
          <div className="w-4/5 md:w-1/3 max-w-xs md:ml-10 md:mr-0 md:my-0 m-auto my-6 md:flex md:flex-col">
            <img className="h-auto w-full" src={productImage} alt="Logo" />
            <div className="justify-around mt-3 hidden md:flex gap-x-3">
              <div className="border-2 border-gray-300 rounded-lg p-1">
                <img className="h-auto w-full" src={productImage} alt="" />
              </div>
              <div className="border-2 border-gray-300 rounded-lg p-1">
                <img className="h-auto w-full" src={productImage} alt="" />
              </div>
              <div className="border-2 border-gray-300 rounded-lg p-1">
                <img className="h-auto w-full" src={productImage} alt="" />
              </div>
            </div>
          </div>
          <div>
            {/* product title */}
            <div>
              <p className="text-center lg:text-xl md:text-right">
                {product.title}
              </p>
              <p className="text-center lg:text-base text-gray-400 mt-2 md:text-right">
                Apple Iphone 13 pro max
              </p>
            </div>
            <hr className="mt-5 hidden md:block" />
            {/* color section */}
            <div className="flex items-center justify-around md:justify-start my-5">
              <p className="text-gray-500">انتخاب رنگ :</p>
              <div className="flex mr-4" x-data="{checkShow : ''}">
                <div className="bg-orange-300 w-8 h-8 rounded-full shadow-md border-2 border-white flex items-center justify-center cursor-pointer -ml-1">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-6 w-6"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                    x-show="checkShow==='orange'"
                  >
                    <path
                      fillRule="evenodd"
                      d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                      clipRule="evenodd"
                    />
                  </svg>
                </div>
                <div className="bg-blue-300 w-8 h-8 flex items-center justify-center rounded-full shadow-md border-2 border-white -ml-1 cursor-pointer">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-6 w-6"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                    x-show="checkShow==='blue'"
                  >
                    <path
                      fillRule="evenodd"
                      d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                      clipRule="evenodd"
                    />
                  </svg>
                </div>
                <div className="bg-red-600 w-8 h-8 flex items-center justify-center rounded-full shadow-md border-2 border-white cursor-pointer">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-6 w-6"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                    x-show="checkShow==='red'"
                  >
                    <path
                      fillRule="evenodd"
                      d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                      clipRule="evenodd"
                    />
                  </svg>
                </div>
              </div>
            </div>
            {/* product shipping info */}
            <div className="md:hidden flex items-center justify-center gap-3 flex-wrap">
              <div className="flex items-center justify-center flex-auto">
                <span>
                  <svg
                    width="20"
                    height="19"
                    viewBox="0 0 20 19"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <circle cx="12" cy="8" r="8" fill="#E2E2E2" />
                    <path
                      d="M1.75586 11.5449V14.1641C1.75586 16.7833 2.80586 17.8333 5.42503 17.8333H8.56919C11.1884 17.8333 12.2384 16.7833 12.2384 14.1641V11.5449"
                      stroke="#222F5D"
                      strokeWidth="0.875"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                    <path
                      d="M7.00012 11.9993C8.06762 11.9993 8.85512 11.1302 8.75012 10.0627L8.36512 6.16602H5.64095L5.25012 10.0627C5.14512 11.1302 5.93262 11.9993 7.00012 11.9993Z"
                      stroke="#222F5D"
                      strokeWidth="0.875"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                    <path
                      d="M10.681 11.9993C11.8593 11.9993 12.7226 11.0427 12.606 9.87018L12.4426 8.26602C12.2326 6.74935 11.6493 6.16602 10.121 6.16602H8.3418L8.75013 10.2552C8.8493 11.2177 9.71846 11.9993 10.681 11.9993Z"
                      stroke="#222F5D"
                      strokeWidth="0.875"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                    <path
                      d="M3.29005 11.9993C4.25255 11.9993 5.12172 11.2177 5.21505 10.2552L5.34339 8.96602L5.62339 6.16602H3.84422C2.31589 6.16602 1.73255 6.74935 1.52255 8.26602L1.36505 9.87018C1.24839 11.0427 2.11172 11.9993 3.29005 11.9993Z"
                      stroke="#222F5D"
                      strokeWidth="0.875"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                    <path
                      d="M7.00033 14.916C6.02616 14.916 5.54199 15.4002 5.54199 16.3743V17.8327H8.45866V16.3743C8.45866 15.4002 7.97449 14.916 7.00033 14.916Z"
                      stroke="#222F5D"
                      strokeWidth="0.875"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </span>
                <span className="text-sm mr-2">فروشنده : دیجی تایز</span>
              </div>
              <div className="flex items-center justify-center flex-auto">
                <span>
                  <svg
                    width="21"
                    height="19"
                    viewBox="0 0 21 19"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <circle cx="13" cy="8" r="8" fill="#E2E2E2" />
                    <path
                      d="M7.43053 3.57973L3.89594 4.91139C3.08136 5.21598 2.41553 6.17931 2.41553 7.04348V12.3064C2.41553 13.1422 2.96803 14.2401 3.64094 14.7431L6.68678 17.0168C7.68553 17.7676 9.32886 17.7676 10.3276 17.0168L13.3734 14.7431C14.0464 14.2401 14.5989 13.1422 14.5989 12.3064V7.04348C14.5989 6.17223 13.933 5.20889 13.1184 4.90431L9.58386 3.57973C8.98178 3.36014 8.01844 3.36014 7.43053 3.57973Z"
                      stroke="#222F5D"
                      strokeWidth="1.0625"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </span>
                <span className="text-sm mr-2">گارانتی 18 ماه زرین</span>
              </div>
              <div className="flex items-center justify-center w-full">
                <span>
                  <svg
                    width="20"
                    height="21"
                    viewBox="0 0 20 21"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <circle cx="12" cy="8" r="8" fill="#E2E2E2" />
                    <path
                      d="M10.0002 6.33301V12.9997C10.0002 13.733 9.40016 14.333 8.66683 14.333H1.3335V10.0797C1.82016 10.6597 2.56685 11.0197 3.39351 10.9997C4.06685 10.9863 4.6735 10.7263 5.12683 10.293C5.3335 10.1197 5.50684 9.89967 5.64018 9.65967C5.88018 9.253 6.0135 8.77299 6.00016 8.27299C5.98016 7.49299 5.63351 6.80634 5.09351 6.33301H10.0002Z"
                      stroke="#222F5D"
                      strokeWidth="1.125"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                    <path
                      d="M14.6668 14.333V16.333C14.6668 17.4397 13.7735 18.333 12.6668 18.333H12.0002C12.0002 17.5997 11.4002 16.9997 10.6668 16.9997C9.9335 16.9997 9.3335 17.5997 9.3335 18.333H6.66683C6.66683 17.5997 6.06683 16.9997 5.3335 16.9997C4.60016 16.9997 4.00016 17.5997 4.00016 18.333H3.3335C2.22683 18.333 1.3335 17.4397 1.3335 16.333V14.333H8.66683C9.40016 14.333 10.0002 13.733 10.0002 12.9997V8.33301H11.2268C11.7068 8.33301 12.1468 8.59301 12.3868 9.00635L13.5268 10.9997H12.6668C12.3002 10.9997 12.0002 11.2997 12.0002 11.6663V13.6663C12.0002 14.033 12.3002 14.333 12.6668 14.333H14.6668Z"
                      stroke="#222F5D"
                      strokeWidth="1.125"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                    <path
                      d="M5.33333 19.6667C6.06971 19.6667 6.66667 19.0697 6.66667 18.3333C6.66667 17.597 6.06971 17 5.33333 17C4.59695 17 4 17.597 4 18.3333C4 19.0697 4.59695 19.6667 5.33333 19.6667Z"
                      stroke="#222F5D"
                      strokeWidth="1.125"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                    <path
                      d="M10.6668 19.6667C11.4032 19.6667 12.0002 19.0697 12.0002 18.3333C12.0002 17.597 11.4032 17 10.6668 17C9.93045 17 9.3335 17.597 9.3335 18.3333C9.3335 19.0697 9.93045 19.6667 10.6668 19.6667Z"
                      stroke="#222F5D"
                      strokeWidth="1.125"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                    <path
                      d="M14.6667 13V14.3333H12.6667C12.3 14.3333 12 14.0333 12 13.6667V11.6667C12 11.3 12.3 11 12.6667 11H13.5267L14.6667 13Z"
                      stroke="#222F5D"
                      strokeWidth="1.125"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                    <path
                      d="M6.00033 8.33268C6.00033 9.13268 5.647 9.84602 5.09367 10.3327C4.62034 10.746 4.00699 10.9993 3.33366 10.9993C1.86033 10.9993 0.666992 9.80602 0.666992 8.33268C0.666992 7.49268 1.05366 6.73935 1.66699 6.25269C2.12699 5.88602 2.70699 5.66602 3.33366 5.66602C4.80699 5.66602 6.00033 6.85935 6.00033 8.33268Z"
                      stroke="#222F5D"
                      strokeWidth="1.125"
                      strokeMiterlimit="10"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                    <path
                      d="M3.50033 7.49902V8.49902L2.66699 8.99902"
                      stroke="#222F5D"
                      strokeWidth="1.125"
                      strokeMiterlimit="10"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </span>
                <span className="text-sm mr-2">ارسال توسط : انبار تهران</span>
              </div>
            </div>
            {/* product info */}
            <div className="mx-3 mt-5 text-slate-800 bg-white p-4 md:mb-0 rounded-lg md:bg-inherit md:p-0">
              <p className="md:text-lg text-base">ویژگی های کالا :</p>
              <ul className="mt-4 text-sm list-disc flex flex-col gap-y-2 marker:text-orange-500 list-inside">
                <li>
                  <span className="text-slate-600 lg:text-base">
                    حافظه داخلی :
                  </span>
                  <span>128 گیگابایت</span>
                </li>
                <li>
                  <span className="text-slate-600 lg:text-base">
                    بازه اندازه صفحه نمایش :
                  </span>
                  <span>0.6 اینچ و بزرگتر</span>
                </li>
                <li>
                  <span className="text-slate-600 lg:text-base">
                    شبکه های ارتباطی :
                  </span>
                  <span>2G , 3G , 4G , 5G</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div className="lg:w-1/4 w-full mt-4 lg:mt-0 hidden md:block">
          <div className="bg-gray-200 xl:p-5 p-3 rounded-md shadow-md flex flex-col gap-y-6">
            <div className="flex flex-col items-start gap-3 flex-wrap">
              <div className="flex items-center justify-start">
                <span>
                  <svg
                    width="20"
                    height="19"
                    viewBox="0 0 20 19"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <circle cx="12" cy="8" r="8" fill="#E2E2E2" />
                    <path
                      d="M1.75586 11.5449V14.1641C1.75586 16.7833 2.80586 17.8333 5.42503 17.8333H8.56919C11.1884 17.8333 12.2384 16.7833 12.2384 14.1641V11.5449"
                      stroke="#222F5D"
                      strokeWidth="0.875"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                    <path
                      d="M7.00012 11.9993C8.06762 11.9993 8.85512 11.1302 8.75012 10.0627L8.36512 6.16602H5.64095L5.25012 10.0627C5.14512 11.1302 5.93262 11.9993 7.00012 11.9993Z"
                      stroke="#222F5D"
                      strokeWidth="0.875"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                    <path
                      d="M10.681 11.9993C11.8593 11.9993 12.7226 11.0427 12.606 9.87018L12.4426 8.26602C12.2326 6.74935 11.6493 6.16602 10.121 6.16602H8.3418L8.75013 10.2552C8.8493 11.2177 9.71846 11.9993 10.681 11.9993Z"
                      stroke="#222F5D"
                      strokeWidth="0.875"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                    <path
                      d="M3.29005 11.9993C4.25255 11.9993 5.12172 11.2177 5.21505 10.2552L5.34339 8.96602L5.62339 6.16602H3.84422C2.31589 6.16602 1.73255 6.74935 1.52255 8.26602L1.36505 9.87018C1.24839 11.0427 2.11172 11.9993 3.29005 11.9993Z"
                      stroke="#222F5D"
                      strokeWidth="0.875"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                    <path
                      d="M7.00033 14.916C6.02616 14.916 5.54199 15.4002 5.54199 16.3743V17.8327H8.45866V16.3743C8.45866 15.4002 7.97449 14.916 7.00033 14.916Z"
                      stroke="#222F5D"
                      strokeWidth="0.875"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </span>
                <span className="text-sm mr-2">فروشنده : دیجی تایز</span>
              </div>
              <div className="flex items-center justify-start">
                <span>
                  <svg
                    width="21"
                    height="19"
                    viewBox="0 0 21 19"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <circle cx="13" cy="8" r="8" fill="#E2E2E2" />
                    <path
                      d="M7.43053 3.57973L3.89594 4.91139C3.08136 5.21598 2.41553 6.17931 2.41553 7.04348V12.3064C2.41553 13.1422 2.96803 14.2401 3.64094 14.7431L6.68678 17.0168C7.68553 17.7676 9.32886 17.7676 10.3276 17.0168L13.3734 14.7431C14.0464 14.2401 14.5989 13.1422 14.5989 12.3064V7.04348C14.5989 6.17223 13.933 5.20889 13.1184 4.90431L9.58386 3.57973C8.98178 3.36014 8.01844 3.36014 7.43053 3.57973Z"
                      stroke="#222F5D"
                      strokeWidth="1.0625"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </span>
                <span className="text-sm mr-2">گارانتی 18 ماه زرین</span>
              </div>
              <div className="flex items-center justify-start">
                <span>
                  <svg
                    width="20"
                    height="21"
                    viewBox="0 0 20 21"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <circle cx="12" cy="8" r="8" fill="#E2E2E2" />
                    <path
                      d="M10.0002 6.33301V12.9997C10.0002 13.733 9.40016 14.333 8.66683 14.333H1.3335V10.0797C1.82016 10.6597 2.56685 11.0197 3.39351 10.9997C4.06685 10.9863 4.6735 10.7263 5.12683 10.293C5.3335 10.1197 5.50684 9.89967 5.64018 9.65967C5.88018 9.253 6.0135 8.77299 6.00016 8.27299C5.98016 7.49299 5.63351 6.80634 5.09351 6.33301H10.0002Z"
                      stroke="#222F5D"
                      strokeWidth="1.125"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                    <path
                      d="M14.6668 14.333V16.333C14.6668 17.4397 13.7735 18.333 12.6668 18.333H12.0002C12.0002 17.5997 11.4002 16.9997 10.6668 16.9997C9.9335 16.9997 9.3335 17.5997 9.3335 18.333H6.66683C6.66683 17.5997 6.06683 16.9997 5.3335 16.9997C4.60016 16.9997 4.00016 17.5997 4.00016 18.333H3.3335C2.22683 18.333 1.3335 17.4397 1.3335 16.333V14.333H8.66683C9.40016 14.333 10.0002 13.733 10.0002 12.9997V8.33301H11.2268C11.7068 8.33301 12.1468 8.59301 12.3868 9.00635L13.5268 10.9997H12.6668C12.3002 10.9997 12.0002 11.2997 12.0002 11.6663V13.6663C12.0002 14.033 12.3002 14.333 12.6668 14.333H14.6668Z"
                      stroke="#222F5D"
                      strokeWidth="1.125"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                    <path
                      d="M5.33333 19.6667C6.06971 19.6667 6.66667 19.0697 6.66667 18.3333C6.66667 17.597 6.06971 17 5.33333 17C4.59695 17 4 17.597 4 18.3333C4 19.0697 4.59695 19.6667 5.33333 19.6667Z"
                      stroke="#222F5D"
                      strokeWidth="1.125"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                    <path
                      d="M10.6668 19.6667C11.4032 19.6667 12.0002 19.0697 12.0002 18.3333C12.0002 17.597 11.4032 17 10.6668 17C9.93045 17 9.3335 17.597 9.3335 18.3333C9.3335 19.0697 9.93045 19.6667 10.6668 19.6667Z"
                      stroke="#222F5D"
                      strokeWidth="1.125"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                    <path
                      d="M14.6667 13V14.3333H12.6667C12.3 14.3333 12 14.0333 12 13.6667V11.6667C12 11.3 12.3 11 12.6667 11H13.5267L14.6667 13Z"
                      stroke="#222F5D"
                      strokeWidth="1.125"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                    <path
                      d="M6.00033 8.33268C6.00033 9.13268 5.647 9.84602 5.09367 10.3327C4.62034 10.746 4.00699 10.9993 3.33366 10.9993C1.86033 10.9993 0.666992 9.80602 0.666992 8.33268C0.666992 7.49268 1.05366 6.73935 1.66699 6.25269C2.12699 5.88602 2.70699 5.66602 3.33366 5.66602C4.80699 5.66602 6.00033 6.85935 6.00033 8.33268Z"
                      stroke="#222F5D"
                      strokeWidth="1.125"
                      strokeMiterlimit="10"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                    <path
                      d="M3.50033 7.49902V8.49902L2.66699 8.99902"
                      stroke="#222F5D"
                      strokeWidth="1.125"
                      strokeMiterlimit="10"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </span>
                <span className="text-sm mr-2">ارسال توسط : انبار تهران</span>
              </div>
            </div>
            <div>
              <p className="text-red-500 text-lg text-left">{SeparateNumbers(product.price)} تومان</p>
            </div>
            <div>
              <button
                onClick={() => dispatch(addProduct(product))}
                className="bg-red-400 lg:text-md text-sm rounded-md shadow-md text-white py-3 px-2 w-full"
              >
                افزودن به سبد خرید
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default SingleProductPageComp;
