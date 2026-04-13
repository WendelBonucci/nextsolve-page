"use client";
import { useEffect, useState, useRef, useCallback } from "react";
import { createPortal } from "react-dom";
import { usePathname } from "next/navigation";
import Link from "next/link";
import { FaBars, FaTimes } from "react-icons/fa";

export default function Sidebar() {
  const [isOpen, setIsOpen] = useState(false);
  const pathname = usePathname();
  const sidebarRef = useRef<HTMLElement>(null);

  const toggleMenu = useCallback(() => {
    setIsOpen((prev) => !prev);
  }, []);

  const closeMenu = useCallback(() => {
    setIsOpen(false);
  }, []);

  useEffect(() => {
    closeMenu();
  }, [closeMenu]);

  useEffect(() => {
    document.body.style.overflow = isOpen ? "hidden" : "auto";
  }, [isOpen]);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        sidebarRef.current &&
        event.target instanceof Node &&
        !sidebarRef.current.contains(event.target)
      ) {
        closeMenu();
      }
    };

    if (isOpen) {
      document.addEventListener("mousedown", handleClickOutside);
    }

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [isOpen, closeMenu]);

  const links = [
    { id: 1, label: "Quem Somos", href: "/About" },
    { id: 2, label: "Serviços", href: "/about" },
    { id: 3, label: "Soluções", href: "/companies" },
    { id: 4, label: "Blog", href: "/policiesAndPrivacy" },
    { id: 5, label: "Contato", href: "/contact" },
    { id: 6, label: "English", href: "/contact" },
  ];

  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  return (
    <>
      <button
        type="button"
        onClick={toggleMenu}
        aria-label="Abrir menu"
        className="flex items-center justify-center w-9 h-9 rounded-lg text-white/80 border border-white/10 transition-all duration-300 hover:text-white hover:border-blue-500/40 hover:bg-blue-500/10"
      >
        <FaBars size={15} />
      </button>

      {mounted &&
        createPortal(
          <>
            <div
              className={`fixed inset-0 z-9998 min-h-screen h-full transition-all duration-300 bg-black/60 backdrop-blur-sm ${
                isOpen ? "opacity-100" : "opacity-0 pointer-events-none"
              }`}
            />
            <aside
              ref={sidebarRef}
              className={`fixed top-0 right-0 z-9999 h-screen w-72
                bg-white/5 backdrop-blur-xl
                border-l border-white/10
                shadow-[-20px_0_60px_rgba(0,0,0,0.5)]
                transform transition-transform duration-300 ease-in-out
                ${isOpen ? "translate-x-0" : "translate-x-full"}`}
            >
              <div className="flex items-center justify-between px-5 py-4 border-b border-white/10">
                <span className="text-xs font-semibold tracking-[0.15em] text-white/30 uppercase">
                  navegação
                </span>

                <button
                  type="button"
                  onClick={closeMenu}
                  aria-label="Fechar menu"
                  className="flex items-center justify-center w-7 h-7 rounded-lg text-white/40 border border-transparent transition-all duration-300 hover:text-white hover:bg-blue-500/10 hover:border-blue-500/30"
                >
                  <FaTimes size={13} />
                </button>
              </div>

              <nav className="flex flex-col px-3 py-3 gap-0.5">
                {links.map((link) => {
                  const active = pathname === link.href;

                  return (
                    <Link
                      key={link.id}
                      href={link.href}
                      onClick={closeMenu}
                      className={`px-4 py-2.5 rounded-lg text-sm font-medium tracking-wide border transition-all duration-200 ${
                        active
                          ? "bg-blue-500/15 text-white border-blue-500/30"
                          : "text-white/70 border-transparent hover:text-white hover:bg-blue-500/10 hover:border-blue-500/20"
                      }`}
                    >
                      {link.label}
                    </Link>
                  );
                })}
              </nav>

              <div className="absolute bottom-0 w-full">
                <div className="h-px w-full bg-linear-to-r from-transparent via-blue-500/40 to-transparent" />
                <div className="px-5 py-4">
                  <span className="text-xs font-semibold tracking-wide text-transparent bg-clip-text bg-linear-to-r from-blue-400 to-cyan-300">
                    NextSolve
                  </span>
                </div>
              </div>
            </aside>
          </>,
          document.body,
        )}
    </>
  );
}
