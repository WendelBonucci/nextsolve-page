"use client";
import { useEffect, useState } from "react";
import { usePathname } from "next/navigation";

import Title from "./Title";
import Navgation from "./Navgation";
import Buttons from "./Buttons";
import SideBar from "./SideBar";

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };

    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [pathname]);

  return (
    <header
      className={`fixed top-0 w-full h-20 z-50 transition-all duration-300 ${
        scrolled ? "bg-black backdrop-blur-md shadow-lg" : "bg-black"
      }`}
    >
      <section className="max-w-7xl mx-auto flex items-center justify-between h-full px-6">
        {/* ESQUERDA */}
        <div className="flex items-center gap-6">
          <Title />

          {/* NAV só aparece no desktop */}
          <div className="hidden md:flex">
            <Navgation />
          </div>
        </div>

        {/* DIREITA */}
        <div className="flex items-center gap-4">
          {/* BOTÕES só no desktop */}
          <div className="hidden md:flex">
            <Buttons />
          </div>

          {/* SIDEBAR só no mobile */}
          <div className="md:hidden">
            <SideBar />
          </div>
        </div>
      </section>
    </header>
  );
}
