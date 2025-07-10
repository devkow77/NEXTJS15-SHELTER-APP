import { Container } from "@/components/index";
import React from "react";
import Image from "next/image";

interface Worker {
  name: string;
  specialization: string;
  profile: {
    url: string;
  };
}

interface Query {
  owners: Worker[];
  staff: Worker[];
  adoption: Worker[];
}

const query = `query getWorkers{
  owners: workers(where: { group_in: [owners]}){
    name
    specialization
    profile{
      url
    }
  }
  staff: workers(where: { group_in: [staff]}){
    name
    specialization
    profile{
      url
    }
  }
  adoption: workers(where: { group_in: [adoptionCoordinators]}){
    name
    specialization
    profile{
      url
    }
  }
}`;

const getWorkers = async () => {
  const response = await fetch(process.env.NEXT_PUBLIC_HYGRAPH_ENDPOINT!, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ query }),
  });

  const json = await response.json();

  return {
    owners: json.data.owners,
    staff: json.data.staff,
    adoption: json.data.adoption,
  };
};

const Team = async () => {
  const { owners, staff, adoption }: Query = await getWorkers();

  return (
    <section id="team">
      <Container className="space-y-6 lg:space-y-12">
        <div className="space-y-3 lg:space-y-6">
          <h2 className="text-2xl font-black lg:text-3xl">
            They Create Our Team
          </h2>
          <p className="text-sm leading-6 lg:text-base lg:leading-8">
            Our team is a passionate group of designers, developers, and
            strategists dedicated to turning ideas into reality. With a shared
            love for innovation and craftsmanship, we build digital experiences
            that inspire, engage, and deliver real results. Every project is a
            collaboration — and we wouldn’t have it any other way.
          </p>
        </div>
        <div className="space-y-6">
          <h3 className="text-lg font-black lg:text-xl">Owners</h3>
          <section className="grid grid-cols-2 gap-4 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 lg:gap-6">
            {owners.map(
              (
                { name, specialization, profile: { url } }: Worker,
                index: number,
              ) => (
                <div key={index} className="space-y-4">
                  <div className="relative aspect-square w-full rounded-2xl bg-neutral-800">
                    <Image
                      src={url}
                      alt={name}
                      fill
                      className="absolute rounded-2xl object-cover object-center"
                    />
                  </div>
                  <div>
                    <h4 className="text-sm font-bold lg:text-base">{name}</h4>
                    <p className="text-xs opacity-80 lg:text-sm">
                      {specialization}
                    </p>
                  </div>
                </div>
              ),
            )}
          </section>
        </div>
        <div className="space-y-6">
          <h3 className="text-lg font-black lg:text-xl">Staff</h3>
          <section className="grid grid-cols-2 gap-4 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 lg:gap-6">
            {staff.map(
              (
                { name, specialization, profile: { url } }: Worker,
                index: number,
              ) => (
                <div key={index} className="space-y-4">
                  <div className="relative aspect-square w-full rounded-2xl bg-neutral-800">
                    <Image
                      src={url}
                      alt={name}
                      fill
                      className="absolute rounded-2xl object-cover object-center"
                    />
                  </div>
                  <div>
                    <h4 className="text-sm font-bold lg:text-base">{name}</h4>
                    <p className="text-xs opacity-80 lg:text-sm">
                      {specialization}
                    </p>
                  </div>
                </div>
              ),
            )}
          </section>
        </div>
        <div className="space-y-6">
          <h3 className="text-lg font-black lg:text-xl">
            Adoption Coordinators
          </h3>
          <section className="grid grid-cols-2 gap-4 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 lg:gap-6">
            {adoption.map(
              (
                { name, specialization, profile: { url } }: Worker,
                index: number,
              ) => (
                <div key={index} className="space-y-4">
                  <div className="relative aspect-square w-full rounded-2xl bg-neutral-800">
                    <Image
                      src={url}
                      alt={name}
                      fill
                      className="absolute rounded-2xl object-cover object-center"
                    />
                  </div>
                  <div>
                    <h4 className="text-sm font-bold lg:text-base">{name}</h4>
                    <p className="text-xs opacity-80 lg:text-sm">
                      {specialization}
                    </p>
                  </div>
                </div>
              ),
            )}
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
