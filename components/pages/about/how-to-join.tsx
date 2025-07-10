import { Container } from "@/components/index";
import React from "react";

interface Step {
  number: number;
  title: string;
  description: string;
}

const steps: Step[] = [
  {
    number: 1,
    title: "Check Open Roles 🔍",
    description:
      "Browse available volunteer or staff opportunities at our shelter.",
  },
  {
    number: 2,
    title: "Submit an Application 📝",
    description:
      "Fill out the application form with your background, experience, and availability.",
  },
  {
    number: 3,
    title: "Interview with Our Team 🗣️",
    description:
      "We'll schedule a short interview to get to know you and discuss how you can help.",
  },
  {
    number: 4,
    title: "Attend Orientation 📚",
    description:
      "Join our onboarding session to learn about responsibilities, safety, and procedures.",
  },
  {
    number: 5,
    title: "Start Making a Difference ❤️",
    description:
      "Join the team, meet the animals, and begin contributing to their care and wellbeing.",
  },
];

const HowToJoin = () => {
  return (
    <section>
      <Container className="space-y-12">
        <h2 className="text-center text-2xl font-black lg:text-3xl">
          How Join To Us?
        </h2>
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3 lg:gap-12">
          {steps.map(({ number, title, description }: Step) => (
            <div
              key={number}
              className="flex flex-col items-center space-y-4 text-center"
            >
              <div className="flex h-16 w-16 items-center justify-center rounded-full bg-pink-600 text-xl font-bold text-white shadow-lg">
                {number}
              </div>
              <h3 className="font-semibold">{title}</h3>
              <p className="text-sm lg:text-base dark:opacity-80">
                {description}
              </p>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
};

export default HowToJoin;
