import React from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import SeparateNumbers from "../common/SeparateNumbers";
import AppBar from "../components/AppBar";
import CartItem from "../components/CartItem";
import HomeBottomNav from "../components/HomeBottomNav";

function Cart() {
  const products = useSelector((state) => state.productReducer.cart);

  const reducePrice = () => {
    const reducePriceNumb = products.reduce(
      (previousValue, currentValue) =>
        parseInt(previousValue) +
        parseInt(currentValue.price * currentValue.quantity),
      0
    );
    return reducePriceNumb;
  };

  return (
    <>
      <AppBar title="سبد خرید" />
      {/* cart */}
      <div className="2xl:container 2xl:max-w-screen-2xl 2xl:mx-auto p-3 md:mb-10">
        <div className="flex flex-col md:flex-row justify-between md:px-5 lg:px-10">
          <div
            className={`flex flex-col gap-y-4  md:mt-4 ${
              products.length ? "md:w-[60%]" : "md:w-[100%] my-20"
            }`}
          >
            {/* navigation */}
            <div className="justify-between items-center hidden md:flex">
              <p>سبد خرید</p>
              <Link to={"/"} className="text-red-500">
                بازگشت به فروشگاه
              </Link>
            </div>
            {products.length ? (
              products.map((product) => (
                <CartItem key={product.id} product={product} />
              ))
            ) : (
              <div className="flex flex-col items-center md:mt-20 my-5">
                <h2 className="md:text-2xl mb-5 text-xl">
                  دلت میاد سبد خریدت خالی باشه؟
                </h2>
                <Link to={"/"}>
                  <button className="bg-red-400 w-32 rounded-md shadow-md text-white p-2">
                    فروشگاه
                  </button>
                </Link>
              </div>
            )}
          </div>

          {products.length ? (
            <div className="mt-4 md:w-[45%] md:mr-5 lg:mr-0 lg:w-[35%]">
              <div className="bg-white rounded-md p-3 md:p-5 flex flex-col gap-y-3">
                <div className="flex items-center justify-between">
                  <span>مجموع قیمت : </span>
                  <span className="text-orange-700">
                    {SeparateNumbers(reducePrice())} تومان
                  </span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-sm">کد تخفیف دارید؟</span>
                  <div className="relative">
                    <input
                      className="border-solid border-2 w-44 rounded-sm p-1 focus:outline-none"
                      type="text"
                      placeholder="123ABC"
                    />
                    <button className="bg-red-400 rounded-tl-md rounded-bl-md shadow-md text-white py-1 px-4 absolute top-0 bottom-0 left-0">
                      تایید
                    </button>
                  </div>
                </div>
                <div className="flex items-center justify-between">
                  <span>تخفیف</span>
                  <span className="text-orange-700">500,000 تومان</span>
                </div>
                <div className="flex items-center justify-between mt-5">
                  <span>قیمت نهایی</span>
                  <span className="text-orange-700">
                    {SeparateNumbers(reducePrice() - 500000)} تومان
                  </span>
                </div>
              </div>
              {/* buy process */}
              <div className="md:block hidden mt-3">
                <button className="bg-red-400 w-full rounded-md border-2 border-red-400 text-white p-2 hover:bg-white hover:text-red-400 transition-all duration-200">
                  ادامه فرآیند خرید
                </button>
              </div>
              <div className="md:block hidden mt-3">
                <button className="text-red-400 w-full rounded-md border-2 border-red-400 hover:bg-red-400 hover:text-white transition-all duration-200 bg-white p-2">
                  انصراف از خرید
                </button>
              </div>
            </div>
          ) : (
            ""
          )}
        </div>
      </div>

      {/* buy process mobile */}
      {products.length ? (
        <div className="p-2 md:hidden">
          <button className="bg-red-400 w-full rounded-md shadow-md text-white p-2 mb-20">
            ادامه فرآیند خرید
          </button>
        </div>
      ) : (
        ""
      )}

      <HomeBottomNav />
    </>
  );
}

export default Cart;
