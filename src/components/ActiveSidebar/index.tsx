"use client";
import { useStateContext } from "@/contexts/ContextProvider";
import { FiSettings } from "react-icons/fi";
import Navbar from "../Navbar";
import SideBar from "../SideBar";

type ActiveSidebarProps = {
  children: React.ReactNode;
};

const ActiveSidebar = ({ children }: ActiveSidebarProps) => {
  const { activeMenu } = useStateContext();
  return (
    <div className="flex relative dark:bg-main-dark-bg">
      <div className="fixed right-4 bottom-4" style={{ zIndex: "1000" }}>
        <button
          type="button"
          // onClick={() => setThemeSettings(true)}
          // style={{ background: currentColor, borderRadius: "50%" }}
          className="text-3xl text-white p-3 hover:drop-shadow-xl hover:bg-light-gray"
        >
          <FiSettings />
        </button>
      </div>
      {activeMenu ? (
        <div className="w-72 fixed sidebar dark:bg-secondary-dark-bg bg-white">
          <SideBar />
        </div>
      ) : (
        <div className="w-0 dark:bg-secondary-dark-bg">
          <SideBar />
        </div>
      )}
      <div
        className={
          activeMenu
            ? "dark:bg-main-dark-bg  bg-main-bg min-h-screen md:ml-72 w-full  "
            : "bg-main-bg dark:bg-main-dark-bg  w-full min-h-screen flex-2 "
        }
      >
        <div className="fixed md:static bg-main-bg dark:bg-main-dark-bg navbar w-full ">
          <Navbar />
        </div>
        {/* {PAGE} */}
        {children}
      </div>
    </div>
  );
};

export default ActiveSidebar;
