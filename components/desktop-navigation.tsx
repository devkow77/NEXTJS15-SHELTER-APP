"use client";

import * as React from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";

import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu";

const animals: { title: string; href: string; description: string }[] = [
  {
    title: "Dogs",
    href: "/animals/dogs",
    description:
      "Loyal companions known for their playful nature and strong bond with humans.",
  },
  {
    title: "Cats",
    href: "/animals/cats",
    description:
      "Independent yet affectionate animals, often admired for their elegance and curiosity.",
  },
  {
    title: "Rabbits",
    href: "/animals/rabbits",
    description:
      "Gentle, quiet creatures with soft fur and a love for hopping around.",
  },
  {
    title: "Other",
    href: "/animals/other",
    description:
      "Explore a variety of unique animals that don’t fit into the usual categories.",
  },
];

export function DesktopNavigation() {
  const pathname = usePathname();

  return (
    <NavigationMenu viewport={false} className="hidden xl:block">
      <NavigationMenuList>
        {/* HOME */}
        <NavigationMenuItem>
          <NavigationMenuLink
            asChild
            className={`${pathname == "/" ? "text-pink-400" : ""} ${navigationMenuTriggerStyle()}`}
          >
            <Link href="/">Home</Link>
          </NavigationMenuLink>
        </NavigationMenuItem>
        {/* HOME */}
        <NavigationMenuItem>
          <NavigationMenuLink asChild className={navigationMenuTriggerStyle()}>
            <Link href="/about">Who are we?</Link>
          </NavigationMenuLink>
        </NavigationMenuItem>
        {/* ANIMALS */}
        <NavigationMenuItem>
          <NavigationMenuTrigger>Animals</NavigationMenuTrigger>
          <NavigationMenuContent>
            <ul className="grid w-[300px] gap-4">
              {animals.length
                ? animals.map(({ title, href, description }, index) => (
                    <NavigationMenuLink asChild key={index}>
                      <Link href={href}>
                        <div className="font-medium">{title}</div>
                        <div className="text-muted-foreground">
                          {description}
                        </div>
                      </Link>
                    </NavigationMenuLink>
                  ))
                : null}
            </ul>
          </NavigationMenuContent>
        </NavigationMenuItem>
        {/* BLOG */}
        <NavigationMenuItem>
          <NavigationMenuLink asChild className={navigationMenuTriggerStyle()}>
            <Link href="/blog">Blog</Link>
          </NavigationMenuLink>
        </NavigationMenuItem>
        {/* CONTACT */}
        <NavigationMenuItem>
          <NavigationMenuLink asChild className={navigationMenuTriggerStyle()}>
            <Link href="/contact">Contact</Link>
          </NavigationMenuLink>
        </NavigationMenuItem>
      </NavigationMenuList>
    </NavigationMenu>
  );
}

function ListItem({
  title,
  children,
  href,
  ...props
}: React.ComponentPropsWithoutRef<"li"> & { href: string }) {
  return (
    <li {...props}>
      <NavigationMenuLink asChild>
        <Link href={href}>
          <div className="text-sm leading-none font-medium">{title}</div>
          <p className="text-muted-foreground line-clamp-2 text-sm leading-snug">
            {children}
          </p>
        </Link>
      </NavigationMenuLink>
    </li>
  );
}
