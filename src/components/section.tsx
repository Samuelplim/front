import React, { ReactNode } from "react";

interface SectionProps {
  title?: string;
  children: ReactNode;
}

export const Section: React.FC<SectionProps> = ({ title, children }) => {
  return (
    <section className="bg-dark-400 px-4 py-2">
      <p className="hover:text-shadow hover:text-light-100 text-light-300 text-2xl">
        {title}
      </p>
      {children}
    </section>
  );
};
