import {
  AiOutlineAreaChart,
  AiOutlineBarChart,
  AiOutlineCalendar,
  AiOutlineShoppingCart,
  AiOutlineStock,
} from "react-icons/ai";
import { BiColorFill } from "react-icons/bi";
import { BsBarChart, BsKanban } from "react-icons/bs";
import { FiEdit, FiPieChart, FiShoppingBag } from "react-icons/fi";
import { GiLouvrePyramid } from "react-icons/gi";
import { IoMdContacts } from "react-icons/io";
import { RiContactsLine, RiStockLine } from "react-icons/ri";

export const links = [
  {
    title: "Dashboard",
    links: [
      {
        name: "ecommerce",
        href: "/ecommerce",
        icon: <FiShoppingBag />,
      },
    ],
  },

  {
    title: "Pages",
    links: [
      {
        name: "orders",
        href: "/orders",
        icon: <AiOutlineShoppingCart />,
      },
      {
        name: "employees",
        href: "/employees",
        icon: <IoMdContacts />,
      },
      {
        name: "customers",
        href: "/customers",
        icon: <RiContactsLine />,
      },
    ],
  },
  {
    title: "Apps",
    links: [
      {
        name: "calendar",
        href: "/calendar",
        icon: <AiOutlineCalendar />,
      },
      {
        name: "kanban",
        href: "/kanban",
        icon: <BsKanban />,
      },
      {
        name: "editor",
        href: "/editor",
        icon: <FiEdit />,
      },
      {
        name: "color-picker",
        href: "/color-picker",
        icon: <BiColorFill />,
      },
    ],
  },
  {
    title: "Charts",
    links: [
      {
        name: "line",
        href: "/line",
        icon: <AiOutlineStock />,
      },
      {
        name: "area",
        href: "/area",
        icon: <AiOutlineAreaChart />,
      },

      {
        name: "bar",
        href: "/bar",
        icon: <AiOutlineBarChart />,
      },
      {
        name: "pie",
        href: "/pie",
        icon: <FiPieChart />,
      },
      {
        name: "financial",
        href: "/financial",
        icon: <RiStockLine />,
      },
      {
        name: "color-mapping",
        href: "/color-mapping",
        icon: <BsBarChart />,
      },
      {
        name: "pyramid",
        href: "/pyramid",
        icon: <GiLouvrePyramid />,
      },
      {
        name: "stacked",
        href: "/stacked",
        icon: <AiOutlineBarChart />,
      },
    ],
  },
];
