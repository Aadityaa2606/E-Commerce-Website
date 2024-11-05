"use client";
import Link from "next/link";
import { useState, useEffect } from "react";
import Image from "next/image";

const HeroSection = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const slides = [
    {
      text: "iPhone 14 Series",
      discount: "Up to 10% off Voucher",
      brand: "Apple",
    },
    {
      text: "Samsung Galaxy Series",
      discount: "Up to 15% off Voucher",
      brand: "Samsung",
    },
    {
      text: "Google Pixel Series",
      discount: "Up to 12% off Voucher",
      brand: "Google",
    },
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prevSlide) => (prevSlide + 1) % slides.length);
    }, 2000);
    return () => clearInterval(interval);
  }, [slides.length]);

  return (
    <div className="w-[85%] flex items-center mb-20">
      {/* Left Menu */}
      <div className="w-1/5 mr-10 border-r border-borderColor pt-8 pb-2 mt-0">
        <ul className="space-y-4 text-black">
          <li className="flex flex-col">
            <Link
              href="/#"
              className="hover:underline flex flex-row justify-between mr-8"
            >
              Woman’s Fashion
              <Image
                src="./DropRight.svg"
                alt="drop-right"
                width={20}
                height={20}
              />
            </Link>
          </li>
          <li>
            <Link
              href="/#"
              className="hover:underline flex flex-row justify-between mr-8"
            >
              Men’s Fashion
              <Image
                src="./DropRight.svg"
                alt="drop-right"
                width={20}
                height={20}
              />
            </Link>
          </li>
          <li>
            <Link href="/#" className="hover:underline">
              Electronics
            </Link>
          </li>
          <li>
            <Link href="/#" className="hover:underline">
              Home & Lifestyle
            </Link>
          </li>
          <li>
            <Link href="/#" className="hover:underline">
              Medicine
            </Link>
          </li>
          <li>
            <Link href="/#" className="hover:underline">
              Sports & Outdoor
            </Link>
          </li>
          <li>
            <Link href="/#" className="hover:underline">
              Baby’s & Toys
            </Link>
          </li>
          <li>
            <Link href="/#" className="hover:underline">
              Groceries & Pets
            </Link>
          </li>
          <li>
            <Link href="/#" className="hover:underline">
              Health & Beauty
            </Link>
          </li>
        </ul>
      </div>

      {/* Carousel Section */}
      <div className="w-full relative bg-black text-white py-12 px-12 mt-8 overflow-hidden">
        <div className="flex justify-between items-center">
          <div>
            <div className="flex items-center gap-4 mb-5">
              <Image src="/Apple-logo.svg" alt="Apple" width={30} height={30} />
              <p className="text-md pt-2">{slides[currentSlide].text}</p>
            </div>

            <h2 className="text-5xl font-bold mb-1">
              {slides[currentSlide].text}
            </h2>
            <p className="text-3xl font-semibold">
              {slides[currentSlide].discount}
            </p>
            <button className="mt-4 pr-4 py-2 text-white flex flex-row gap-2 items-center underline">
              Shop Now
              <Image
                src="./arrow-right-white.svg"
                alt="Arrow Right"
                width={20}
                height={20}
              />
            </button>
          </div>
          {/* Placeholder for Image */}
          <div className="w-1/2 h-64 mb-5 bg-gray-300 rounded-md flex items-center justify-center">
            <p className="text-gray-500">Image Placeholder</p>
          </div>
        </div>

        {/* Carousel indicators */}
        <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-2">
          {slides.map((_, index) => (
            <span
              key={index}
              className={`h-2 w-2 rounded-full ${
                index === currentSlide ? "bg-red-500" : "bg-gray-400"
              }`}
            ></span>
          ))}
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
