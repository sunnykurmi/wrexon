"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { motion } from "framer-motion";

const navItems = [
  { label: "Home", href: "/" },
  { label: "About", href: "/about" },
  { label: "Services", href: "/services" },
  { label: "Process", href: "/process" },
];

export default function Navbar() {
  const pathname = usePathname();
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 w-full z-50 backdrop-blur-md bg-black/50">
      <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
        <Link title="Home" href="/" className="text-2xl font-bold text-purple-400">
          <motion.div
           whileHover={{ rotate: 15, scale: 1.1 }}
           transition={{ type: "spring", stiffness: 200 }}
           className="text-white font-extrabold text-2xl cursor-pointer select-none"
         >
           <span className="text-purple-400">W</span>rexon
         </motion.div>
        </Link>

        {/* Desktop */}
        <ul className="hidden md:flex space-x-6 text-white font-semibold">
          {navItems.map((item) => (
            <li key={item.href}>
              <Link
              title={item.label}
                href={item.href}
                className={`relative px-2 py-1 ${
                  pathname === item.href
                    ? "text-purple-400 before:absolute before:-bottom-1 before:left-0 before:w-full before:h-[2px] before:bg-purple-400"
                    : "hover:text-purple-300"
                }`}
              >
                {item.label}
                </Link>
            </li>
          ))}
        </ul>

        {/* Mobile Toggle */}
        <button
          className="md:hidden text-white text-2xl"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          {menuOpen ? "✕" : "☰"}
        </button>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <motion.ul
          initial={{ height: 0, opacity: 0 }}
          animate={{ height: "auto", opacity: 1 }}
          exit={{ height: 0, opacity: 0 }}
          className="md:hidden bg-black/90 text-white font-semibold flex flex-col px-6 py-4 space-y-4"
        >
          {navItems.map((item) => (
            <li key={item.href}>
              <Link  title={item.label} href={item.href} onClick={() => setMenuOpen(false)}>
                {item.label}
              </Link>
            </li>
          ))}
        </motion.ul>
      )}
    </nav>
  );
}


