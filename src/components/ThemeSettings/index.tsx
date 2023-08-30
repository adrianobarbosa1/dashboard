import { useStateContext } from "@/contexts/ContextProvider";
import { useTheme } from "next-themes";
import { BsCheck } from "react-icons/bs";
import { MdOutlineCancel } from "react-icons/md";
import Tooltip from "../Tooltip";
import { themeColors } from "./data.themeColors";

const ThemeSettings = () => {
  const { setColor, setMode, currentMode, currentColor, setThemeSettings } =
    useStateContext();
  const { theme, setTheme } = useTheme();

  return (
    <div className="bg-hal w-screen fixed nav-item top-0 right-0 transition-all duration-300">
      <div className="float-right h-screen dark:text-gray-200  bg-white dark:bg-[#33373E] w-400">
        <div className="flex justify-between items-center p-4 ml-4">
          <p className="font-semibold text-lg">Settings</p>
          <button
            type="button"
            onClick={() => setThemeSettings(false)}
            style={{ color: "rgb(153, 171, 180)", borderRadius: "50%" }}
            className="text-2xl p-3 hover:drop-shadow-xl hover:bg-lightGray"
          >
            <MdOutlineCancel />
          </button>
        </div>

        <div className="flex-col border-t-1 border-color p-4 ml-4">
          <p className="font-semibold text-xl ">Theme Option</p>

          <div className="mt-4">
            <input
              type="radio"
              id="light"
              name="theme"
              value="light"
              className="cursor-pointer"
              onClick={() => setTheme("light")}
            />
            <label htmlFor="light" className="ml-2 text-md cursor-pointer">
              Light
            </label>
          </div>
          <div className="mt-2">
            <input
              type="radio"
              id="dark"
              name="theme"
              value="dark"
              className="cursor-pointer"
              onClick={() => setTheme("dark")}
            />
            <label htmlFor="dark" className="ml-2 text-md cursor-pointer">
              Dark
            </label>
          </div>
          <div className="mt-2">
            <input
              type="radio"
              id="system"
              name="theme"
              value="system"
              className="cursor-pointer"
              onClick={() => setTheme("system")}
            />
            <label htmlFor="dark" className="ml-2 text-md cursor-pointer">
              Sistema
            </label>
          </div>
        </div>

        <div className="p-4 border-t-1 border-color ml-4">
          <p className="font-semibold text-xl ">Theme Colors</p>
          <div className="flex gap-3">
            {themeColors.map((item, index) => (
              <Tooltip key={index} content={item.name}>
                <div
                  className="relative mt-2 cursor-pointer flex gap-5 items-center"
                  key={item.name}
                >
                  <button
                    type="button"
                    className="h-10 w-10 rounded-full cursor-pointer"
                    style={{ backgroundColor: item.color }}
                    onClick={() => setColor(item.color)}
                  >
                    <BsCheck
                      className={`ml-2 text-2xl text-white ${
                        item.color === currentColor ? "block" : "hidden"
                      }`}
                    />
                  </button>
                </div>
              </Tooltip>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ThemeSettings;
