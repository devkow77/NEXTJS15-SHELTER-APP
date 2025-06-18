import { AnimalSelector, Container } from "@/components/index";
import React from "react";
import Image from "next/image";
import { Button } from "@/components/ui/button";

const Animals = () => {
  return (
    <section>
      <Container className="space-y-6">
        <div className="space-y-2">
          <h2 className="text-2xl font-black lg:text-3xl">
            They Are Waiting The{" "}
            <span className="text-green-600">Most Time</span>
          </h2>
          <p className="text-sm leading-6 opacity-80 lg:text-base lg:leading-8">
            Among our residents are animals who, despite their gentle hearts and
            loyal eyes, are still waiting for a forever home. Day after day,
            they patiently hope for someone to give them a second chance. Meet
            the ones who need love the most.
          </p>
        </div>
        <AnimalSelector />
        <section className="grid grid-cols-2 gap-x-3 gap-y-6 sm:grid-cols-3 lg:grid-cols-4 lg:gap-6">
          {Array.from({ length: 7 }).map((_, index) => (
            <div className="space-y-2" key={index}>
              <div className="relative aspect-video rounded-2xl bg-black/10">
                <Image
                  src="/cat.avif"
                  alt="pet"
                  width={400}
                  height={400}
                  className="absolute h-full w-full rounded-2xl object-cover object-center dark:opacity-80"
                />
                <div className="absolute flex h-full w-full cursor-pointer items-center justify-center rounded-2xl bg-green-950/60 opacity-0 duration-200 hover:opacity-100">
                  <Button variant={"check"}>Adopt me</Button>
                </div>
              </div>
              <div className="text-xs font-medium lg:text-sm">
                <div className="flex items-center gap-2">
                  <h3 className="text-sm font-bold lg:text-base">Brutus</h3>
                  <p className="hidden sm:inline-block">Likes to be petted</p>
                </div>
                <p>&#40;Days in cell: 175&#41;</p>
              </div>
            </div>
          ))}
        </section>
      </Container>
    </section>
  );
};

export default Animals;
