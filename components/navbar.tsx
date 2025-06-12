"use client";

import {
  Container,
  ThemeToggler,
  DesktopNavigation,
  Profile,
  HamburgerBtn,
  MobileMenu,
} from "@/components/index";
import React, { useState } from "react";
import { Button } from "./ui/button";
import { AnimatePresence } from "motion/react";

const Navbar = () => {
  const [mobileMenu, setMobileMenu] = useState<boolean>(false);

  return (
    <nav>
      <Container className="flex items-center justify-between py-6">
        <h1 className="font-semibold">Ani🐈al 🐍helter</h1>
        <DesktopNavigation />
        <div className="flex items-center sm:gap-2 md:gap-3">
          <Button className="hidden md:block" variant={"donate"}>
            Donate us 🪙
          </Button>
          <Profile />
          <ThemeToggler />
          <HamburgerBtn setMobileMenu={setMobileMenu} />
        </div>
      </Container>
      <AnimatePresence>{mobileMenu && <MobileMenu />}</AnimatePresence>
    </nav>
  );
};

export default Navbar;
