import React from "react";
import { Header, Team, Baner, HowToJoin } from "@/components/pages/about";

const About = () => {
  return (
    <main className="space-y-16 lg:space-y-32">
      <Header />
      <Team />
      <Baner />
      <HowToJoin />
    </main>
  );
};

export default About;
