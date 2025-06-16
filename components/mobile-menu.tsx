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
    href: "/blog",
  },
  {
    name: "Contact",
    href: "/contact",
  },
];

const MobileMenu = () => {
  const pathname = usePathname();

  // 🔒 Disable scroll on mount
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
      className="fixed top-0 z-10 flex h-screen w-full flex-col items-center justify-center gap-4 dark:bg-neutral-950"
    >
      <ul className="space-y-6">
        {links.map(({ name, href }, index) => (
          <li
            key={index}
            className={`${pathname == href ? "text-green-400" : ""} font-semibold`}
          >
            <a href={href}>{name}</a>
          </li>
        ))}
      </ul>
    </motion.section>
  );
};

export default MobileMenu;
