import React from "react";

type Props = {
  released: string;
  title: string;
  bio: string;
};

const GridBlogCard = ({ released, title, bio }: Props) => {
  return (
    <div className="space-y-4">
      <section className="aspect-video rounded-2xl bg-neutral-800"></section>
      <section className="flex justify-between">
        <div>
          <p className="text-xs">{released}</p>
          <h3 className="text-sm font-bold">{title}</h3>
          <p className="text-xs opacity-80">{bio}</p>
        </div>
        <div></div>
      </section>
    </div>
  );
};

export default GridBlogCard;
