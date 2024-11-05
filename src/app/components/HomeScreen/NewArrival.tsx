import React from "react";
import { SubHeader } from "../SubHeader";
import Image from "next/image";

function NewArrival() {
  return (
    <div className="w-full">
      <SubHeader heading="Featured" />
      <h1 className="text-2xl md:text-4xl font-bold mt-4">New Arrival</h1>
      <div className="mt-5 flex flex-col md:flex-row md:space-x-10 space-y-5 md:space-y-0">
        <div className="relative w-full md:w-1/2 h-[400px] md:h-[600px] bg-black">
          <Image src="./newArrivals/ps5.svg" alt="ps5" layout="fill" />
        </div>
        <div className="w-full md:w-1/2 space-y-5 md:space-y-10">
          <div className="w-full h-[200px] md:h-[280px] bg-[#0d0d0d] relative">
            <div className="absolute right-0 top-0 w-1/2 h-full">
              <Image
                src="./newArrivals/women.svg"
                alt="women"
                layout="fill"
                objectFit="cover"
              />
            </div>
          </div>

          <div className="flex flex-col md:flex-row md:space-x-10 space-y-5 md:space-y-0">
            <div className="w-full md:w-1/2 h-[200px] md:h-[280px] bg-black relative">
              <Image
                src="./newArrivals/speaker.svg"
                alt="women"
                layout="fill"
              />
            </div>
            <div className="w-full md:w-1/2 h-[200px] md:h-[280px] bg-black relative">
              <div className="absolute inset-0 p-4">
                {" "}
                {/* Add padding here */}
                <Image
                  src="./newArrivals/perfume.svg"
                  alt="women"
                  layout="fill"
                  objectFit="contain" // Maintain aspect ratio while padding
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default NewArrival;
