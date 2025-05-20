"use client"

import {playfair} from "@/config/fonts";
import { cn } from "@/lib/utils";
import Link from "next/link";
import { useEffect, useState } from "react";
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
    name: "Proyectos",
    href: "proyects"
  },
  {
    name: "Contactame",
    href: "contactame"
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
    const [isVisible, setIsVisible] = useState(true)
    const [lastScrollY, setLastScrollY] = useState(0)
  
  
    useEffect(() => {
      const controlNavbar = () => {
        const currentScrollY = window.scrollY
  
        // Determinar si el scroll es hacia arriba o hacia abajo
        if (currentScrollY > lastScrollY) {
          // Scroll hacia abajo - ocultar navbar
          setIsVisible(false)
        } else {
          // Scroll hacia arriba - mostrar navbar
          setIsVisible(true)
        }
  
        // Actualizar la posición de scroll para la próxima comparación
        setLastScrollY(currentScrollY)
      }
  
      // Añadir el event listener
      window.addEventListener("scroll", controlNavbar)
  
      // Limpiar el event listener cuando el componente se desmonte
      return () => {
        window.removeEventListener("scroll", controlNavbar)
      }
    }, [lastScrollY]) // Dependencia del último valor de scroll
  

  return (

    <nav className={cn(
      "fixed top-0 left-0 right-0 text-white rounded-b-md flex  px-5 justify-between items-center w-full z-50 transition-transform duration-300",
      isVisible ? "translate-y-0 bg-transparent" : "-translate-y-full",
      isVisible && lastScrollY > 100
        ? "bg-white/50 text-gray-800 border-b border-white/50"
        : "",
    )}>
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