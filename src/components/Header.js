import React from "react";
import { Link } from "react-router-dom";
import logo from "../assets/images/Logo.png";

function Header() {
  return (
    <>
      {/* header */}
      <div className="hidden md:flex items-center bg-white shadow-md sticky top-0 z-20">
        <div className="2xl:container 2xl:max-w-screen-2xl 2xl:mx-auto h-25 w-full p-3 flex items-center justify-between">
          <div className="flex gap-x-3 items-center">
            <Link to={"/"}>
              <img src={logo} alt="Logo"></img>
            </Link>
            <nav>
              <ul className="flex items-center md:gap-x-3 lg:gap-x-6">
                <li>
                  <img src="/assets/images/Logo.png" alt="" />
                </li>
                <li className="hover:bg-slate-100 py-2 lg:px-3 md:px-1 rounded-md">
                  <Link to={"/"}>خانه</Link>
                </li>
                <li className="hover:bg-slate-100 py-2 lg:px-3 md:px-1 rounded-md">
                  <Link to={"/"}>فروشگاه</Link>
                </li>
                <li className="hover:bg-slate-100 py-2 lg:px-3 md:px-1 rounded-md">
                  <Link to={"/about"}>ارتباط با ما</Link>
                </li>
                <li className="hover:bg-slate-100 py-2 lg:px-3 md:px-1 rounded-md">
                  <Link to={"/contact"}>تماس با ما</Link>
                </li>
              </ul>
            </nav>
          </div>
          <div className="max-w-lg flex items-center">
            <Link to={"/cart"}>
              <div className="text-gray-600 relative cursor-pointer">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth="2"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z"
                  />
                </svg>
                <span className="bg-red-500 w-4 h-4 rounded-full absolute -top-2 -right-1 flex items-center justify-center text-white p-2 text-xs">
                  1
                </span>
              </div>
            </Link>
            <div className="relative lg:w-96 lg:flex-1 mr-4">
              <span className="absolute right-1 top-2 text-gray-400">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth="2"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                  />
                </svg>
              </span>
              <input
                placeholder="جستجو نام محصول ، نام برند و..."
                type="text"
                className="focus:outline-none shadow-smtext-sm pr-12 bg-stone-100 p-2 rounded-md w-full"
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Header;