import React from "react";
import Button from "../atomic/Button";
import Image from "next/image";
import Router from "next/router";
import { FadeIn, FadeInUp } from "../animations/AnimationTemplate";
import { MotionDiv } from "../animations/MotionDiv";

export default function HeroBanner() {
  return (
    <MotionDiv>
      <div
        className={`bg-gray-100 flex min-h-screen flex-col items-center  justify-center gap-10 px-4 relative pt-[100px]`}>
        <div className="text-center mb-10 space-y-4 ">
          <FadeInUp>
            <span>Seafood Supplier</span>
          </FadeInUp>
          <FadeInUp>
            <h1 className="text-6xl lg:text-8xl font-bold text-center bg-accent-secondary text-primary  font-['Sen'] lg:w-[800px] md:w-full">
              Bring The Sea to Your Kitchen!
            </h1>
          </FadeInUp>
          <FadeInUp>
            <span>Downstreaming Commodity Through Technology</span>
          </FadeInUp>
        </div>

        <div className="flex-col flex space-y-10 w-full lg:w-fit justify-center items-center px-8">
          <FadeIn>
            <div className="w-fit">
              <Button
                link={"/product"}
                text={"View Product"}
                variant={"Primary"}
                classNames=""
              />
            </div>
          </FadeIn>

          <div className="w-full justify-between flex mt-3 gap-3">
            <FadeIn>
              <Image
                src={"/assets/social-icons-navy/Social icon-1.svg"}
                alt={""}
                width={30}
                height={30}
                onClick={() =>
                  Router.push("https://www.instagram.com/seacart.id/")
                }
                className="w-[52px] h-[52px] px-4 py-3 bg-white rounded-[40px] gap-1 cursor-pointer hover:bg-gray-100"
              />
            </FadeIn>
            <FadeIn>
              <Image
                src={"/assets/social-icons-navy/Social icon-2.svg"}
                alt={""}
                width={30}
                height={30}
                onClick={() =>
                  Router.push("https://www.facebook.com/seacart.id?_rdc=1&_rdr")
                }
                className="w-[52px] h-[52px] px-4 py-3 bg-white rounded-[40px] gap-1 cursor-pointer hover:bg-gray-100"
              />
            </FadeIn>
            <FadeIn>
              <Image
                src={"/assets/social-icons-navy/linkedin.svg"}
                alt={""}
                width={33}
                height={30}
                onClick={() =>
                  Router.push("https://www.linkedin.com/company/seacart/about/")
                }
                className="w-[56px] h-[52px] px-4 py-3 bg-white rounded-[40px] gap-1 cursor-pointer hover:bg-gray-100"
              />
            </FadeIn>
          </div>
        </div>
      </div>{" "}
    </MotionDiv>
  );
}
