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
import { useStateContext } from "@/contexts/ContextProvider";
import Image from "next/image";
import { useEffect } from "react";
import { AiOutlineMenu, AiOutlineSetting } from "react-icons/ai";
import { MdKeyboardArrowDown, MdPermIdentity } from "react-icons/md";
import { RiLogoutCircleLine } from "react-icons/ri";
import NavButton from "./NavButton";

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

  return (
    <div className=" flex justify-between p-2 md:ml-6 md:mr-6 relative">
      <NavButton
        title="Menu"
        customFunc={handleActiveMenu}
        color={currentColor}
        icon={<AiOutlineMenu />}
      />

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
            <div
              // onClick={() => handleClick("userProfile")}
              className="flex items-center gap-2 cursor-pointer p-1 hover:bg-light-gray rounded-lg"
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
