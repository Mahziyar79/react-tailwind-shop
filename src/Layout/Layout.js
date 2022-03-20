import { useEffect, useState } from "react";
import Footer from "../components/Footer";
import Header from "../components/Header";
import { useDarkMode, useDarkModeActions } from "../Context/DarkProvider";

function Layout({ children }) {
  const darkMode = useDarkMode();
  const darkModeDispatch = useDarkModeActions();




  return (
    <div className={`${darkMode ? "dark" : ""}`}>
      <div className="bg-gray-100 dark:bg-slate-800 smmax:min-h-screen">
        <Header />
        {children}
        <Footer />
      </div>
    </div>
  );
}

export default Layout;
