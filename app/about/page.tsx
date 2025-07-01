import React from "react";
import { Header, Team, Baner } from "@/components/pages/about";

const About = () => {
  return (
    <main className="space-y-16 lg:space-y-32">
      <Header />
      <Team />
      <Baner />
    </main>
  );
};

export default About;
