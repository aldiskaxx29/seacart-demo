import Image from "next/image";
import React from "react";
import { FadeInDown, FadeInUp } from "../animations/AnimationTemplate";
import { MotionDiv } from "../animations/MotionDiv";

export default function ProductList() {

  
  return (
    <main className={`lg:flex items-star justify-center py-24  px-4  relative`}>
      <MotionDiv>
        <div className="lg:flex grid">
          <div className="lg:flex-1 w-full lg:w-[500px] lg:px-10 grid justify-start items-start gap-4 h-fit mt-10 px-0  lg:order-first  order-last">
            <div>
              <FadeInUp>
                <Image
                  src={"/assets/product-page/unsplash_bpPTlXWTOvg.png"}
                  width={600}
                  height={100}
                  alt={"Salmon Dish"}
                  className=""
                />
              </FadeInUp>
            </div>
            <div>
              <FadeInUp>
                <p className="text-neutral-800 text-lg font-normal font-['Sen'] leading-7">
                  Immerse yourself in a culinary journey with our premium
                  selection of fresh seafood products, a testament to the
                  ocean`s bounty delivered straight to your table. Handpicked
                  with precision and care, our offerings redefine the standard
                  of freshness in every delectable bite.
                </p>
              </FadeInUp>
            </div>

            <div>
              <FadeInUp>
                <Image
                  src={"/assets/product-page/Ornament.svg"}
                  width={100}
                  height={100}
                  alt={"Salmon Dish"}
                  className="w-20"
                />
              </FadeInUp>
            </div>
          </div>

          <div className="lg:flex-1 lg:w-[500px] w-full lg:px-10 grid justify-start items-start gap-6 lg:mb-0 mb-8">
            <FadeInDown>
              <h2 className=" text-indigo-900 text-5xl font-bold font-['Sen'] leading-[60px] ">
                Serving Fresh Seafood Everyday
              </h2>
            </FadeInDown>
            <FadeInDown>
              <Image
                src={"/assets/product-page/unsplash_mWGA_F6ckeo.png"}
                width={500}
                height={100}
                alt={""}
                className="w-full"
              />
            </FadeInDown>
          </div>
        </div>
      </MotionDiv>
    </main>
  );
}
