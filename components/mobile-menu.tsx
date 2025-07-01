"use client";

import React, { useEffect } from "react";
import { motion } from "motion/react";
import { usePathname } from "next/navigation";

type Link = {
  name: string;
  href: string;
};

const links: Link[] = [
  {
    name: "Home",
    href: "/",
  },
  {
    name: "Who we are?",
    href: "/about",
  },
  {
    name: "Animals",
    href: "/animals",
  },
  {
    name: "Blog",
    href: "/blog/page/1",
  },
  {
    name: "Contact",
    href: "/contact",
  },
];

const MobileMenu = () => {
  const pathname = usePathname();

  const colorLinksByPathname = (pathname: string) => {
    if (pathname === "/") {
      return "dark:text-green-400 text-green-600";
    }

    if (pathname === "/about") {
      return "dark:text-pink-400 text-pink-600";
    }

    if (
      pathname.startsWith("/blog/post/") ||
      pathname.startsWith("/blog/page/")
    ) {
      return "dark:text-blue-400 text-blue-600";
    }

    if (pathname === "/contact") {
      return "dark:text-purple-400 text-purple-600";
    }

    return ""; // fallback
  };

  useEffect(() => {
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = "auto";
    };
  }, []);

  return (
    <motion.section
      initial={{ x: "100%" }}
      animate={{ x: "0%" }}
      exit={{ x: "100%" }}
      transition={{ duration: 0.2 }}
      className="fixed top-0 z-10 flex h-screen w-full flex-col items-center justify-center gap-4 bg-neutral-50 dark:bg-neutral-950"
    >
      <ul className="space-y-6">
        {links.map(({ name, href }, index) => (
          <li
            key={index}
            className={`${pathname == href ? colorLinksByPathname(pathname) : ""} font-semibold`}
          >
            <a href={href}>{name}</a>
          </li>
        ))}
      </ul>
    </motion.section>
  );
};

export default MobileMenu;
