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
            Who Are <span className="text-pink-600">We?</span>
          </h1>
          <p className="text-sm leading-6 lg:text-base lg:leading-8 dark:opacity-80">
            Our team includes experienced caretakers, veterinarians,
            behaviorists, and volunteers — all working together to ensure our
            animals receive the love, care, and attention they deserve. Each
            member plays a vital role in making sure every pet has a chance at a
            better life. We’re constantly learning and growing, so we can better
            understand and meet the needs of our furry residents — helping them
            heal both physically and emotionally.
          </p>
          <Link href="/animals">
            <Button variant={"pink"}>See our people ♥️</Button>
          </Link>
        </section>
        <section className="grid aspect-square grid-cols-2 grid-rows-2 gap-6 rounded-2xl sm:w-1/2">
          <div className="relative col-span-2 rounded-2xl bg-neutral-800">
            <Image
              alt="pet"
              width={800}
              height={600}
              src="/about1.jpg"
              className="absolute h-full w-full rounded-2xl object-cover object-center"
            />
          </div>
          <div className="relative col-span-2 rounded-2xl bg-neutral-800">
            <Image
              alt="pet"
              width={800}
              height={600}
              src="/about2.jpg"
              className="absolute h-full w-full rounded-2xl object-cover object-center"
            />
          </div>
        </section>
      </Container>
    </header>
  );
};

export default Header;
