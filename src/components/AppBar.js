import React from "react";
import { Link } from "react-router-dom";
import logo from "../assets/images/Logo.png";
import { useSelector } from "react-redux";
import toggleOn from "../assets/images/toggle-on.png";
import toggleOff from "../assets/images/toggle-off.png";
import { useDarkMode,useDarkModeActions } from "../Context/DarkProvider";

function AppBar({ title }) {
  const productData = useSelector((state) => state.productReducer.cart);

  const darkMode = useDarkMode();
  const darkModeDispatch = useDarkModeActions();


  return (
    <>
      {/* app bar */}
      <div className="md:hidden p-4 flex items-center justify-between">
        <Link to={"/"}>
          <div>
            <img src={logo} alt="Logo"></img>
          </div>
        </Link>
        <div className="font-bold text-slate-800 dark:text-white text-lg">
          {title}
        </div>
        <span onClick={() => darkModeDispatch(!darkMode)}>
          {darkMode ? (
            <img
              className="w-10 ml-4 cursor-pointer"
              src={toggleOn}
              alt="toggleon"
            />
          ) : (
            <img
              className="w-10 ml-4 cursor-pointer"
              src={toggleOff}
              alt="toggleoff"
            />
          )}
        </span>
        <Link to={"/cart"}>
          <div className="bg-white p-2 rounded-md shadow-lg relative">
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
                d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z"
              />
            </svg>
            <span className="bg-red-500 w-4 h-4 rounded-full absolute -top-2 -right-1 flex items-center justify-center text-white p-2 text-xs">
              {productData.length}
            </span>
          </div>
        </Link>
      </div>
    </>
  );
}

export default AppBar;
