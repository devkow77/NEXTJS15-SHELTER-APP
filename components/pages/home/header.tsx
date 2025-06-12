import { Container } from "@/components/index";
import { Button } from "@/components/ui/button";
import React from "react";
import Image from "next/image";
import Link from "next/link";

const Header = () => {
  return (
    <header className="header-height from-neutral-950 to-pink-950 py-4 pb-8 md:py-16 dark:bg-gradient-to-b">
      <Container className="flex flex-col gap-10 sm:flex-row sm:gap-6">
        <section className="space-y-3 sm:w-1/2">
          <h1 className="text-3xl font-black md:text-4xl lg:text-5xl">
            Your New <span className="text-pink-400">Best Friend</span> Is
            Waiting
          </h1>
          <h2 className="text-sm leading-6 lg:text-base lg:leading-8 dark:opacity-80">
            Every day, countless animals wait in shelters for a second chance.
            Whether you seek a playful pup or a gentle cat, adoption begins a
            beautiful bond. Open your heart — and let your life be changed too.
          </h2>
          <Link href="/animals">
            <Button variant={"check"}>Meet the Animals 🐱</Button>
          </Link>
        </section>
        <section className="grid aspect-square grid-cols-2 gap-3 rounded-2xl sm:w-1/2 md:gap-6">
          <div className="relative rounded-4xl bg-neutral-800">
            <Image
              alt="pet"
              width={400}
              height={400}
              src="/dog.jpg"
              className="absolute h-full w-full rounded-4xl object-cover object-center"
            />
          </div>
          <div className="relative rounded-4xl bg-neutral-800">
            <Image
              alt="pet"
              width={400}
              height={400}
              src="/cat.avif"
              className="absolute h-full w-full rounded-4xl object-cover object-center"
            />
          </div>
          <div className="relative rounded-4xl bg-neutral-800">
            <Image
              alt="pet"
              width={400}
              height={400}
              src="/rabbit.jpg"
              className="absolute h-full w-full rounded-4xl object-cover object-center"
            />
          </div>
          <div className="relative rounded-4xl bg-neutral-800">
            <Image
              alt="pet"
              width={400}
              height={400}
              src="/snake.jpg"
              className="absolute h-full w-full rounded-4xl object-cover object-center"
            />
          </div>
        </section>
      </Container>
    </header>
  );
};

export default Header;
