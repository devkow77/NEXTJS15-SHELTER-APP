import React from "react";
import { Container } from "@/components/index";
import Image from "next/image";

const Baner = () => {
  return (
    <section>
      <div className="relative mx-auto h-50 w-full max-w-7xl rounded-2xl bg-neutral-800 sm:h-75 lg:h-100">
        <Image
          src="/dog6.jpg"
          alt="cat"
          fill
          loading="lazy"
          className="absolute rounded-2xl bg-fixed object-cover"
        />
      </div>
    </section>
  );
};

export default Baner;
