import React from "react";

interface ButtonNavProps {
  title: string;
}

export const ButtonNav: React.FC<ButtonNavProps> = ({ title }) => {
  return (
    <button className="px-4 py-2">
      <p className="hover:text-shadow hover:text-light-100 text-light-300 text-base">
        {title}
      </p>
    </button>
  );
};
