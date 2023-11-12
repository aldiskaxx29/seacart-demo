import Image from "next/image";
import React from "react";

export default function ProductHero() {
  return (
    <div>
      <div className="flex min-h-screen bg-gray-50">
        <div className="flex-1 relative flex items-center justify-center lg:ps-32 ">
            <Image
              src={
                "/assets/product-page/top-view-appetizing-seafood-mix-wooden-table-PhotoRoom 1.png"
              }
              alt={"product"}
              width={600}
                      height={600}
                      className="z-50 absolute "
            />
          <div className="bg-primary w-[150px] lg:w-[400px] h-full  ">
          </div>
        </div>
        <div className="flex-1 items-center justify-center relative flex">
          {" "}
          <h1 className="text-indigo-900 lg:text-8xl text-3xl font-bold font-['Sen'] leading-[48px] absolute lg:w-[500px] w-[160px] ms-5">
            FRESH FROM THE OCEAN TO YOUR PLATE
          </h1>
        </div>
      </div>
    </div>
  );
}
