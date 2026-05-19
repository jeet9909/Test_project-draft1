"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { Menu, X } from "lucide-react";
import DarkModeToggle from "./DarkModeToggle";
import { cn } from "@/lib/utils";

const navLinks = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About" },
  { href: "/services", label: "Services" },
  { href: "/publications", label: "Publications" },
  { href: "/process", label: "Process" },
  { href: "/contact", label: "Contact" },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => setIsOpen(false), [pathname]);

  return (
    <header
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-300",
        scrolled
          ? "bg-white/98 dark:bg-[#0F172A]/98 backdrop-blur-md shadow-md border-b border-gray-200 dark:border-gray-800"
          : "bg-transparent"
      )}
    >
      <nav className="max-w-7xl mx-auto px-4 md:px-8 h-16 flex items-center justify-between">
        {/* Logo */}
        <Link href="/" aria-label="WormEra Research Lab — Home" className="flex items-center gap-2">
          <div className={cn(
            "rounded-xl overflow-hidden transition-all duration-300",
            scrolled ? "bg-transparent" : "bg-white/90 dark:bg-white/10"
          )}>
            <Image
              src="/logo.png"
              alt="WormEra Research Lab"
              width={44}
              height={44}
              className="w-10 h-10 md:w-11 md:h-11 object-contain"
              priority
            />
          </div>
          <span className={cn(
            "font-display font-bold text-lg hidden sm:block transition-colors duration-300",
            scrolled ? "text-[#0A4F5C] dark:text-white" : "text-white"
          )}>
            WormEra
          </span>
        </Link>

        {/* Desktop nav */}
        <ul className="hidden md:flex items-center gap-0.5">
          {navLinks.map((link) => (
            <li key={link.href}>
              <Link
                href={link.href}
                className={cn(
                  "px-4 py-2 rounded-lg text-sm font-medium transition-all duration-200",
                  pathname === link.href
                    ? scrolled
                      ? "text-[#0A4F5C] dark:text-white bg-[#0A4F5C]/10 dark:bg-white/10"
                      : "text-white bg-white/15"
                    : scrolled
                    ? "text-gray-700 dark:text-gray-300 hover:text-[#0A4F5C] dark:hover:text-white hover:bg-gray-100 dark:hover:bg-gray-800"
                    : "text-white/90 hover:text-white hover:bg-white/10"
                )}
              >
                {link.label}
              </Link>
            </li>
          ))}
        </ul>

        {/* Right */}
        <div className="flex items-center gap-2">
          <DarkModeToggle scrolled={scrolled} />
          <Link
            href="/contact"
            className="hidden md:inline-flex btn-primary text-sm py-2 px-4"
          >
            Get a Quote
          </Link>
          <button
            onClick={() => setIsOpen(!isOpen)}
            className={cn(
              "md:hidden w-9 h-9 rounded-lg flex items-center justify-center transition-colors cursor-pointer",
              scrolled
                ? "bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300"
                : "bg-white/15 text-white"
            )}
            aria-label={isOpen ? "Close menu" : "Open menu"}
          >
            {isOpen ? <X size={18} /> : <Menu size={18} />}
          </button>
        </div>
      </nav>

      {/* Mobile menu */}
      {isOpen && (
        <div className="md:hidden bg-white dark:bg-[#1E293B] border-t border-gray-200 dark:border-gray-700 px-4 py-4 shadow-xl">
          <ul className="space-y-1">
            {navLinks.map((link) => (
              <li key={link.href}>
                <Link
                  href={link.href}
                  className={cn(
                    "block px-4 py-3 rounded-xl text-sm font-medium transition-all",
                    pathname === link.href
                      ? "text-[#0A4F5C] dark:text-teal-300 bg-[#0A4F5C]/10 dark:bg-teal-900/30"
                      : "text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700"
                  )}
                >
                  {link.label}
                </Link>
              </li>
            ))}
            <li className="pt-2">
              <Link href="/contact" className="btn-primary w-full justify-center text-sm">
                Get a Quote
              </Link>
            </li>
          </ul>
        </div>
      )}
    </header>
  );
}
