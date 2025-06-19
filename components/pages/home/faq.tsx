import React from "react";
import { Container, FaqAccordion } from "@/components/index";

const Faq = () => {
  return (
    <section className="py-12 dark:bg-zinc-900">
      <Container className="space-y-6 xl:space-y-12">
        <h2 className="text-2xl font-black lg:text-3xl">
          The Most Popular Questions
        </h2>
        <FaqAccordion />
      </Container>
    </section>
  );
};

export default Faq;
