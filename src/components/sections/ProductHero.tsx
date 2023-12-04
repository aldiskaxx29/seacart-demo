import Image from "next/image";
import React from "react";
import { FadeInRight, MoveRotate } from "../animations/AnimationTemplate";
import { MotionDiv } from "../animations/MotionDiv";

export default function ProductHero() {

  
  return (
    <MotionDiv>
      <div>
        <div className="flex h-[500px] lg:min-h-screen bg-gray-50">
          <div className="flex-1 relative flex items-center justify-center lg:ps-32 ">
            <div className="z-2 absolute ">
              <MoveRotate>
                <Image
                  src={
                    "/assets/product-page/top-view-appetizing-seafood-mix-wooden-table-PhotoRoom 1.png"
                  }
                  alt={"product"}
                  width={600}
                  height={600}
                />
              </MoveRotate>
            </div>
            <div className="bg-primary w-[150px] lg:w-[400px] h-full  "></div>
          </div>

          <div className="flex-1 items-center justify-center relative flex">
            {" "}
            <div className="text-indigo-900 lg:text-7xl    absolute lg:w-[420px]    lg:leading-[90px] w-[145px] text-2xl font-bold font-['Sen'] leading-[40px] h-fit">
              <FadeInRight>FRESH FROM THE OCEAN TO YOUR PLATE</FadeInRight>
            </div>
          </div>
        </div>
      </div>
    </MotionDiv>
  );
}
