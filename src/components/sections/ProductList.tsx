import Image from "next/image";
import Link from "next/link";
import React from "react";

export default function ProductList() {
  return (
    <main
      className={`lg:flex min-h-screen items-star justify-center py-24  px-4  relative`}>
      <div className="lg:flex lg:absolute lg:w-[1200px]">
        <div className="flex-1 lg:px-10 flex-col justify-start items-start gap-6 inline-flex order-last lg:mb-0 mb-4">
          <h2 className=" text-indigo-900 text-5xl font-bold font-['Sen'] leading-[60px] ">
            Serving Fresh Seafood Everyday
          </h2>
          <Image
            src={"/assets/product-page/unsplash_mWGA_F6ckeo.png"}
            width={500}
            height={100}
            alt={""}
            className="w-full"
          />
        </div>

        <div className="flex-1 lg:px-10 flex-col justify-start items-start gap-6 inline-flex px-0">
          <div>
            <Image
              src={"/assets/product-page/unsplash_bpPTlXWTOvg.png"}
              width={600}
              height={100}
              alt={"Salmon Dish"}
              className=""
            />
          </div>
          <div>
            <p className="text-neutral-800 text-lg font-normal font-['Sen'] leading-7">
              Immerse yourself in a culinary journey with our premium selection
              of fresh seafood products, a testament to the ocean`s bounty
              delivered straight to your table. Handpicked with precision and
              care, our offerings redefine the standard of freshness in every
              delectable bite.
            </p>
          </div>

          <div>
            <Image
              src={"/assets/product-page/Ornament.svg"}
              width={100}
              height={100}
              alt={"Salmon Dish"}
              className="w-20"
            />
          </div>
        </div>
      </div>
    </main>
  );
}
