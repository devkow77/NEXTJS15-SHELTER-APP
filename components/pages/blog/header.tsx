import React from "react";
import { Container } from "@/components/index";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import Image from "next/image";

const Header = () => {
  return (
    <header>
      <Container className="flex flex-col gap-10 sm:flex-row sm:gap-6">
        <section className="space-y-3 sm:w-1/2 lg:space-y-6">
          <h1 className="text-3xl font-black md:text-4xl lg:text-5xl">
            Blog The Latest <span className="text-blue-600">News</span>
          </h1>
          <p className="text-sm leading-6 lg:text-base lg:leading-8 dark:opacity-80">
            Welcome to our blog — a space where stories come to life. Here, we
            share heartwarming adoption tales, behind-the-scenes glimpses of
            shelter life, and helpful tips on caring for your furry companions.
            Whether you're a pet lover, a future adopter, or just curious,
            there's something here for you. Because every voice matters — even
            the ones that bark or pur
          </p>
          <Link href="/animals">
            <Button variant={"blue"}>Lets see 🩵</Button>
          </Link>
        </section>
        <section className="grid aspect-square grid-cols-2 gap-3 rounded-2xl sm:w-1/2 md:gap-6">
          <div className="relative rounded-xl bg-neutral-800">
            <Image
              alt="pet"
              width={600}
              height={600}
              src="/blog1.jpg"
              className="absolute h-full w-full rounded-xl object-cover object-center"
            />
          </div>
          <div className="relative rounded-xl bg-neutral-800">
            <Image
              alt="pet"
              width={600}
              height={600}
              src="/blog2.jpg"
              className="absolute h-full w-full rounded-xl object-cover object-center"
            />
          </div>
        </section>
      </Container>
    </header>
  );
};

export default Header;
