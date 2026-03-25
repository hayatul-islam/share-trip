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
    <nav className="sticky top-0 z-50 bg-white/95 backdrop-blur ">
      <div className="container h-[68px] flex items-center justify-between">
        {/* Logo */}
        <Logo />

        {/* Desktop */}
        <div className="hidden md:flex items-center gap-3">
          {NAV_LINKS.map((item) => {
            return item.type === "dropdown" ? (
              <DropdownMenu key={item.name}>
                <DropdownMenuTrigger asChild>
                  <button className="group px-2 py-2 text-sm flex items-center gap-1 hover:text-primary data-[state=open]:text-primary">
                    {item.name}
                    <ChevronDown className="w-4 h-4 transition-transform group-data-[state=open]:rotate-180" />
                  </button>
                </DropdownMenuTrigger>

                <DropdownMenuContent className="bg-white p-0">
                  {item.menu?.map((sub) => (
                    <DropdownMenuItem
                      key={sub.name}
                      asChild
                      className="hover:bg-primary/10 rounded-none px-3 py-1"
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
                className="px-2 py-2 text-sm hover:text-primary"
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
