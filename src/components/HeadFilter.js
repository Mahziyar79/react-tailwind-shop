import React from "react";

function HeadFilter() {
  return (
    <>
      <div className="hidden md:block xl:col-span-10 md:col-span-9 ml-4 mt-4">
        <div className="bg-white px-4 flex items-center gap-x-4 text-gray-400">
          <div className="bg-orange-200 p-2 rounded-md flex items-center justify-center">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6 stroke-orange-600"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth="2"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M3 4h13M3 8h9m-9 4h9m5-4v12m0 0l-4-4m4 4l4-4"
              />
            </svg>
          </div>
          <button className="py-4 relative text-black">
            <span>محبوب ترین</span>
            <span className="bg-orange-600 w-2 h-2 absolute top-1 left-0 rounded-full"></span>
          </button>
          <button className="py-4 relative">
            <span>گران ترین</span>
          </button>
          <button className="py-4 relative">
            <span>ارزان ترین</span>
          </button>
          <button className="py-4 relative">
            <span>پرفروش ترین</span>
          </button>
        </div>
      </div>
    </>
  );
}

export default HeadFilter;
