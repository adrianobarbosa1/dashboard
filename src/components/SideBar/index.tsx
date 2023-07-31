"use client";
import { useStateContext } from "@/contexts/ContextProvider";
import Link from "next/link";

import { MdOutlineCancel } from "react-icons/md";
import { SiShopware } from "react-icons/si";
import { links } from "./data.sidebar";

import { usePathname } from "next/navigation";

const SideBar = () => {
  const { activeMenu, setActiveMenu, screenSize, currentColor } =
    useStateContext();
  const pathname = usePathname();

  const handleCloseSideBar = () => {
    if (
      activeMenu !== undefined &&
      screenSize !== undefined &&
      screenSize <= 900
    ) {
      setActiveMenu(false);
    }
  };

  return (
    <div className=" ml-3 h-screen md:overflow-hidden overflow-auto md:hover:overflow-auto pb-10">
      {activeMenu && (
        <>
          <div className="flex justify-between items-center">
            <Link
              href="/"
              onClick={handleCloseSideBar}
              className="items-center gap-3 ml-3 mt-4 flex text-xl font-extrabold tracking-tight dark:text-white text-slate-900"
            >
              <SiShopware /> <span>Logo</span>
            </Link>

            <button
              type="button"
              onClick={() => setActiveMenu(!activeMenu)}
              className="text-xl rounded-full p-3 hover:bg-light-gray mt-4 block md:hidden"
            >
              <MdOutlineCancel />
            </button>
          </div>

          <div className="mt-10">
            {links.map((item) => (
              <div key={item.title}>
                <p className="text-gray-400 dark:text-gray-400 m-3 mt-4 uppercase">
                  {item.title}
                </p>
                <ul>
                  {item.links.map((link) => (
                    <Link
                      href={link.href}
                      key={link.name}
                      onClick={handleCloseSideBar}
                      style={{
                        backgroundColor:
                          pathname == link.href ? currentColor : "",
                      }}
                      className={`flex items-center gap-5 pl-4 pt-3 pb-2.5 rounded-lg m-2 
                      ${
                        pathname == link.href
                          ? "text-white  text-md"
                          : "text-md text-gray-700 dark:text-gray-200 dark:hover:text-black hover:bg-light-gray"
                      }
                      `}
                    >
                      {link.icon}
                      <span className="capitalize">{link.name}</span>
                    </Link>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </>
      )}
    </div>
  );
};

export default SideBar;
