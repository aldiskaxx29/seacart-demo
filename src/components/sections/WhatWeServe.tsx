import Image from "next/image";
import React from "react";
import Videos from "../molecules/Videos";
import { FadeIn } from "../animations/AnimationTemplate";
import { MotionDiv } from "../animations/MotionDiv";

export default function WhatWeServe() {


  return (
    <div className="lg:flex bg-gray-100 lg:px-20 lg:gap-24 gap:12 px-4 space-y-12 lg:space-y-0 lg:h-[500px] items-start justify-center pt-[128px]">
      <MotionDiv>
        {/* First Column */}
        <div className="flex-col flex gap-5">
          <div className="grid gap-3 h-full items-center justify-start">
            <FadeIn>
              <span className="text-center text-teal-400 lg:text-base font-extrabold lg:leading-normal  text-sm font-['Sen'] leading-tight">
                What We Serve
              </span>
            </FadeIn>
            <FadeIn>
              <span className=" lg:text-4xl  lg:leading-[44px]  text-indigo-900 text-3xl font-extrabold font-['Sen'] leading-[38px]">
                Introducing to Seacart
              </span>
            </FadeIn>
          </div>

          <FadeIn>
            <span className="text-[#212121] lg:text-xl font-normal font-['Sen'] lg:leading-[30px] text-lg leading-7">
              As the worlds top fishery producer, Indonesia faces industry
              challenges, but <b>Seacart</b> offers 24/7 support as your
              complete solution!
            </span>
          </FadeIn>
        </div>
      </MotionDiv>

      <MotionDiv>
        {/* Second Column */}
        <div className="flex-col flex lg:gap-12 gap-8 lg:mt-0 mt-8">
          <FadeIn>
            <div className="flex gap-4 mt-4">
              <Image
                src={"/assets/featured-icons/Featured icon.svg"}
                alt={"icon"}
                width={30}
                height={30}
                className="w-12 h-12 bg-slate-300 rounded-full border-zinc-200 justify-center items-center"
              />
              <div className="flex-col flex justify-start items-start gap-2">
                <span className="text-indigo-900 text-xl font-extrabold font-['Sen'] leading-[30px] ">
                  Same-Day Delivery and Price Stability
                </span>
                <span className="text-[#212121] text-base font-normal font-['Sen'] leading-normal ">
                  As the worlds top fishery producer, Indonesia faces industry
                  challenges, but Seacart offers 24/7 support as your complete
                  solution!
                </span>
              </div>
            </div>
          </FadeIn>

          <FadeIn>
            <div className="flex gap-4 lg:mb-0 mb-8">
              <Image
                src={"/assets/featured-icons/Featured icon-1.svg"}
                alt={"icon"}
                width={30}
                height={30}
                className="w-12 h-12 bg-slate-300 rounded-full border-zinc-200 justify-center items-center"
              />
              <div className="flex-col flex justify-start items-start gap-2">
                <span className="text-indigo-900 text-xl font-extrabold font-['Sen'] leading-[30px]">
                  Quality Assurance and Stock Management
                </span>
                <span className="text-[#212121] text-base font-normal font-['Sen'] leading-normal">
                  We guarantee high-quality products, secure transactions, and
                  offer stock management and kitchen stock analysis services for
                  efficient control.
                </span>
              </div>
            </div>
          </FadeIn>
        </div>

        <FadeIn>
          <div className="rounded-xl overflow-hidden lg:hidden mb-4">
            <Videos />
          </div>
        </FadeIn>
      </MotionDiv>
    </div>
  );
}
