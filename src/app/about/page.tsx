import React from "react";
import Image from "next/image";

const About: React.FC = () => {
  return (
    <div className="w-[85%] mx-auto px-6 py-12 space-y-16">
      {/* Our Story Section */}
      <section className="text-center space-y-6 flex h-[600px]">
        <div className="w-4/6 space-y-6 text-left flex-row items-start">
          <h1 className="text-3xl font-bold">Our Story</h1>
          <p className="text-black max-w-md ">
            Launced in 2015, Exclusive is South Asia’s premier online shopping
            makterplace with an active presense in Bangladesh. Supported by wide
            range of tailored marketing, data and service solutions, Exclusive
            has 10,500 sallers and 300 brands and serves 3 millioons customers
            across the region.
          </p>
          <p className="text-back max-w-md ">
            Exclusive has more than 1 Million products to offer, growing at a
            very fast. Exclusive offers a diverse assotment in categories
            ranging from consumer.
          </p>
        </div>
        <div className="relative w-full  rounded-lg mx-auto">
          {/* Placeholder for main image */}
          <Image
            src="./about-hero.svg"
            alt="Our Story Image"
            layout="fill"
            objectFit="cover"
          />
        </div>
      </section>

      {/* Stats Section */}
      <section className="grid grid-cols-2 md:grid-cols-4 gap-4 text-center">
        <div className="p-6 bg-gray-100 rounded-lg flex flex-col  space-y-2 items-center">
          <Image src="./services/1.svg" alt="icon" width={50} height={50} />
          <h2 className="text-2xl font-bold">10.5k</h2>
          <p className="text-gray-600">Satisfied customers</p>
        </div>
        <div className="p-6 bg-red-500 rounded-lg flex flex-col  space-y-2 items-center">
          <Image src="./services/2.svg" alt="icon" width={50} height={50} />
          <h2 className="text-2xl font-bold">33k</h2>
          <p>Monthly product sales</p>
        </div>
        <div className="p-6 bg-gray-100 rounded-lg flex flex-col  space-y-2 items-center">
          <Image src="./services/f3.svg" alt="icon" width={50} height={50} />
          <h2 className="text-2xl font-bold">45.5k</h2>
          <p className="text-gray-600">Customer visits per site</p>
        </div>
        <div className="p-6 bg-gray-100 rounded-lg flex flex-col  space-y-2 items-center">
          <Image src="./services/4.svg" alt="icon" width={50} height={50} />
          <h2 className="text-2xl font-bold">25k</h2>
          <p className="text-gray-600">Global store reach</p>
        </div>
      </section>

      {/* Team Section */}
      <section className="space-y-6 text-center">
        <h2 className="text-3xl font-bold">Our Team</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {/* Team Member 1 */}
          <div className="space-y-3">
            <div className="relative w-full h-[550px] bg-gray-200 rounded-lg">
              {/* Placeholder for profile image */}
              <Image
                src="/image 46.svg"
                alt="Tom Cruise"
                layout="fill"
                // objectFit="cover"
              />
            </div>
            <h3 className="text-xl font-bold">Tom Cruise</h3>
            <p className="text-gray-600">Founder & CEO</p>
            <div className="flex justify-center space-x-4">
              {/* Placeholder for social media icons */}
              <span className="bg-gray-300 p-2 rounded-full">LinkedIn</span>
              <span className="bg-gray-300 p-2 rounded-full">Twitter</span>
            </div>
          </div>

          {/* Team Member 2 */}
          <div className="space-y-3">
            <div className="relative w-full h-[550px] bg-gray-200 rounded-lg">
              <Image
                src="/image 51.svg"
                alt="Emma Watson"
                layout="fill"
                // objectFit="cover"
              />
            </div>
            <h3 className="text-xl font-bold">Emma Watson</h3>
            <p className="text-gray-600">Managing Director</p>
            <div className="flex justify-center space-x-4">
              <span className="bg-gray-300 p-2 rounded-full">LinkedIn</span>
              <span className="bg-gray-300 p-2 rounded-full">Twitter</span>
            </div>
          </div>

          {/* Team Member 3 */}
          <div className="space-y-3">
            <div className="relative w-full h-[550px] bg-gray-200 rounded-lg">
              <Image
                src="/image 47.svg"
                alt="Will Smith"
                layout="fill"
                // objectFit="cover"
              />
            </div>
            <h3 className="text-xl font-bold">Will Smith</h3>
            <p className="text-gray-600">Product Designer</p>
            <div className="flex justify-center space-x-4">
              <span className="bg-gray-300 p-2 rounded-full">LinkedIn</span>
              <span className="bg-gray-300 p-2 rounded-full">Twitter</span>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="grid grid-cols-1 md:grid-cols-3 gap-6 text-center">
        <div className="p-6 bg-gray-100 rounded-lg flex-col flex items-center gap-6">
          <Image src="./Services.svg" alt="icon" width={50} height={50} />
          <h3 className="text-xl font-bold">Free and Fast Delivery</h3>
          <p className="text-gray-600">Across the country</p>
        </div>

        <div className="p-6 bg-gray-100 rounded-lg flex-col flex items-center gap-6">
          <Image src="./Services-1.svg" alt="icon" width={50} height={50} />
          <h3 className="text-xl font-bold">24/7 Customer Service</h3>
          <p className="text-gray-600">Always here to help</p>
        </div>

        <div className="p-6 bg-gray-100 rounded-lg flex-col flex items-center gap-6">
          <Image src="./Services-2.svg" alt="icon" width={50} height={50} />
          <h3 className="text-xl font-bold">Money Back Guarantee</h3>
          <p className="text-gray-600">No questions asked</p>
        </div>
      </section>
    </div>
  );
};

export default About;
