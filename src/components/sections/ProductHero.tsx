import Image from "next/image";
import { FadeInRight, MoveRotate } from "../animations/AnimationTemplate";
import { MotionDiv } from "../animations/MotionDiv";
import React, { useEffect, useState } from "react";


export default function ProductHero() {

  

  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 767);
    };

    // Initial check on mount
    handleResize();

    // Add event listener for window resize
    window.addEventListener("resize", handleResize);

    // Clean up the event listener on component unmount
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <MotionDiv>
      <div className="">
        <div
          className="flex h-[400px] lg:h-[100vh] bg-gray-50 mt-[72px] lg:mt-0"
          style={{
            backgroundImage: "url('assets/general/SuperGraphicProduct.svg')",
            backgroundSize: isMobile ? "cover" : "contain",
            backgroundPosition: "center",
            backgroundRepeat:"no-repeat"
          }}>
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
                  className="lg:w-full w-[200px] object-cover"
                />
              </MoveRotate>
            </div>
            <div className="bg-primary w-[128px] lg:w-[400px] h-full  "></div>
          </div>

          <div className="flex-1 items-center justify-center relative flex">
            {" "}
            <div className="text-indigo-900 lg:text-7xl    absolute lg:w-[420px]    lg:leading-[90px] w-[145px] text-2xl font-bold font-['Sen'] leading-[40px] h-fit ">
              <FadeInRight>Fresh From The Ocean To Your Plate</FadeInRight>
            </div>
          </div>
        </div>
      </div>
    </MotionDiv>
  );
}
