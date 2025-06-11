"use client";

import {
  Container,
  ThemeToggler,
  DesktopNavigation,
  Profile,
  HamburgerBtn,
} from "@/components/index";
import React from "react";
import { Button } from "./ui/button";

const Navbar = () => {
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
          <HamburgerBtn />
        </div>
      </Container>
    </nav>
  );
};

export default Navbar;
