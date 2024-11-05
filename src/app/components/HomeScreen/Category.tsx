"use client";
import React, { useRef } from "react";
import Image from "next/image";
import { SubHeader } from "../SubHeader";

interface CategroyProps {
  categories: {
    imageSrc: string;
    name: string;
  }[];
}

export const Category: React.FC<CategroyProps> = ({ categories }) => {
  const carouselRef = useRef<HTMLDivElement>(null);

  const scrollLeft = () => {
    if (carouselRef.current) {
      carouselRef.current.scrollBy({ left: -300, behavior: "smooth" });
    }
  };

  const scrollRight = () => {
    if (carouselRef.current) {
      carouselRef.current.scrollBy({ left: 300, behavior: "smooth" });
    }
  };

  return (
    <div className="relative w-full">
      <SubHeader heading="Categories" />
      <div className="flex items-center justify-between mt-4 mb-10">
        <h1 className="text-4xl font-bold">Browse By Category</h1>
        <div className="space-x-3">
          <button
            onClick={scrollLeft}
            className=" bg-secondary border-gray-300 rounded-full p-2 hover:bg-gray-100"
          >
            <Image
              src="./arrow-right.svg"
              alt="store"
              width={30}
              height={30}
              style={{ transform: "rotate(180deg)" }}
            />
          </button>
          <button
            onClick={scrollRight}
            className=" bg-secondary border-gray-300 rounded-full p-2 hover:bg-gray-100"
          >
            <Image src="./arrow-right.svg" alt="store" width={30} height={30} />
          </button>
        </div>
      </div>
      <div className="relative flex items-center w-full overflow-hidden">
        <div
          ref={carouselRef}
          className="flex space-x-4 overflow-x-scroll scroll-smooth py-4 w-full no-scrollbar"
        >
          {categories.map((category, index) => (
            <div
              className="w-44 h-40 border-borderColor border rounded-[4px] flex flex-col justify-center items-center  flex-shrink-0"
              key={index}
            >
              <Image
                src={category.imageSrc}
                alt={category.name}
                width={50}
                height={50}
              />
              <p>{category.name}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
