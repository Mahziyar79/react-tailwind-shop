import { useState } from "react";
import Footer from "../components/Footer";
import Header from "../components/Header";

function Layout({ children }) {
  const [darkToggle, setDarkToggle] = useState(false);

  return (
    <div className={` ${darkToggle && "dark"}`}>
      <div className="bg-gray-100 dark:bg-gray-800">
        <Header darkToggle={darkToggle} setDarkToggle={setDarkToggle} />
        {children}
        <Footer />
      </div>
    </div>
  );
}

export default Layout;
