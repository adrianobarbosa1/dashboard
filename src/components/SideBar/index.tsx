import { links } from "@/data/data/dummy";
import Link from "next/link";
import { MdOutlineCancel } from "react-icons/md";
import { SiShopware } from "react-icons/si";

const SideBar = () => {
  const activeMenu = true;
  return (
    <div className="ml-3 h-screen md:overflow-hidden overflow-auto md:hover:overflow-auto pb-10">
      {activeMenu && (
        <>
          <div className=" flex justify-between items-center">
            <Link
              href="/"
              className="items-center gap-3 ml-3 mt-4 flex text-xl font-extrabold tracking-tighter dark:text-white text-slate-900"
            >
              <SiShopware /> <span>Shoppy</span>
            </Link>

            <button
              type="button"
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
              </div>
            ))}
          </div>
        </>
      )}
    </div>
  );
};

export default SideBar;
