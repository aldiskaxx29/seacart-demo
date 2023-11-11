import Image from "next/image";
import React from "react";

export default function WhatWeServe() {
  return (
    <div className="lg:flex bg-gray-100 lg:px-20 py-32 lg:gap-24 gap:12 px-4 space-y-12 lg:space-y-0">
      {/* First Column */}
      <div className="flex-col flex gap-5">
        <span className="text-teal-400 text-base font-extrabold  leading-normal">
          What We Serve
        </span>
        <span className="text-indigo-900 lg:text-4xl text-3xl font-extrabold  leading-[44px]">
          Introducing to Seacart
        </span>
        <span className="text-neutral-800 lg:text-xl text-lg font-normal  leading-[30px]">
          As the worlds top fishery producer, Indonesia faces industry
          challenges, but Seacart offers 24/7 support as your complete solution!
        </span>
      </div>

      {/* Second Column */}
      <div className="flex-col flex gap-12">
        <div className="flex gap-4">
          <Image
            src={"/assets/featured-icons/Featured icon.svg"}
            alt={"icon"}
            width={30}
            height={30}
            className="w-12 h-12 bg-slate-300 rounded-full border-zinc-200 justify-center items-center"
          />
          <div className="flex-col flex justify-start items-start gap-2">
            <span className="text-indigo-900 lg:text-xl text-lg font-extrabold">
              Same-Day Delivery and Price Stability
            </span>
            <span className="text-neutral-800 lg:text-xl text-base  font-normal  leading-[30px]">
              As the worlds top fishery producer, Indonesia faces industry
              challenges, but Seacart offers 24/7 support as your complete
              solution!
            </span>
          </div>
        </div>
        <div className="flex gap-4">
          <Image
            src={"/assets/featured-icons/Featured icon-1.svg"}
            alt={"icon"}
            width={30}
            height={30}
            className="w-12 h-12 bg-slate-300 rounded-full border-zinc-200 justify-center items-center"
          />
          <div className="flex-col flex justify-start items-start gap-2">
            <span className="text-indigo-900  lg:text-xl text-lg font-extrabold">
              Quality Assurance and Stock Management
            </span>
            <span className="text-neutral-800  lg:text-xl text-base font-normal  leading-[30px]">
              We guarantee high-quality products, secure transactions, and offer
              stock management and kitchen stock analysis services for efficient
              control.
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}
