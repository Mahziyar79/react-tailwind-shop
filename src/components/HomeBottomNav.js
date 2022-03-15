import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const HomeBottomNav = () => {
  const [selectedItem, setSelectedItem] = useState(0);
  const pageUrl = window.location.pathname;

  useEffect(() => {
    if (pageUrl === "/") {
      setSelectedItem(0);
    } else if (pageUrl === "/products") {
      setSelectedItem(1);
    } else if (pageUrl === "/cart") {
      setSelectedItem(2);
    } else if (pageUrl === "/signin") {
      setSelectedItem(3);
    }
  }, []);

  return (
    <div className="md:hidden fixed bottom-0 left-0 right-0 w-full">
      <div className="bg-white">
        <ul className="flex items-center justify-around py-2">
          <li onClick={() => setSelectedItem(0)}>
            <Link to={"/"} className="p-2 flex gap-x-2 items-center">
              <span>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-7 w-7"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth="2"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6"
                  />
                </svg>
              </span>
              {selectedItem === 0 && <span>خانه</span>}
            </Link>
          </li>
          <li onClick={() => setSelectedItem(1)}>
            <Link to={"/products"} className="flex gap-x-2 items-center p-2">
              <span>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-7 w-7"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth="2"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M4 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2V6zM14 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2V6zM4 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2v-2zM14 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2v-2z"
                  />
                </svg>
              </span>
              {selectedItem === 1 && <span>دسته بندی</span>}
            </Link>
          </li>
          <li onClick={() => setSelectedItem(2)}>
            <Link to={"/cart"} className="flex gap-x-2 items-center p-2">
              <span>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-7 w-7"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth="2"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z"
                  />
                </svg>
              </span>
              {selectedItem === 2 && <span>سبد خرید</span>}
            </Link>
          </li>
          <li onClick={() => setSelectedItem(3)}>
            <Link to={"/signin"} className="flex gap-x-2 items-center p-2">
              <span>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-7 w-7"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth="2"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M11 16l-4-4m0 0l4-4m-4 4h14m-5 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h7a3 3 0 013 3v1"
                  />
                </svg>
              </span>
              {selectedItem === 3 && <span>ورود</span>}
            </Link>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default HomeBottomNav;
