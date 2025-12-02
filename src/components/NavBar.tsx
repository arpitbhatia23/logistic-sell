// components/Navbar.tsx
"use client";

import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { AiOutlineDown } from "react-icons/ai";
import Link from "next/link";
// Using Next.js Image component for the logo (best practice)
import Image from "next/image";
import logo from "../assets/logo.png";

// --- TypeScript Interfaces ---

interface NavItemDropdown {
  name: string;
  path: string;
}

interface NavItem {
  name: string;
  path: string;
  // dropdown is an optional array of sub-items
  dropdown?: NavItemDropdown[];
}

// --- Navigation Data (Typed) ---

const navItems: NavItem[] = [
  { name: "Home", path: "/" },
  {
    name: "About Us",
    path: "/about-us",
  },
  // Example of a link with a dropdown, mirroring the logic used in the JSX
  {
    name: "Services",
    path: "/services",
    dropdown: [
      { name: "Safety & Maintenance", path: "/services/safety-maintenance" },
      { name: "Dispatch Services", path: "/services/dispatch" },
      { name: "Freight Brokerage", path: "/services/freight-brokerage" },
    ],
  },
  { name: "Testimonial", path: "/testimonial" },
  { name: "Blogs", path: "/blogs" },
  { name: "Contact", path: "/contact" },
];

// --- Component Definition ---

const Navbar: React.FC = () => {
  // Explicitly type the state variables
  const [isMenuOpen, setIsMenuOpen] = useState<boolean>(false);
  const [dropdown, setDropdown] = useState<string | null>(null);
  const [mobileDropdown, setMobileDropdown] = useState<string | null>(null);

  // Close dropdown when clicking outside (for desktop only)
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      // Use optional chaining and type checking for target
      if (
        event.target instanceof Element &&
        !event.target.closest(".dropdown")
      ) {
        setDropdown(null);
      }
    };

    document.addEventListener("click", handleClickOutside);
    return () => document.removeEventListener("click", handleClickOutside);
  }, []);

  // Close mobile menu on body scroll lock fix (optional, but good for mobile)
  useEffect(() => {
    document.body.style.overflow = isMenuOpen ? "hidden" : "unset";
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [isMenuOpen]);

  return (
    <header className="fixed w-full z-50 bg-black shadow-md">
      <nav className="flex justify-between items-center h-16 px-6 lg:px-12 text-white">
        {/* Logo */}
        <Link href="/">
          <Image
            src={logo}
            className="h-16 w-auto"
            alt="Walia Group brand logo"
            width={400} // Added required dimensions for Next/Image
            height={400}
            quality={75}
            priority
          />
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden md:flex md:items-center space-x-6">
          <ul className="flex space-x-6">
            {navItems.map((item: NavItem, index: number) => (
              <li key={index} className="relative dropdown">
                {item.dropdown ? (
                  <button
                    className="flex items-center gap-1 text-white hover:text-yellow-500 font-medium transition duration-300"
                    onClick={() =>
                      setDropdown(dropdown === item.name ? null : item.name)
                    }
                    aria-expanded={dropdown === item.name}
                    aria-controls={`dropdown-${item.name.toLowerCase()}`}
                    aria-label={`Toggle ${item.name} menu`}
                  >
                    {item.name}
                    <AiOutlineDown
                      className={`w-3 h-3 transition-transform duration-300 ${
                        dropdown === item.name
                          ? "rotate-180 text-yellow-500"
                          : ""
                      }`}
                    />
                  </button>
                ) : (
                  <Link
                    href={item.path}
                    className="text-white hover:text-yellow-500 font-medium transition duration-300"
                  >
                    {item.name}
                  </Link>
                )}

                {/* Dropdown Menu (Desktop) */}
                <AnimatePresence>
                  {item.dropdown && dropdown === item.name && (
                    <motion.div
                      initial={{ opacity: 0, y: -5 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -5 }}
                      className="absolute left-0 top-full mt-2 w-52 bg-neutral-800 shadow-xl rounded-md overflow-hidden z-50"
                      id={`dropdown-${item.name.toLowerCase()}`}
                    >
                      {item.dropdown.map(
                        (subItem: NavItemDropdown, subIndex: number) => (
                          <Link
                            key={subIndex}
                            href={subItem.path}
                            onClick={() => setDropdown(null)}
                            className="block px-4 py-2 text-sm text-gray-200 hover:bg-yellow-500 hover:text-black transition duration-200"
                          >
                            {subItem.name}
                          </Link>
                        )
                      )}
                    </motion.div>
                  )}
                </AnimatePresence>
              </li>
            ))}
          </ul>
        </div>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          className="md:hidden text-gray-200 hover:text-yellow-500 transition duration-200 focus:outline-none"
          aria-label="Toggle mobile menu"
          aria-expanded={isMenuOpen}
        >
          {/* Hamburger Icon */}
          <svg
            className="h-6 w-6"
            stroke="currentColor"
            fill="none"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d={
                isMenuOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"
              }
            />
          </svg>
        </button>
      </nav>

      {/* Mobile Navigation Menu */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
            className="absolute top-16 left-0 w-full bg-neutral-900 text-white md:hidden overflow-hidden"
          >
            <motion.ul
              className="flex flex-col space-y-2 p-4"
              // Staggering for menu items
              variants={{
                hidden: { opacity: 0 },
                visible: {
                  opacity: 1,
                  transition: { staggerChildren: 0.07, delayChildren: 0.2 },
                },
              }}
              initial="hidden"
              animate="visible"
              exit="hidden"
            >
              {navItems.map((item: NavItem, index: number) => (
                <motion.li
                  key={index}
                  className="relative"
                  variants={{
                    hidden: { y: 20, opacity: 0 },
                    visible: { y: 0, opacity: 1 },
                  }}
                >
                  {item.dropdown ? (
                    <>
                      <button
                        className="flex justify-between items-center w-full py-2 text-lg text-white hover:text-yellow-500 transition duration-200"
                        onClick={() =>
                          setMobileDropdown(
                            mobileDropdown === item.name ? null : item.name
                          )
                        }
                        aria-expanded={mobileDropdown === item.name}
                      >
                        {item.name}
                        <AiOutlineDown
                          className={`w-4 h-4 transition-transform duration-300 ${
                            mobileDropdown === item.name
                              ? "rotate-180 text-yellow-500"
                              : ""
                          }`}
                        />
                      </button>

                      {/* Mobile Dropdown */}
                      <AnimatePresence initial={false}>
                        {mobileDropdown === item.name && (
                          <motion.ul
                            initial={{ height: 0, opacity: 0 }}
                            animate={{ height: "auto", opacity: 1 }}
                            exit={{ height: 0, opacity: 0 }}
                            transition={{ duration: 0.2 }}
                            className="mt-1 space-y-1 pl-4 border-l-2 border-yellow-500"
                          >
                            {item.dropdown.map(
                              (subItem: NavItemDropdown, subIndex: number) => (
                                <li key={subIndex}>
                                  <Link
                                    href={subItem.path}
                                    onClick={() => {
                                      setIsMenuOpen(false);
                                      setMobileDropdown(null);
                                    }}
                                    className="block py-1 text-base text-gray-300 hover:text-yellow-500 transition duration-200"
                                  >
                                    {subItem.name}
                                  </Link>
                                </li>
                              )
                            )}
                          </motion.ul>
                        )}
                      </AnimatePresence>
                    </>
                  ) : (
                    <Link
                      href={item.path}
                      onClick={() => setIsMenuOpen(false)}
                      className="block py-2 text-lg text-white hover:text-yellow-500 transition duration-200"
                    >
                      {item.name}
                    </Link>
                  )}
                </motion.li>
              ))}
            </motion.ul>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};

export default Navbar;
