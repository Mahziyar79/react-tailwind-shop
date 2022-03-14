import React from "react";
import cartImg from "../assets/images/apple-watch-7.png";
import {
  increamentProduct,
  decreamentProduct,
  deleteProduct,
} from "../redux/addProducts/productSlice";
import { useDispatch } from "react-redux";

function CartItem({ product }) {
  const dispatch = useDispatch();
  

  return (
    <div className="bg-white p-3 flex gap-x-3 rounded-md">
      <div className="w-20 flex items-center">
        <img src={cartImg} alt="" />
      </div>
      <div className="flex flex-col justify-between w-full gap-y-5">
        <div className="flex items-center justify-between">
          <p>{product.title}</p>
          <button
            onClick={() => {
              dispatch(deleteProduct(product.id));
            }}
            className="text-orange-400 cursor-pointer"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth="2"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          </button>
        </div>
        <div className="flex items-center justify-between">
          <p className="text-orange-700">{product.price}</p>
          <div className="flex items-center gap-x-2">
            <span
              onClick={() => {
                dispatch(increamentProduct(product.id));
              }}
              className="bg-gray-200 cursor-pointer w-6 h-6 rounded-full flex items-center justify-center"
            >
              +
            </span>
            <span className="border-solid rounded-sm border-2 border-orange-700 px-2 py-1 text-slate-800">
              {product.quantity}
            </span>
            <span
              onClick={() => {
                dispatch(decreamentProduct(product.id));
              }}
              className="bg-orange-200 cursor-pointer text-orange-400 text-lg w-6 h-6 rounded-full flex items-center justify-center"
            >
              -
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CartItem;
