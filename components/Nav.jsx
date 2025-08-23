"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React from "react";
import { motion } from "framer-motion";

const links = [
  { path: "/", name: "Home" },
  { path: "/about", name: "About" },
  { path: "/projects", name: "My Projects" },
  { path: "/contact", name: "Contact" },
];

const Nav = ({ containerStyles, linkStyles, underlineStyles, onLinkClick }) => {
  const path = usePathname();

  return (
    <nav className={`${containerStyles}`}>
      {links.map((link, index) => {
        const isActive = link.path === path;
        return (
          <Link
            href={link.path}
            key={index}
            className={`capitalize tracking-wider relative ${linkStyles} hover:text-primary transition duration-300 ${
              isActive ? "text-primary" : ""
            }`}
            onClick={onLinkClick} // 🔑 close sheet on link click
          >
            {isActive && (
              <motion.span
                initial={{ y: "-100%" }}
                animate={{ y: 0 }}
                transition={{ type: "tween" }}
                layoutId="underline"
                className={`${underlineStyles} absolute left-0 bottom-0 w-full h-[2px] bg-primary `}
              />
            )}
            {link.name}
            <span
              className={`absolute left-0 bottom-0 w-full h-[2px] bg-primary scale-x-0 transition-transform duration-300 hover:scale-x-100 ${
                isActive ? "scale-x-100" : ""
              }`}
            />
          </Link>
        );
      })}
    </nav>
  );
};

export default Nav;
