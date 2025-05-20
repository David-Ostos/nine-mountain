import {playfair} from "@/config/fonts";
import Link from "next/link";
import { IoCartOutline, IoSearchOutline } from "react-icons/io5";

interface MenuCategory{
  name: string;
  href: string;
}

interface MenuItems{
  name: string;
  href: string;
  icon: React.ReactNode;
}

const menuCategories: MenuCategory[] = [
  {
    name: "Sobre mí",
    href: "about"
  },
  {
    name: "Mujeres",
    href: "woman"
  },
  {
    name: "Niños",
    href: "kids"
  }
]

const menuItems: MenuItems[] = [
  {
    name: "Search",
    href: "/search",
    icon: <IoSearchOutline className="w-5 h-5" />
  },
  {
    name: "Cart",
    href: "/cart",
    icon: <div className="relative">
      <span className="absolute -top-2 -right-2 bg-blue-700 text-white text-xs rounded-full px-1 flex items-center justify-center">
        2
      </span>
      <IoCartOutline className="w-5 h-5" />
    </div>
  }
]

export const TopMenu = () => {
  return (
    <nav className="fixed z-50 text-white rounded-b-md flex  px-5 justify-between items-center w-full">
      {/* Logo */}
      <div>
        <Link href="/">
          <span className={`${playfair.className} antialiased font-bold`}>
            Nine
          </span>
          <span>Mountain</span>
        </Link>
      </div>

      {/* Center Menu */}

      <div className="hidden sm:block">
        {
          menuCategories.map((item)=>(
            <Link key={item.name}
            className=" p-2 rounded-md transition-all hover:bg-gray-100" 
            href={item.href} >
              {item.name}
            </Link>
          ))
        }
      </div>

      {/* Right Menu */}
      <div className="flex items-center gap-2">
        {
          menuItems.map((item)=>(
            <Link key={item.name} href={item.href}>
              {item.icon}
            </Link>
          ))
        }

        <button className="m-2 p-2 rounded-md transition-all hover:bg-gray-100 cursor-pointer">
        <span>Menú</span>
        </button>

      </div>


    </nav>
  );
};