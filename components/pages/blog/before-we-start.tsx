import React from "react";
import { Container } from "@/components/index";

const BeforeWeStart = () => {
  return (
    <section>
      <Container className="text-right">
        <div className="space-y-3 lg:space-y-6">
          <h2 className="text-2xl font-black lg:text-3xl">Before We Start</h2>
          <p className="text-sm leading-6 lg:text-base lg:leading-8">
            Welcome to our blog — a space where stories come to life. Here, we
            share heartwarming adoption tales, behind-the-scenes glimpses of
            shelter life, and helpful tips on caring for your furry companions.
            Whether you're a pet lover, a future adopter, or just curious,
            there's something here for you. Because every voice matters — even
            the ones that bark or pur
          </p>
        </div>
      </Container>
    </section>
  );
};

export default BeforeWeStart;
