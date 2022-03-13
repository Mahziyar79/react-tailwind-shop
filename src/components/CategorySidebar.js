import React from "react";
import { Link } from "react-router-dom";

function CategorySidebar() {
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
        </div>
      </div>
    </>
  );
}

export default CategorySidebar;
