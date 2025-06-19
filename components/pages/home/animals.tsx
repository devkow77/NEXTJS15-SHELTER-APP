import { AnimalSelector, Container } from "@/components/index";
import React from "react";
import Image from "next/image";
import { Button } from "@/components/ui/button";

const Animals = () => {
  return (
    <section className="bg-black/3 from-neutral-950 via-green-950 to-neutral-950 py-12 dark:bg-gradient-to-b">
      <Container className="space-y-6">
        <div className="space-y-2">
          <h2 className="text-2xl font-black lg:text-3xl">
            They Are Waiting The Most Time
          </h2>
          <p className="text-sm leading-6 lg:text-base lg:leading-8 dark:opacity-80">
            Among our residents are animals who, despite their gentle hearts and
            loyal eyes, are still waiting for a forever home. Day after day,
            they patiently hope for someone to give them a second chance. Meet
            the ones who need love the most.
          </p>
          <p className="font-semibold">Click on card to show details!</p>
        </div>
        <AnimalSelector />
        <section className="relative grid grid-cols-1 gap-x-3 gap-y-6 overflow-hidden md:grid-cols-3 xl:gap-6">
          {Array.from({ length: 5 }).map((_, index) => (
            <div className="space-y-2" key={index}>
              <div className="relative aspect-video rounded-3xl">
                <Image
                  src="/cat.avif"
                  loading="lazy"
                  alt="pet"
                  width={400}
                  height={400}
                  className="absolute h-full w-full rounded-3xl object-cover object-center dark:opacity-80"
                />
                <div className="absolute flex h-full w-full cursor-pointer items-end justify-between gap-2 rounded-3xl bg-black/70 p-4 text-white opacity-0 duration-200 hover:opacity-100">
                  <div className="text-sm lg:text-base">
                    <h3 className="font-bold">Burek</h3>
                    <p>Age: 5 Years 4 Months</p>
                    <p>Days in cell: 178</p>
                  </div>
                  <Button variant={"check"}>Adopt me</Button>
                </div>
              </div>
            </div>
          ))}
        </section>
        <Button variant={"check"}>Check All Animals</Button>
      </Container>
    </section>
  );
};

export default Animals;
