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

  return (
    <nav className="sticky top-0 z-[999] bg-white/95 backdrop-blur ">
      <div className="container h-[68px] flex items-center justify-between">
        {/* Logo */}
        <Logo />

        {/* Desktop */}
        <div className="hidden md:flex items-center gap-[12px]">
          {NAV_LINKS.map((item) => {
            return item.type === "dropdown" ? (
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
                  className="
                    bg-white ring-0 shadow-sm p-0 rounded min-w-[180px]
                    data-[state=open]:animate-in data-[state=closed]:animate-out
                    data-[state=open]:fade-in-0 data-[state=closed]:fade-out-0
                    data-[state=open]:zoom-in-95 data-[state=closed]:zoom-out-95
                    data-[side=bottom]:slide-in-from-top-2 data-[side=top]:slide-in-from-bottom-2
                    duration-300
                  "
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
            );
          })}
        </div>

        {/* Right */}
        <div className="flex items-center gap-3">
          <Link
            href="#"
            className="bg-primary text-white rounded-full px-6 py-2.5 pb-3 font-medium text-sm"
          >
            Login
          </Link>

          <button
            className="md:hidden p-2"
            onClick={() => setMenuOpen(!menuOpen)}
          >
            <Menu className="w-5 h-5" />
          </button>
        </div>
      </div>

      {/* Mobile */}
      {menuOpen && (
        <div className="md:hidden border-t px-4 py-3 flex flex-col gap-2">
          {NAV_LINKS.map((item) => (
            <div key={item.name}>
              <Link href={item.link} className="block py-2">
                {item.name}
              </Link>

              {item.type === "dropdown" && (
                <div className="ml-3 flex flex-col gap-1">
                  {item.menu?.map((sub) => (
                    <Link key={sub.name} href={sub.link}>
                      {sub.name}
                    </Link>
                  ))}
                </div>
              )}
            </div>
          ))}
        </div>
      )}
    </nav>
  );
}
