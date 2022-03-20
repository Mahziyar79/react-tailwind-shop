import { createContext, useContext, useEffect, useState } from "react";

const DarkMode = createContext();
const DarkModeDispatcher = createContext();

const DarkProvider = ({ children }) => {

  const [darkMode, setDarkMode] = useState(false);

  useEffect(() => {
    const userData = JSON.parse(localStorage.getItem("dark")) || false;
    setDarkMode(userData);
  }, []);
  
  useEffect(() => {
    localStorage.setItem("dark", JSON.stringify(darkMode));
  }, [darkMode]);

  return (
    <DarkMode.Provider value={darkMode}>
      <DarkModeDispatcher.Provider value={setDarkMode}>
        {children}
      </DarkModeDispatcher.Provider>
    </DarkMode.Provider>
  );
};

export default DarkProvider;

export const useDarkMode = () => useContext(DarkMode);
export const useDarkModeActions = () => useContext(DarkModeDispatcher);
