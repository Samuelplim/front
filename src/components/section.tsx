import React, { ReactNode } from "react";

interface SectionProps {
  title?: string;
  children: ReactNode;
  hidden?: boolean;
}

export const Section: React.FC<SectionProps> = ({
  title,
  children,
  hidden,
}) => {
  return (
    <section className="bg-dark-400 px-4 py-2" hidden={hidden}>
      <p className=" text-light-300 lg:text-2xl text-xl mb-4">{title}</p>
      {children}
    </section>
  );
};
