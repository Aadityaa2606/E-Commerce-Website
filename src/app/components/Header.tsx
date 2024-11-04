"use client";
import Link from "next/link";
import React from "react";
import { SearchInput } from "./SearchBar";
import Image from "next/image";

function Header() {
  return (
    <div className="text-white">
      <div className="h-11 bg-black flex items-center w-full justify-between px-20">
        <div className="h-1 w-1" />

        <div className="flex gap-2">
          <p className="text-base">
            Summer Sale For All Swim Suits And Free Express Delivery - OFF 50%!
          </p>
          <button className="text-base font-bold underline">Shop Now</button>
        </div>

        <div className="flex items-center gap-1">
          <p className="">English</p>
          <Image src="/DropDown.svg" alt="dropdown" width={20} height={20} />
        </div>
      </div>

      <div className="border-b-[0.5px] h-24 flex items-center text-black justify-around">
        <p className="text-2xl font-bold">Exclusive</p>
        <div className="flex gap-11">
          <Link href="/"> Home </Link>
          <Link href="/contact"> Contact </Link>
          <Link href="/about"> About </Link>
          <Link href="/signup"> Sign Up </Link>
        </div>
        <div className="flex gap-2">
          <SearchInput defaultValue="" />
          <Image src="/Wishlist.svg" alt="wishlist" width={28} height={28} />
          <Image src="/cart.svg" alt="cart" width={25} height={25} />
        </div>
      </div>
    </div>
  );
}

export default Header;
