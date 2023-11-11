import React from "react";
import Slider from "react-slick";
import { ClientList } from "../../../service/DummyData";
import Image from "next/image";
declare module "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

export default function PartnerList() {

  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 5,
    slidesToScroll: 1,
    autoplay: true, 
    autoplaySpeed: 2000, 
  };
  return (
    <div className="py-32 flex-col justify-center items-center gap-16">
      <div className="flex-col justify-start items-center gap-5 inline-flex lg:px-[200px] px-4 w-full">
        <p className="text-center text-teal-400 text-base font-extrabold leading-normal">
          Integration
        </p>
        <p className="text-center text-indigo-900 text-4xl font-extrabold">
          Trust and Transparency
        </p>
        <p className=" text-center text-neutral-800 text-xl font-normal w-[500px]">
          We&rsquo;re proud to showcase our performance data and the growing
          list of companies who have chosen to partner with us.
        </p>
      </div>

      <div className="lg:flex gap-10 w-full items-center justify-center mt-20">
        <div className="flex-col justify-start items-center gap-3 inline-flex lg:mt-0 mt-10 lg:w-fit w-full">
          <h1 className="text-center text-indigo-900 text-6xl font-extrabold leading-[72px]">
            1000+
          </h1>
          <p className="text-center text-neutral-800 text-lg font-normal leading-7">
            Items Sold
          </p>
        </div>
        <div className="flex-col justify-start items-center gap-3 inline-flex lg:mt-0 mt-10 lg:w-fit w-full">
          <h1 className="text-center text-indigo-900 text-6xl font-extrabold leading-[72px]">
            15 Min
          </h1>
          <p className="text-center text-neutral-800 text-lg font-normal leading-7">
            Avg. Delivery Time
          </p>
        </div>
        <div className="flex-col justify-start items-center gap-3 inline-flex lg:mt-0 mt-10 lg:w-fit w-full">
          <h1 className="text-center text-indigo-900 text-6xl font-extrabold leading-[72px]">
            98%
          </h1>
          <p className="text-center text-neutral-800 text-lg font-normal leading-7">
            Customer Satisfactions
          </p>
        </div>
      </div>

      <div className="flex-col mt-20 w-full items-center justify-center">
        <div className="mb-5 flex items-center justify-center">

        <p className="text-indigo-900 text-lg font-extrabold">
          Trusted
        </p>
        </div>

        <div>

        <Slider {...settings}>
          {ClientList.map((item, index) => (
            <div key={index} className="flex justify-center items-center">
              <Image
                src={`/assets/partner-logo/${item.url}`}
                alt={"icon"}
                width={120}
                height={24}
                className=""
              />
            </div>
          ))}
        </Slider>
        </div>
        
      </div>
    </div>
  );
}
