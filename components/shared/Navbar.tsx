"use client";
import { NAV_LINKS } from "@/app/data";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { ChevronDown, Menu } from "lucide-react";
import Link from "next/link";
import { useState } from "react";
import Logo from "./Logo";

export function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [openDropdowns, setOpenDropdowns] = useState<string[]>([]);

  const toggleDropdown = (name: string) => {
    setOpenDropdowns((prev) =>
      prev.includes(name) ? prev.filter((n) => n !== name) : [...prev, name],
    );
  };

  return (
    <nav className="sticky top-0 z-[999] bg-white/95 backdrop-blur">
      <div className="container h-[60px] lg:h-[68px] flex items-center justify-between">
        {/* Logo */}
        <div className="flex w-full justify-center lg:w-auto">
          <button
            className="lg:hidden p-2 text-gray-500 absolute top-[50%] left-3 translate-y-[-50%]"
            onClick={() => setMenuOpen(true)}
          >
            <Menu className="w-5 h-5" />
          </button>
          <Logo />
        </div>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center gap-[12px]">
          {NAV_LINKS.map((item) =>
            item.type === "dropdown" ? (
              <DropdownMenu key={item.name}>
                <DropdownMenuTrigger asChild>
                  <button className="group px-2 py-2 text-sm text-[#5a6573] font-[450] flex items-end gap-1 hover:text-primary data-[state=open]:text-primary cursor-pointer outline-none">
                    {item.name}
                    <ChevronDown className="w-4 h-4 transition-transform duration-200 group-data-[state=open]:rotate-180" />
                  </button>
                </DropdownMenuTrigger>
                <DropdownMenuContent
                  align="end"
                  sideOffset={8}
                  className="bg-white shadow-sm p-0 rounded min-w-[180px] ring-0"
                >
                  {item.menu?.map((sub) => (
                    <DropdownMenuItem
                      key={sub.name}
                      asChild
                      className="rounded-none px-4 py-1.5 text-[14px] text-gray-900 hover:bg-primary/8 cursor-pointer transform duration-300"
                    >
                      <Link href={sub.link}>{sub.name}</Link>
                    </DropdownMenuItem>
                  ))}
                </DropdownMenuContent>
              </DropdownMenu>
            ) : (
              <Link
                key={item.name}
                href={item.link}
                className="px-2 py-2 text-sm text-[#5a6573] font-[450] hover:text-primary"
              >
                {item.name}
              </Link>
            ),
          )}
        </div>

        {/* Desktop Right */}
        <div className="hidden lg:flex items-center gap-3">
          <Link
            href="#"
            className="bg-primary text-white rounded-full px-6 py-2.5 pb-3 font-medium text-sm"
          >
            Login
          </Link>
        </div>
      </div>

      {/* ── MOBILE DRAWER ── */}

      {/* Backdrop */}
      <div
        className={`md:hidden fixed top-0 left-0 w-screen h-screen z-[998] bg-black/40 transition-opacity duration-300
          ${menuOpen ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"}`}
        onClick={() => setMenuOpen(false)}
      />

      {/* Slide-in Panel */}
      <div
        className={`md:hidden fixed top-0 left-0 z-[999] h-screen w-[80%] !bg-white flex flex-col
          shadow-2xl transition-transform duration-300 ease-in-out
          ${menuOpen ? "translate-x-0" : "-translate-x-full"}`}
      >
        {/* Panel Header */}
        <div className="flex items-center justify-between px-4 pt-4 pb-3 ">
          <Logo />
        </div>

        {/* Nav Links */}
        <div className="flex-1 overflow-y-auto px-2">
          {NAV_LINKS.map((item) =>
            item.type === "dropdown" ? (
              <div key={item.name}>
                <button
                  onClick={() => toggleDropdown(item.name)}
                  className="w-full flex items-center justify-between px-3 py-1.5 text-[15px] font-[400] text-gray-800 rounded-lg"
                >
                  {item.name}
                  <ChevronDown
                    className={`w-4 h-4 text-gray-400 transition-transform duration-200
                      ${openDropdowns.includes(item.name) ? "rotate-180" : ""}`}
                  />
                </button>

                {/* Submenu */}
                <div
                  className={`overflow-hidden transition-all duration-200
                    ${openDropdowns.includes(item.name) ? "max-h-96" : "max-h-0"}`}
                >
                  {item.menu?.map((sub) => (
                    <Link
                      key={sub.name}
                      href={sub.link}
                      onClick={() => setMenuOpen(false)}
                      className="flex items-center gap-2 px-2.5 py-1 text-[14px] text-gray-600 hover:text-primary hover:bg-gray-50 rounded-lg"
                    >
                      {sub.name}
                    </Link>
                  ))}
                </div>
              </div>
            ) : (
              <Link
                key={item.name}
                href={item.link}
                onClick={() => setMenuOpen(false)}
                className="block px-3 py-1.5 text-[15px] font-[400] text-gray-800 hover:bg-gray-50 rounded-lg"
              >
                {item.name}
              </Link>
            ),
          )}
        </div>

        {/* Login Button */}
        <div className="p-4 bg-gray-50">
          <Link
            href="#"
            onClick={() => setMenuOpen(false)}
            className="block w-full text-center bg-yellow text-white rounded py-2 font-medium text-[15px]"
          >
            Login
          </Link>
        </div>
      </div>
    </nav>
  );
}
