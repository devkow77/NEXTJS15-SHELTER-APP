import React from "react";
import { twMerge } from "tailwind-merge";

type Props = {
  children: React.ReactNode;
  className?: string;
};

const Container = ({ children, className }: Props) => {
  return (
    <div className={`mx-auto max-w-7xl px-6 ${twMerge(className)}`}>
      {children}
    </div>
  );
};

export default Container;
