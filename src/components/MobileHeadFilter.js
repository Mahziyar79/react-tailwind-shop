import React from "react";

function MobileHeadFilter() {
  return (
    <>
      {/* filter sort */}
      <div className="md:hidden px-4 flex items-center justify-between gap-x-2 mb-8">
        <div className="bg-white flex items-center justify-evenly p-2 rounded-md w-full cursor-pointer shadow-md">
          <span>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5 stroke-orange-600"
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
          </span>
          <span className="text-sm text-slate-800">محبوب ترین</span>
        </div>
        <div className="bg-white flex items-center justify-evenly p-2 rounded-md w-full cursor-pointer shadow-md">
          <span>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5 stroke-gray-400"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth="2"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M3 4a1 1 0 011-1h16a1 1 0 011 1v2.586a1 1 0 01-.293.707l-6.414 6.414a1 1 0 00-.293.707V17l-4 4v-6.586a1 1 0 00-.293-.707L3.293 7.293A1 1 0 013 6.586V4z"
              />
            </svg>
          </span>
          <span className="text-sm text-slate-800">فیلتر : برند اپل</span>
        </div>
      </div>
    </>
  );
}

export default MobileHeadFilter;
