"use client";
import { useStateContext } from "@/contexts/ContextProvider";
import Navbar from "../Navbar";
import SideBar from "../SideBar";

type ActiveSidebarProps = {
  children: React.ReactNode;
};

const ActiveSidebar = ({ children }: ActiveSidebarProps) => {
  const { activeMenu } = useStateContext();
  return (
    <>
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
        <div className="fixed md:static bg-main-bg dark:bg-main-dark-bg navbar w-full">
          <Navbar />
        </div>
        {/* {PAGE} */}
        {children}
      </div>
    </>
  );
};

export default ActiveSidebar;
