"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { aboutMe } from "@/data/aboutme";

export function Navbar() {
  const pathname = usePathname();

  const links = [
    { name: "News", href: "/news" },
    { name: "Blog", href: "/blog" },
    { name: "Publications", href: "/publications" },
    { name: "Projects", href: "/projects" },
  ];

  return (
    <nav className="sticky top-0 z-50 w-full border-b border-zinc-400/60 bg-[#FFFCF8]/80 backdrop-blur-md">
      <div className="max-w-screen-lg mx-auto px-8 h-16 flex items-center justify-between">
        {/* Left Side Links */}
        <div className="flex items-center gap-6 md:gap-8">
          {links.map((link) => {
            const isActive = pathname === link.href;
            return (
              <Link
                key={link.href}
                href={link.href}
                className={`group relative font-sans text-xs tracking-wider uppercase transition-colors duration-300 ${
                  isActive
                    ? "text-[#004953] font-medium"
                    : "text-[#004953] hover:text-[#004953]"
                }`}
              >
                <span className="relative inline-block pb-1">
                  {link.name}
                  <span
                    className={`absolute left-0 bottom-0 h-[1px] bg-[#004953] transition-all duration-300 ${
                      isActive ? "w-full" : "w-0 group-hover:w-full"
                    }`}
                  />
                </span>
              </Link>
            );
          })}
        </div>

        {/* Right Side Brand/Name */}
        <div className="hidden md:block">
          <Link
            href="/"
            className="font-serif text-sm tracking-wide text-zinc-900 hover:text-zinc-600 transition-colors duration-300 font-medium"
          >
            {aboutMe.name}
          </Link>
        </div>
      </div>
    </nav>
  );
}
