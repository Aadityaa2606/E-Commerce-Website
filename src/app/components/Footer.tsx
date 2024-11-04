import React from "react";
import Image from "next/image";

const Footer = () => {
  return (
    <footer className="bg-black text-white pt-20 w-full">
      <div className="container mx-auto grid grid-cols-2 md:grid-cols-5 space-x-10">
        {/* Exclusive Section */}
        <div className="space-y-4">
          <h3 className="font-bold text-xl mb-4">Exclusive</h3>
          <p className="font-bold text-lg">Subscribe</p>
          <p>Get 10% off your first order</p>
          <div className="flex mt-2 border-2 border-white rounded-md justify-between w-60">
            <input
              type="email"
              placeholder="Enter your email"
              className="p-2 bg-[transparent] outline-none border-none w-full placeholder:text-gray-500"
            />
            <button className="px-4">
              <Image src="/icon-send.svg" alt="send" width={20} height={20} />
            </button>
          </div>
        </div>

        {/* Support Section */}
        <div className="space-y-4">
          <h3 className="font-bold text-lg mb-4">Support</h3>
          <p>111 Bijoy sarani, Dhaka, DH 1515, Bangladesh.</p>
          <p>exclusive@gmail.com</p>
          <p>+88015-88888-9999</p>
        </div>

        {/* Account Section */}
        <div className="space-y-4">
          <h3 className="font-bold text-lg mb-4">Account</h3>
          <ul className="space-y-4">
            <li>My Account</li>
            <li>Login / Register</li>
            <li>Cart</li>
            <li>Wishlist</li>
            <li>Shop</li>
          </ul>
        </div>

        {/* Quick Links Section */}
        <div className="space-y-4">
          <h3 className="font-bold text-lg mb-4">Quick Link</h3>
          <ul className="space-y-4">
            <li>Privacy Policy</li>
            <li>Terms Of Use</li>
            <li>FAQ</li>
            <li>Contact</li>
          </ul>
        </div>

        {/* Download App Section */}
        <div className="space-y-4">
          <h3 className="font-bold text-lg mb-4">Download App</h3>
          <p>Save $3 with App New User Only</p>
          {/* Placeholder for QR code images */}
          <div className="flex gap-2 my-2">
            <Image src="/Stores.svg" alt="store" width={200} height={200} />
          </div>
          <div className="flex gap-4 mt-4">
            {/* Social media icons placeholders */}
            <Image
              src="/Icon-Facebook.svg"
              alt="facebook"
              width={28}
              height={28}
            />
            <Image
              src="/Icon-Twitter.svg"
              alt="twitter"
              width={23}
              height={23}
            />
            <Image
              src="/icon-instagram.svg"
              alt="instagram"
              width={28}
              height={28}
            />
            <Image
              src="/Icon-Linkedin.svg"
              alt="youtube"
              width={28}
              height={28}
            />
          </div>
        </div>
      </div>
      <div className="text-center mt-20 text-gray-500 border-t-[1px] border-gray-900">
        <p className="py-5">© Copyright Rimel 2022. All rights reserved</p>
      </div>
    </footer>
  );
};

export default Footer;
