"use client";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { HamburgerMenuIcon, MoonIcon, SunIcon } from "@radix-ui/react-icons";

import { Button } from "@/components/ui/button";

import { useStateContext } from "@/contexts/ContextProvider";
import { useTheme } from "next-themes";
import Image from "next/image";
import { useEffect } from "react";
import { AiOutlineSetting } from "react-icons/ai";
import { MdKeyboardArrowDown, MdPermIdentity } from "react-icons/md";
import { RiLogoutCircleLine } from "react-icons/ri";

const Navbar = () => {
  const {
    activeMenu,
    setActiveMenu,
    handleClick,
    isClicked,
    setScreenSize,
    screenSize,
    currentColor,
  } = useStateContext();
  const { theme, setTheme } = useTheme();

  useEffect(() => {
    const handleResize = () => setScreenSize(window.innerWidth);
    window.addEventListener("resize", handleResize);
    handleResize();
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  useEffect(() => {
    if (screenSize !== undefined && screenSize <= 900) {
      setActiveMenu(false);
    } else {
      setActiveMenu(true);
    }
  }, [screenSize]);

  const handleActiveMenu = () => setActiveMenu(!activeMenu);
  console.log(currentColor);
  return (
    <div className=" flex align-middle justify-between p-2 md:ml-6 md:mr-6 relative">
      <Button
        variant="outline"
        size="icon"
        className="mt-3 mr-4"
        onClick={handleActiveMenu}
      >
        <HamburgerMenuIcon className={`fill-[${currentColor}]`} />
        {/* <SunIcon className="h-[1.2rem] w-[1.2rem] rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0" />
        <MoonIcon className="absolute h-[1.2rem] w-[1.2rem] rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100" /> */}
        <span className="sr-only">Toggle theme</span>
      </Button>

      <div className="flex">
        {/* <NavButton
          title="Cart"
          customFunc={() => handleClick("cart")}
          color={currentColor}
          icon={<FiShoppingCart />}
        />
        <NavButton
          title="Chat"
          dotColor="#03c9D7"
          customFunc={() => handleClick("Chat")}
          color={currentColor}
          icon={<BsChatLeft />}
        />
        <NavButton
          title="Notifications"
          dotColor="#03c9D7"
          customFunc={() => handleClick("notifications")}
          color={currentColor}
          icon={<RiNotification3Line />}
        /> */}

        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button variant="outline" size="icon" className="mt-3 mr-4">
              <SunIcon className="h-[1.2rem] w-[1.2rem] rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0" />
              <MoonIcon className="absolute h-[1.2rem] w-[1.2rem] rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100" />
              <span className="sr-only">Toggle theme</span>
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent align="end" className="mr-3">
            <DropdownMenuItem onClick={() => setTheme("light")}>
              Light
            </DropdownMenuItem>
            <DropdownMenuItem onClick={() => setTheme("dark")}>
              Dark
            </DropdownMenuItem>
            <DropdownMenuItem onClick={() => setTheme("system")}>
              System
            </DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>

        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <div
              // onClick={() => handleClick("userProfile")}
              className="flex items-center gap-2 cursor-pointer p-1 hover:bg-lightGray dark:hover:bg-[#1e293b] rounded-lg"
            >
              <Image
                src="/avatar.jpg"
                width={50}
                height={50}
                alt="user-profile"
                className="rounded-full"
              />
              <p className="flex flex-col">
                <span className="text-gray-400 font-bold ml-1 text-14">
                  Adriano Barbosa dos Santos
                </span>
                <span className="text-green-400 font-bold ml-1 text-xs">
                  conectado
                </span>
              </p>
              <MdKeyboardArrowDown className="text-gray-400 text-14" />
            </div>
          </DropdownMenuTrigger>
          <DropdownMenuContent className="w-56" align="end" forceMount>
            <DropdownMenuLabel className="font-normal">
              <div className="flex flex-col space-y-1">
                <p className="text-xs leading-none text-muted-foreground">
                  adriano.barbosa100@gmail.com
                </p>
                <p className="text-xs leading-none text-muted-foreground">
                  <span>Matricula: </span>27174
                </p>
                <p className="text-xs leading-none text-muted-foreground">
                  admin
                </p>
              </div>
            </DropdownMenuLabel>
            <DropdownMenuSeparator />
            <DropdownMenuGroup>
              <DropdownMenuItem>
                <MdPermIdentity className="mr-2 h-4 w-4" />
                <span>Perfil</span>
              </DropdownMenuItem>

              <DropdownMenuItem>
                <AiOutlineSetting className="mr-2 h-4 w-4" />
                <span>Configuração</span>
              </DropdownMenuItem>
            </DropdownMenuGroup>
            <DropdownMenuSeparator />

            <DropdownMenuItem>
              <RiLogoutCircleLine className="mr-2 h-4 w-4" />
              <span>Sair</span>
            </DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      </div>
    </div>
  );
};

export default Navbar;
