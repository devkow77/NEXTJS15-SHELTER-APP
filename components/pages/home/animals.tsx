import { AnimalSelector, Container } from "@/components/index";
import React from "react";
import Image from "next/image";
import { Button } from "@/components/ui/button";

interface Animal {
  img: string;
  alt: string;
  name: string;
  age: string;
  days: string;
}

const animals: Animal[] = [
  {
    img: "/dog2.jpg",
    alt: "dog",
    name: "Brutus",
    age: "3 Years 2 Months",
    days: "102",
  },
  {
    img: "/cat2.jpg",
    alt: "cat",
    name: "Burek",
    age: "4 Years 6 Months",
    days: "203",
  },
  {
    img: "/rabbit2.jpg",
    alt: "rabbit",
    name: "Skoczek",
    age: "1 Years 0 Months",
    days: "70",
  },
  {
    img: "/dog3.jpg",
    alt: "dog",
    name: "Charlie",
    age: "4 Years 8 Months",
    days: "210",
  },
  {
    img: "/cat3.jpg",
    alt: "cat",
    name: "Felix",
    age: "2 Years 3 Months",
    days: "124",
  },
];

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
          <p className="text-sm font-semibold lg:text-base">
            Click on card to show details!
          </p>
        </div>
        <AnimalSelector />
        <section className="relative grid grid-cols-1 gap-x-3 gap-y-6 overflow-hidden md:grid-cols-3 xl:gap-6">
          {animals.map(
            ({ img, alt, name, age, days }: Animal, index: number) => (
              <div className="space-y-2" key={index}>
                <div className="relative aspect-video rounded-3xl">
                  <Image
                    src={img}
                    loading="lazy"
                    alt={alt}
                    width={400}
                    height={400}
                    className="absolute h-full w-full rounded-3xl object-cover object-center dark:opacity-80"
                  />
                  <div className="absolute flex h-full w-full cursor-pointer items-end justify-between gap-2 rounded-3xl bg-black/70 p-4 text-white opacity-0 duration-200 hover:opacity-100">
                    <div className="text-sm lg:text-base">
                      <h3 className="font-bold">{name}</h3>
                      <p>Age: {age}</p>
                      <p>Days in cell: {days}</p>
                    </div>
                    <Button variant={"green"}>Adopt me</Button>
                  </div>
                </div>
              </div>
            ),
          )}
        </section>
        <Button variant={"green"}>Check All Animals</Button>
      </Container>
    </section>
  );
};

export default Animals;
