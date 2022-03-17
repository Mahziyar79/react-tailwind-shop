import React from "react";
import { Link } from "react-router-dom";
import SeparateNumbers from "../common/SeparateNumbers";
function SingleProduct({ product }) {
  const queryUrl = product.title.split(" ").join("-");

  return (
    <>
      {/* single product */}
      <div className="bg-white rounded-md shadow-md p-2 relative">
        {/* intrested */}
        <div className="absolute top-1 right-1 bg-gray-300 p-2 rounded-full">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-4 w-4 fill-orange-400"
            viewBox="0 0 20 20"
            fill="currentColor"
          >
            <path
              fillRule="evenodd"
              d="M3.172 5.172a4 4 0 015.656 0L10 6.343l1.172-1.171a4 4 0 115.656 5.656L10 17.657l-6.828-6.829a4 4 0 010-5.656z"
              clipRule="evenodd"
            />
          </svg>
        </div>
        {/* product image */}
        <div className="bg-gray-100 rounded-md">
          <img
            className="w-full h-[250px] object-contain"
            src={product.image}
            alt="watch"
          />
        </div>
        {/* color section */}
        <div className="flex items-center justify-between my-2">
          <p className="text-gray-400 text-sm">{product.category}</p>
          <div className="flex">
            {product.colors.map((color, index) => (
              <div
                style={{ backgroundColor: color }}
                key={index}
                className={`text-white w-6 h-6 rounded-full shadow-md border-2 border-white flex items-center justify-center -ml-1`}
              ></div>
            ))}
          </div>
        </div>
        {/* description */}
        <div>
          <div className="md:flex-1">
            <p className="text-black text-bold text-sm my-2">{product.title}</p>
          </div>
          <div className="md:flex-1">
            <p className="text-bold text-sm text-left text-red-600">
              {SeparateNumbers(product.price)} تومان
            </p>
          </div>
        </div>
        <hr className="mt-2" />
        {/* add to cart */}
        <div className="text-center mt-1 py-1 text-red-500 cursor-pointer">
          <Link to={`/product/${queryUrl}`} state={{ product }}>
            <button>مشاهده و سفارش</button>
          </Link>
        </div>
      </div>
    </>
  );
}

export default SingleProduct;
