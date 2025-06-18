import { AnimalSelector, Container } from "@/components/index";
import React from "react";
import Image from "next/image";
import { Button } from "@/components/ui/button";

const Animals = () => {
  return (
    <section className="bg-black/5 py-12 dark:bg-white/5">
      <Container className="space-y-6">
        <div className="space-y-2">
          <h2 className="text-2xl font-black lg:text-3xl">
            They Are Waiting The{" "}
            <span className="text-green-600">Most Time</span>
          </h2>
          <p className="text-sm leading-6 lg:text-base lg:leading-8 dark:opacity-80">
            Among our residents are animals who, despite their gentle hearts and
            loyal eyes, are still waiting for a forever home. Day after day,
            they patiently hope for someone to give them a second chance. Meet
            the ones who need love the most.
          </p>
        </div>
        <AnimalSelector />
        <section className="grid grid-cols-2 gap-x-3 gap-y-6 sm:grid-cols-3 lg:gap-x-6 lg:gap-y-10">
          {Array.from({ length: 7 }).map((_, index) => (
            <div className="space-y-2" key={index}>
              <div className="relative aspect-video rounded-2xl">
                <Image
                  src="/cat.avif"
                  alt="pet"
                  width={400}
                  height={400}
                  className="absolute h-full w-full rounded-2xl object-cover object-center dark:opacity-80"
                />
                <div className="absolute flex h-full w-full cursor-pointer items-center justify-center rounded-2xl bg-white/10 opacity-0 duration-200 hover:opacity-100">
                  <Button variant={"check"}>Adopt me</Button>
                </div>
              </div>
              <div className="text-xs font-medium lg:text-sm">
                <div className="flex items-center gap-2">
                  <h3 className="text-sm font-bold lg:text-base">Burek</h3>
                  <p className="hidden sm:inline-block">
                    &#40;Likes to be petted&#41;
                  </p>
                </div>
                <p>Days in cell: 175</p>
              </div>
            </div>
          ))}
        </section>
      </Container>
    </section>
  );
};

export default Animals;
