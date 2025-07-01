import { Container } from "@/components/index";
import React from "react";

const Team = () => {
  return (
    <section>
      <Container className="space-y-6 lg:space-y-12">
        <div className="space-y-3 lg:space-y-6">
          <h2 className="text-2xl font-black lg:text-3xl">
            They Create Our Team
          </h2>
          <p className="text-sm leading-6 lg:text-base lg:leading-8">
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Voluptatem
            laboriosam tempore expedita magni dolorem magnam minus, iste autem
            a! Obcaecati, ex ad natus tenetur nostrum voluptas quaerat explicabo
            sed, repellendus iste maiores assumenda soluta necessitatibus porro
            veniam consectetur doloribus odio.
          </p>
        </div>
        <div className="space-y-6">
          <h3 className="text-lg font-black lg:text-xl">Owners</h3>
          <section className="grid grid-cols-2 gap-4 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 lg:gap-6">
            {Array.from({ length: 3 }).map((_, index) => (
              <div key={index} className="space-y-4">
                <div className="aspect-square w-full rounded-2xl bg-neutral-800" />
                <div>
                  <h4 className="text-sm font-bold lg:text-base">
                    Josh Brownie
                  </h4>
                  <p className="text-xs opacity-80 lg:text-sm">
                    co-owner company
                  </p>
                </div>
              </div>
            ))}
          </section>
        </div>
        <div className="space-y-6">
          <h3 className="text-lg font-black lg:text-xl">Managment</h3>
          <section className="grid grid-cols-2 gap-4 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 lg:gap-6">
            {Array.from({ length: 5 }).map((_, index) => (
              <div key={index} className="space-y-4">
                <div className="aspect-square w-full rounded-2xl bg-neutral-800" />
                <div>
                  <h4 className="text-sm font-bold lg:text-base">
                    Elise Walker
                  </h4>
                  <p className="text-xs opacity-80 lg:text-sm">manager</p>
                </div>
              </div>
            ))}
          </section>
        </div>
        <div className="space-y-6">
          <h3 className="text-lg font-black lg:text-xl">Operationals Team</h3>
          <section className="grid grid-cols-2 gap-4 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 lg:gap-6">
            {Array.from({ length: 3 }).map((_, index) => (
              <div key={index} className="space-y-4">
                <div className="aspect-square w-full rounded-2xl bg-neutral-800" />
                <div>
                  <h4 className="text-sm font-bold lg:text-base">
                    Wiliam Bush
                  </h4>
                  <p className="text-xs opacity-80 lg:text-sm">receptionist</p>
                </div>
              </div>
            ))}
          </section>
        </div>
        <div className="space-y-2">
          <h3 className="text-lg font-black lg:text-xl">And You Volunteers</h3>
          <p className="text-sm lg:text-base">
            Our shelter would not exist without you volunteers ♥️
          </p>
        </div>
      </Container>
    </section>
  );
};

export default Team;
