import Image from "next/image";
import React from "react";

export default function WhoAreWe() {
  return (
    <main
      className={`lg:flex lg:px-20 mt-[128px] lg:mt-[164px] gap-10 items-center justify-center`}>
      <div className="lg:w-2/5 h-full grid items-center justify-center gap-5 p-4 lg:px-10">
        <Image
          src={"/assets/product-page/Ornament.svg"}
          width={100}
          height={100}
          alt={""}
          className="w-20"
        />
        <div className=" text-indigo-900 text-3xl font-extrabold font-['Sen'] leading-[38px]">
          Welcome to Seacart
        </div>
        <div className=" text-neutral-800 text-xl font-bold font-['Sen'] leading-[30px]">
          where passion for the ocean meets a commitment to excellence in
          seafood sourcing and supply.
        </div>
        <div className="text-neutral-800 text-base font-normal font-['Sen'] leading-normal">
          <span className="">
            Established in ... , Seacart was born out of a shared love for the
            sea and its treasures. We envisioned a company that not only
            provides premium seafood but also champions sustainability and
            ethical practices in the industry. Our journey began with a mission
            to connect discerning customers with the finest, responsibly sourced
            seafood from around the world.
          </span>
        </div>
      </div>
      <div className="lg:w-3/5 flex items-end justify-end p-4">
        <Image
          src={"/assets/product-feature/Image.png"}
          width={1500}
          height={1500}
          alt="Food"
          className="w-[568px] lg:h-[378px] object-cover rounded-md"
        />
      </div>
    </main>
  );
}
