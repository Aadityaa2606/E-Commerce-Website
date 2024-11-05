import React from "react";

interface SubHeaderProps {
  heading: string;
}

export const SubHeader: React.FC<SubHeaderProps> = ({ heading }) => {
  return (
    <div className="flex gap-2">
      <div className="w-5 bg-red-500 rounded-[5px]" />
      <h4 className="py-2 font-bold text-red-500"> {heading} </h4>
    </div>
  );
};
