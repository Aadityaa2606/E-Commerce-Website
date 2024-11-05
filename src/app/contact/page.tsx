import React from "react";
import Image from "next/image";
import Link from "next/link";

export default function ContactPage() {
  return (
    <div className="flex flex-col items-center justify-center">
      <nav className="w-[85%] mt-10 font-light">
        <Link href="/" className="text-text2">
          Home
        </Link>{" "}
        / Contact
      </nav>
      <div className="flex justify-center items-center mb-20 mt-20">
        <div className="flex flex-col md:flex-row bg-gray-50 p-6 rounded-lg gap-6">
          {/* Left Section */}
          <div className="w-full md:w-1/3 bg-white p-6 rounded-lg">
            {/* Call to Us Section */}
            <div className="mb-6 space-y-4">
              <div className="flex items-center space-x-3">
                <div className="bg-red-500 p-2 py-3 rounded-full">
                  <Image
                    src="./mail.svg"
                    alt="Mail Icon"
                    width={24}
                    height={24}
                  />
                </div>
                <h3 className="font-semibold text-lg">Call To Us</h3>
              </div>
              <p className="text-sm text-gray-600 mt-2">
                We are available 24/7, 7 days a week.
              </p>
              <p className="text-sm font-medium mt-1">Phone: +880611112222</p>
            </div>
            <div className="border-b border-gray-300 my-10"></div>

            {/* Write to Us Section */}
            <div className="space-y-4">
              <div className="flex items-center space-x-3">
                <div className="bg-red-500 p-2 rounded-full">
                  <Image
                    src="./call.svg"
                    alt="Mail Icon"
                    width={24}
                    height={24}
                  />
                </div>
                <h3 className="font-semibold text-lg">Write To Us</h3>
              </div>
              <p className="text-sm text-gray-600 mt-2">
                Fill out our form and we will contact you within 24 hours.
              </p>
              <p className="text-sm font-medium mt-1">
                Emails: customer@exclusive.com
              </p>
              <p className="text-sm font-medium mt-1">
                Emails: support@exclusive.com
              </p>
            </div>
          </div>

          {/* Right Section (Form) */}
          <div className="w-full md:w-2/3 bg-white p-6 rounded-lg">
            <form className="space-y-4">
              <div className="flex flex-col md:flex-row gap-4">
                <input
                  type="text"
                  placeholder="Your Name *"
                  className="w-full bg-[#f5f5f5] p-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-red-500"
                  required
                />
                <input
                  type="email"
                  placeholder="Your Email *"
                  className="w-full bg-[#f5f5f5] p-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-red-500"
                  required
                />
                <input
                  type="tel"
                  placeholder="Your Phone *"
                  className="w-full bg-[#f5f5f5] p-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-red-500"
                  required
                />
              </div>
              <textarea
                placeholder="Your Message"
                className="w-full bg-[#f5f5f5] p-3 rounded-lg h-56 focus:outline-none focus:ring-2 focus:ring-red-500"
              ></textarea>
              <div className="flex justify-end">
                <button
                  type="submit"
                  className="bg-red-500 text-white font-semibold px-6 py-3 rounded-[4px] hover:bg-red-600"
                >
                  Send Message
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}
