import { Container } from "@/components/index";
import React from "react";

const VideoBaner = () => {
  return (
    <section>
      <Container className="space-y-6 lg:space-y-12">
        <h2 className="text-center text-2xl font-black md:text-left lg:text-3xl">
          Watch Us On YT!
        </h2>
        <div className="gap-8 md:flex lg:gap-12">
          <p className="hidden w-1/2 text-sm leading-8 md:block xl:text-base dark:opacity-80">
            Discover more about our journey, values, and behind-the-scenes
            stories by watching our videos on YouTube. We share insights,
            tutorials, and updates that go beyond what you see on our website.
            Don’t miss out subscribe and stay connected with everything we do!
          </p>
          <div className="aspect-video rounded-2xl md:w-1/2 md:rounded-4xl">
            <iframe
              src={`https://www.youtube.com/embed/MlRvGKJXifY`}
              title="YouTube video player"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
              className="l h-full w-full rounded-2xl shadow-lg md:rounded-4xl"
            />
          </div>
        </div>
      </Container>
    </section>
  );
};

export default VideoBaner;
