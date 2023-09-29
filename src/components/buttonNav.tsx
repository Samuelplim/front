import React from "react";

interface ButtonNavProps {
  title: string;
}

export const ButtonNav: React.FC<ButtonNavProps> = ({ title }) => {
  return (
    <button className="bg-gray-500 hover:bg-slate-400 text-white px-4 py-2">
      {title}
    </button>
  );
};
