import React from "react";
import logo from "../assets/images/Logo.png";

function AppBar() {
  return (
    <>
      {/* app bar */}
      <div className="md:hidden p-4 flex items-center justify-between">
        <div className="">
          <img src={logo} alt="Logo"></img>
        </div>
        <div className="font-bold text-slate-800 text-lg">ساعت هوشمند</div>
        <div className="bg-white p-2 rounded-md shadow-lg relative">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            class="h-5 w-5"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            stroke-width="2"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z"
            />
          </svg>
          <span className="bg-red-500 w-4 h-4 rounded-full absolute -top-2 -right-1 flex items-center justify-center text-white p-2 text-xs">1</span>
        </div>
      </div>
    </>
  );
}

export default AppBar;
