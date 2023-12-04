import Image from "next/image";
import React from "react";

export default function WhoAreWe() {
  return (
    <main
      className={`lg:flex lg:px-20 mt-[112px] lg:mt-[164px] lg:gap-8 gap-5 items-center justify-center`}>
      <div className="lg:w-2/5 h-full grid items-center justify-center gap-4 lg:gap-8 p-4 lg:px-10">
        <div className="flex flex-col gap-3">
          <Image
            src={"/assets/product-page/Ornament.svg"}
            width={100}
            height={100}
            alt={""}
            className="w-20"
          />
          <div className=" text-indigo-900 lg:text-6xl lg:leading-[72px] text-3xl font-extrabold font-['Sen'] leading-[38px]">
            Welcome to Seacart
          </div>
          <div className=" lg:text-xl lg:leading-[30px]  text-sm font-bold font-['Sen'] leading-tight">
            where passion for the ocean meets a commitment to excellence in
            seafood sourcing and supply.
          </div>
        </div>

        <div className="text-[#212121] text-base font-normal font-['Sen'] leading-normal ">
          <span className="">
            Seacart was born out of a shared love for the sea and its treasures.
            We envisioned a company that not only provides premium seafood but
            also champions sustainability and ethical practices in the industry.
            Our journey began with a mission to connect discerning customers
            with the finest, responsibly sourced seafood from around the world.
          </span>
        </div>
      </div>
      <div className="lg:w-3/5 flex items-end justify-end px-4 mb-6">
        <Image
          src={"/assets/product-feature/Image.png"}
          width={1500}
          height={1500}
          alt="Food"
          className="lg:w-[568px] lg:h-[378px] object-cover rounded-md"
        />
      </div>
    </main>
  );
}
