import Image from "next/image";
import React from "react";
import { FadeInDown, FadeInUp } from "../animations/AnimationTemplate";
import { MotionDiv } from "../animations/MotionDiv";

export default function ProductList() {
  return (
    <main
      className={`lg:flex items-star justify-center pt-10 lg:py-[140px]  px-4  relative`}>
      <MotionDiv>
        <div className="lg:flex grid">
          <div className="lg:flex-1 lg:w-[500px] w-full lg:px-10 grid justify-start items-start gap-6 lg:mb-0 mb-5">
            <FadeInDown>
              <h2 className=" text-indigo-900 lg:text-[40px] font-bold font-['Sen'] lg:leading-[50px] text-center text-3xl  leading-[38px] lg:text-start">
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

          <div className="lg:flex-1 w-full lg:w-[500px] lg:px-10 grid justify-start items-start gap-5 lg:h-fit lg:mt-10 px-0 mt-0  rounded-lg">
            <div className="h-fit">
              <FadeInUp>
                <Image
                  src={"/assets/product-page/unsplash_bpPTlXWTOvg.png"}
                  width={600}
                  height={100}
                  alt={"Salmon Dish"}
                  className="h-fit"
                />
              </FadeInUp>
            </div>
            <div>
              <FadeInUp>
                <p className="text-[#212121] lg:text-lg lg:font-normal font-['Sen'] lg:leading-7 800 text-sm font-normal  leading-tight m-0 p-0 mb-10 ">
                  Immerse yourself in a culinary journey with our premium
                  selection of fresh seafood products, a testament to the
                  ocean`s bounty delivered straight to your table. Handpicked
                  with precision and care, our offerings redefine the standard
                  of freshness in every delectable bite.
                </p>
              </FadeInUp>
            </div>

            <div className="lg:block hidden">
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
        </div>
      </MotionDiv>
    </main>
  );
}
