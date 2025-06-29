"use client";

import React from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Container, GoogleMap } from "@/components/index";
import { FaFacebookSquare, FaInstagram, FaTiktok } from "react-icons/fa";
import Link from "next/link";
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
    name: "Who are we?",
    href: "/about-us",
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

const Footer = () => {
  const pathname = usePathname();

  const colorLinksByPathname = (pathname: string) => {
    if (pathname === "/") {
      return "dark:hover:text-green-400 hover:text-green-600";
    }

    if (
      pathname.startsWith("/blog/post/") ||
      pathname.startsWith("/blog/page/")
    ) {
      return "dark:hover:text-blue-400 hover:text-blue-600";
    }

    if (pathname === "/contact") {
      return "dark:hover:text-purple-400 hover:text-purple-600";
    }

    return ""; // fallback
  };

  return (
    <footer className="mt-16 lg:mt-32">
      <Container>
        <GoogleMap
          apiKey={process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY!}
          lat={50.0413}
          lng={21.999}
          zoom={15}
        />
        <section className="my-12 flex items-center">
          <div className="flex w-full flex-wrap items-center justify-between gap-4">
            <h3 className="text-sm font-medium lg:text-base">
              Be <span className="font-bold">connected</span> with us by
              newsletter
            </h3>
            <div className="flex gap-4">
              <Input type="email" placeholder="Email" />
              <Button type="submit" variant="check">
                Subscribe
              </Button>
            </div>
          </div>
        </section>
        <section className="border-t border-neutral-300 py-12 dark:border-neutral-700">
          <div className="grid grid-cols-1 gap-8 lg:grid-cols-3">
            <section className="space-y-6">
              <h2 className="font-semibold">Ani🐈al 🐍helter</h2>
              <p className="text-sm leading-6 lg:text-base lg:leading-8 dark:opacity-80">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Porro
                dolores, alias nisi laudantium ipsa consequuntur cum vel dolor
                consequatur ratione!
              </p>
            </section>
            <section className="space-y-6 lg:mx-auto">
              <h2 className="font-semibold">Links</h2>
              <ul className="space-y-4">
                {links.map(({ name, href }: Link, index) => (
                  <li
                    key={index}
                    className={`text-sm duration-200 ${colorLinksByPathname(pathname)} lg:text-base`}
                  >
                    <Link href={href}>{name}</Link>
                  </li>
                ))}
              </ul>
            </section>
            <section className="items-end space-y-6 lg:flex lg:flex-col">
              <h2 className="font-semibold">Social Media</h2>
              <ul className="space-y-4">
                <li>
                  <Link
                    href="https://facebook.com"
                    className="flex items-center gap-2"
                    target="_blank"
                  >
                    <FaFacebookSquare className="text-2xl" />
                    <p className="text-sm lg:text-base">Facebook</p>
                  </Link>
                </li>
                <li>
                  <Link
                    href="https://instagram.com"
                    className="flex items-center gap-2"
                    target="_blank"
                  >
                    <FaInstagram className="text-2xl" />
                    <p className="text-sm lg:text-base">Instagram</p>
                  </Link>
                </li>
                <li>
                  <Link
                    href="https://tiktok.com"
                    className="flex items-center gap-2"
                    target="_blank"
                  >
                    <FaTiktok className="text-2xl" />
                    <p className="text-sm lg:text-base">Tiktok</p>
                  </Link>
                </li>
              </ul>
            </section>
          </div>
        </section>
      </Container>
    </footer>
  );
};

export default Footer;
