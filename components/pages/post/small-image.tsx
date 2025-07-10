"use client";

import React, { useState } from "react";
import Image from "next/image";

interface Props {
  url: string;
  alt: string;
}

const SmallImage = ({ url, alt }: Props) => {
  const [showFullSize, setShowFullSize] = useState<boolean>(false);

  return (
    <div className="relative aspect-video rounded-2xl bg-neutral-800">
      <Image
        src={url}
        width={900}
        height={600}
        alt={alt}
        className="absolute h-full w-full rounded-2xl object-cover object-center"
      />
      <div
        onClick={() => setShowFullSize(true)}
        className="absolute h-full w-full cursor-pointer rounded-2xl bg-black/40 duration-400 hover:bg-black/0"
      ></div>
      {/* Fullsize image by click */}
      {showFullSize ? (
        <div
          onClick={() => setShowFullSize(false)}
          className="fixed top-0 left-0 z-20 flex h-screen w-screen items-center justify-center bg-black/40 px-6 backdrop-blur-md"
        >
          <div className="relative aspect-video w-full max-w-4xl rounded-2xl">
            <Image
              src={url}
              alt={alt}
              fill
              className="absolute rounded-2xl object-cover object-center"
            />
          </div>
        </div>
      ) : null}
    </div>
  );
};

export default SmallImage;
