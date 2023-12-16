import Image from "next/image";
import React from "react";
import { MotionDiv } from "../animations/MotionDiv";
import { FadeIn, FadeInRight, FadeInUp } from "../animations/AnimationTemplate";

export default function VisiMisi() {
  return (
    <div>
      <div
        className={` flex min-h-screen flex-col items-center lg:px-40 px-4 py-6`}>
        <MotionDiv>
          <FadeInUp>
            <div className="">
              <main
                className={`lg:flex px-4 py-6 lg:px-20 lg:mt-[164px] lg:gap-8 items-center justify-center bg-[#2F306A] rounded-lg lg:py-20`}
                style={{
                  backgroundImage: "url('assets/general/SuperGraphicBold.svg')",
                  backgroundSize: "cover",
                }}>
                <div className="lg:w-1/2 h-full grid items-center justify-center gap-3 lg:gap-8 lg:ps-10 ">
                  <div className="flex flex-col gap-3">
                    <Image
                      src={"/assets/product-page/Ornament.svg"}
                      width={100}
                      height={100}
                      alt={""}
                      className="w-20"
                    />
                    <div className="text-white lg:text-6xl lg:leading-[72px] text-3xl font-extrabold font-['Sen'] leading-[38px]">
                      Our Vision
                    </div>
                    <div className=" text-white lg:text-xl font-bold font-['Sen'] lg:leading-[30px] text-sm leading-tight">
                      Empowering a Sustainable Ocean Legacy
                    </div>
                  </div>

                  <div className="text-white text-base font-normal font-['Sen'] leading-normal ">
                    <span className="">
                      Pioneering Excellence in Seafood Sourcing and Supply Chain
                      Solutions. At Seacart, we envision a future where our
                      commitment to premium quality, environmental stewardship,
                      and responsible sourcing sets the standard for the seafood
                      industry. By fostering a harmonious relationship between
                      the oceans, our partners, and customers, we strive to be
                      the foremost choice for those who seek unparalleled
                      excellence in seafood, making a positive impact on both
                      plates and the planet.
                    </span>
                  </div>
                </div>
                <div className="lg:w-2/3 flex items-end justify-end">
                  <Image
                    src={"/assets/about/1.png"}
                    width={1500}
                    height={1500}
                    alt="Food"
                    className="w-[768px] object-cover rounded-md lg:me-[-100px] mt-4 lg:shadow-lg lg:h-full h-[400px] mb-[-100px] object-left-top lg:mb-0"
                  />
                <div className="absolute  lg:bottom-[-800px] lg:right-[300px] right-[120px] bottom-[-780px] lg:block hidden">
                  <Image
                    src={`/assets/general/GraphicVision.svg`}
                    alt={""}
                    height={500}
                    width={500}
                    className="object-cover lg:w-[275px] w-[120px]"
                  />
                </div>
                </div>

              </main>
            </div>
          </FadeInUp>
        </MotionDiv>
      </div>

      <div className={`lg:flex h-fit lg:min-h-screen grid items-center`}>
        <MotionDiv>
          <main
            className={`lg:flex lg:mt-[164px] gap-10 items-center justify-center  rounded-lg lg:py-20 pt-20`}>
            <div className="lg:w-1/2 flex items-start justify-start lg:p-0 p-4 ">
              <FadeInRight>
                <Image
                  src={"/assets/about/2.png"}
                  width={1500}
                  height={1500}
                  alt="Food"
                  className="w-[768px] object-cover rounded-md "
                />
              </FadeInRight>
            </div>
            <div className="lg:w-1/2 lg:px-[150px] h-fit grid items-center justify-center gap-4 lg:gap-8 lg:pe-10 px-4">
              <FadeIn>
                <div className="flex flex-col gap-3">
                  <Image
                    src={"/assets/product-page/Ornament.svg"}
                    width={100}
                    height={100}
                    alt={""}
                    className="w-20"
                  />
                  <div className="text-indigo-900 lg:text-6xl lg:leading-[72px] text-3xl font-extrabold font-['Sen'] leading-[38px]">
                    Our Mission
                  </div>
                  <div className=" text-[#212121] lg:text-xl font-bold font-['Sen'] lg:leading-[30px] text-sm leading-tight lg:w-3/4">
                    At Seacart, our mission is to deliver an unparalleled
                    seafood experience by:
                  </div>
                </div>
              </FadeIn>

              <div className=" text-base font-normal font-['Sen'] leading-normal grid lg:gap-5 gap-3">
                <FadeInRight>
                  <div className="flex gap-2 lg:gap-5 items-center">
                    <div className="w-2 h-2 rounded-full bg-indigo-900"></div>
                    <span className="text-indigo-900 text-base font-bold font-['Sen'] leading-normal ">
                      Sourcing Excellence
                    </span>
                  </div>
                </FadeInRight>
                <FadeInRight>
                  <div className="flex gap-2 lg:gap-5 items-center">
                    <div className="w-2 h-2 rounded-full bg-indigo-900"></div>
                    <span className="text-indigo-900 text-base font-bold font-['Sen'] leading-normal ">
                      Customer Satisfaction
                    </span>
                  </div>
                </FadeInRight>
                <FadeInRight>
                  <div className="flex gap-2 lg:gap-5 items-center">
                    <div className="w-2 h-2 rounded-full bg-indigo-900"></div>
                    <span className="text-indigo-900 text-base font-bold font-['Sen'] leading-normal ">
                      Sustainability and Responsibility
                    </span>
                  </div>
                </FadeInRight>
                <FadeInRight>
                  <div className="flex gap-2 lg:gap-5 items-center">
                    <div className="w-2 h-2 rounded-full bg-indigo-900"></div>
                    <span className="text-indigo-900 text-base font-bold font-['Sen'] leading-normal ">
                      Transparency and Traceability
                    </span>
                  </div>
                </FadeInRight>
                <FadeInRight>
                  <div className="flex gap-2 lg:gap-5 items-center">
                    <div className="w-2 h-2 rounded-full bg-indigo-900"></div>
                    <span className="text-indigo-900 text-base font-bold font-['Sen'] leading-normal ">
                      Innovation in Distribution
                    </span>
                  </div>
                </FadeInRight>
                <FadeInRight>
                  <div className="flex gap-2 lg:gap-5 items-center">
                    <div className="w-2 h-2 rounded-full bg-indigo-900"></div>
                    <span className="text-indigo-900 text-base font-bold font-['Sen'] leading-normal ">
                      Employee Empowerment
                    </span>
                  </div>
                </FadeInRight>
                <FadeInRight>
                  <div className="flex gap-2 lg:gap-5 items-center">
                    <div className="w-2 h-2 rounded-full bg-indigo-900"></div>
                    <span className="text-indigo-900 text-base font-bold font-['Sen'] leading-normal ">
                      Sourcing Excellence
                    </span>
                  </div>
                </FadeInRight>
              </div>
            </div>
          </main>
        </MotionDiv>
      </div>
    </div>
  );
}
