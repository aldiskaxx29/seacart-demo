import Image from "next/image";
import React from "react";

export default function VisiMisi() {
  return (
    <div className="lg:p-0">
      <div className={` flex min-h-screen flex-col items-center lg:px-40 px-4`}>
        <main
          className={`lg:flex p-4 lg:px-20 mt-[164px] lg:gap-10 items-center justify-center bg-slate-100 rounded-lg lg:py-20`}>
          <div className="lg:w-1/2 h-full grid items-center justify-center gap-3 lg:gap-5 lg:ps-10">
            <Image
              src={"/assets/product-page/Ornament.svg"}
              width={100}
              height={100}
              alt={""}
              className="w-20"
            />
            <div className=" text-indigo-900 text-3xl lg:text-6xl font-bold font-['Sen'] ">
              Our Vision
            </div>
            <div className=" text-neutral-800 lg:text-xl font-bold font-['Sen'] leading-[30px]">
              Empowering a Sustainable Ocean Legacy
            </div>
            <div className="text-neutral-800 text-base font-normal font-['Sen'] leading-normal">
              <span className="">
                Pioneering Excellence in Seafood Sourcing and Supply Chain
                Solutions. At Seacart, we envision a future where our commitment
                to premium quality, environmental stewardship, and responsible
                sourcing sets the standard for the seafood industry. By
                fostering a harmonious relationship between the oceans, our
                partners, and customers, we strive to be the foremost choice for
                those who seek unparalleled excellence in seafood, making a
                positive impact on both plates and the planet.
              </span>
            </div>
          </div>
          <div className="lg:w-2/3 flex items-end justify-end">
            <Image
              src={"/assets/about/1.png"}
              width={1500}
              height={1500}
              alt="Food"
              className="w-[768px] object-cover rounded-md lg:me-[-100px] mt-4 lg:shadow-lg"
            />
          </div>
        </main>
      </div>
      <div className={`lg:flex min-h-screen grid items-center`}>
        <main
          className={`lg:flex lg:mt-[164px] gap-10 items-center justify-center  rounded-lg py-20`}>
          <div className="lg:w-2/3 flex items-start justify-start lg:p-0 p-4">
            <Image
              src={"/assets/about/2.png"}
              width={1500}
              height={1500}
              alt="Food"
              className="w-[768px] object-cover rounded-md "
            />
          </div>
          <div className="lg:w-1/2 h-full grid items-center justify-center gap-5 lg:pe-10 p-4">
            <Image
              src={"/assets/product-page/Ornament.svg"}
              width={100}
              height={100}
              alt={""}
              className="w-20"
            />
            <div className=" text-indigo-900 text-6xl font-bold font-['Sen'] leading-[72px]">
              Our Mission
            </div>
            <div className=" text-neutral-800 text-xl font-bold font-['Sen'] leading-[30px]">
              At Seacart, our mission is to deliver an unparalleled seafood
              experience by:
            </div>
            <div className=" text-base font-normal font-['Sen'] leading-normal grid lg:gap-5 gap-3">
              <div className="flex gap-5 items-center">
                <div className="w-2 h-2 rounded-full bg-indigo-900"></div>
                <span className="text-indigo-900 text-base font-bold font-['Sen'] leading-normal">
                  Sourcing Excellence
                </span>
              </div>
              <div className="flex gap-5 items-center">
                <div className="w-2 h-2 rounded-full bg-indigo-900"></div>
                <span className="text-indigo-900 text-base font-bold font-['Sen'] leading-normal">
                  Customer Satisfaction
                </span>
              </div>
              <div className="flex gap-5 items-center">
                <div className="w-2 h-2 rounded-full bg-indigo-900"></div>
                <span className="text-indigo-900 text-base font-bold font-['Sen'] leading-normal">
                  Sustainability and Responsibility
                </span>
              </div>
              <div className="flex gap-5 items-center">
                <div className="w-2 h-2 rounded-full bg-indigo-900"></div>
                <span className="text-indigo-900 text-base font-bold font-['Sen'] leading-normal">
                  Transparency and Traceability
                </span>
              </div>
              <div className="flex gap-5 items-center">
                <div className="w-2 h-2 rounded-full bg-indigo-900"></div>
                <span className="text-indigo-900 text-base font-bold font-['Sen'] leading-normal">
                  Innovation in Distribution
                </span>
              </div>
              <div className="flex gap-5 items-center">
                <div className="w-2 h-2 rounded-full bg-indigo-900"></div>
                <span className="text-indigo-900 text-base font-bold font-['Sen'] leading-normal">
                  Employee Empowerment
                </span>
              </div>
              <div className="flex gap-5 items-center">
                <div className="w-2 h-2 rounded-full bg-indigo-900"></div>
                <span className="text-indigo-900 text-base font-bold font-['Sen'] leading-normal">
                  Sourcing Excellence
                </span>
              </div>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
}
