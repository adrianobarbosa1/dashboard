"use client";
import { useStateContext } from "@/contexts/ContextProvider";
import { useEffect } from "react";
import { FiSettings } from "react-icons/fi";
import Navbar from "../Navbar";
import SideBar from "../SideBar";
import ThemeSettings from "../ThemeSettings";

type ActiveSidebarProps = {
  children: React.ReactNode;
};

const ActiveSidebar = ({ children }: ActiveSidebarProps) => {
  const {
    activeMenu,
    themeSettings,
    setThemeSettings,
    currentColor,
    currentMode,
    setCurrentColor,
    setCurrentMode,
  } = useStateContext();

  useEffect(() => {
    const currentThemeColor = localStorage.getItem("colorMode");
    const currentThemeMode = localStorage.getItem("themeMode");
    if (currentThemeColor && currentThemeMode) {
      setCurrentColor(currentThemeColor);
      setCurrentMode(currentThemeMode);
    }
  }, []);

  return (
    <div className={currentMode === "Dark" ? "Dark" : ""}>
      <div className="flex relative dark:bg-mainDarkBg">
        <div className="fixed right-4 bottom-4" style={{ zIndex: "1000" }}>
          <button
            type="button"
            onClick={() => setThemeSettings(true)}
            style={{ background: currentColor, borderRadius: "50%" }}
            className="text-3xl text-white p-3 hover:drop-shadow-xl hover:bg-lightGray"
          >
            <FiSettings />
          </button>
        </div>
        {activeMenu ? (
          <div className="w-72 fixed sidebar bg-white dark:bg-[#33373E] transition-all duration-300">
            <SideBar />
          </div>
        ) : (
          <div className="w-0 dark:bg-[#33373E] transition-all duration-300">
            <SideBar />
          </div>
        )}

        {themeSettings && <ThemeSettings />}

        <div
          className={
            activeMenu
              ? "min-h-screen md:ml-72 w-full  "
              : "w-full min-h-screen flex-2 "
          }
        >
          <div className="fixed md:static bg-lightBg dark:bg-darkBg navbar w-full ">
            <Navbar />
          </div>

          <div>
            {/* {PAGE} */}
            {children}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ActiveSidebar;
