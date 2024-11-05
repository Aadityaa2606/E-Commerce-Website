"use client";
import React, { useRef } from "react";
import ProductCard from "../ProductCard";
import Image from "next/image";
import { SubHeader } from "../SubHeader";
import { CountdownTimer } from "./CountDownTimer";

interface Product {
  imageSrc: string;
  discount: number;
  name: string;
  productId: number;
  currentPrice: number;
  originalPrice: number;
  rating: number;
  reviews: number;
  persistentAddToCart?: boolean;
  isNew?: boolean;
  inWishlist?: boolean;
}

interface FlashDealsProps {
  products: Product[];
  endDate: Date; // The date when the flash sale ends
}

export const FlashDeals: React.FC<FlashDealsProps> = ({
  products,
  endDate,
}) => {
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
      <SubHeader heading="Today's" />
      <div className="flex items-center justify-between mt-4 mb-4">
        <div className="flex items-end gap-24">
          <h1 className="text-4xl font-bold">Flash Sales</h1>
          <CountdownTimer endDate={endDate} />
        </div>
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
          {products.map((product, index) => (
            <ProductCard
              key={index}
              {...product}
              inWishlist={false}
              persistentAddToCart={false}
              isNew={false}
            />
          ))}
        </div>
      </div>
      {/* View All Products Button */}
      <div className="w-full flex justify-center mt-10 font-semibold">
        <button className="p-4 px-6 bg-accent text-white rounded-[4px]">
          View All Products
        </button>
      </div>
    </div>
  );
};
