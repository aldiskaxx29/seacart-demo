import React, { useRef } from "react";

import Slider from "react-slick";
declare module "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { ProductSlider } from "../../../service/DummyData";
import Image from "next/image";

export default function ShowCaseProduct() {
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };

const sliderRef = useRef<Slider>(null);

const goToPrevious = () => {
  if (sliderRef.current) {
    (sliderRef.current as Slider).slickPrev();
  }
};

const goToNext = () => {
  if (sliderRef.current) {
    (sliderRef.current as Slider).slickNext();
  }
};


  return (
    <div className=" bg-indigo-900 h-fit">
      <Slider ref={sliderRef} {...settings}>
        {ProductSlider.map((item, index) => (
          <div key={index} className="">
            <div className="lg:flex flex-wrap-reverse">


              <div className="flex-1 lg:hidden h-[300px] items-center justify-center overflow-hidden flex ">
                <Image
                  src={`/assets/product-feature/${item.featuredImageURL}`}
                  alt={""}
                  width={600}
                  height={600}
                  className=" bg-black bg-opacity-10 w-[600px]"
                />
              </div>

              <div className="flex-1 lg:px-10 px-5 pt-24 pb-24 justify-start items-start gap-6 inline-flex flex-col">
                <Image
                  src={"/assets/product-icons/box.svg"}
                  alt={"icon"}
                  width={24}
                  height={24}
                  className="w-12 h-12 p-2 bg-slate-300 rounded-full border-zinc-200 justify-center items-center"
                />
                <h3 className="text-slate-100 text-3xl font-extrabold leading-[38px]">
                  {item.productName}
                </h3>
                <p className=" text-slate-300 text-lg font-normalleading-7">
                  {item.description}
                </p>
                <button className="text-teal-400 text-sm font-normal  leading-tight flex gap-2 items-center">
                  See Detail
                  <Image
                    src={"/assets/product-icons/arrow-circle-broken-right.svg"}
                    alt={"icon"}
                    width={20}
                    height={20}
                  />
                </button>
                <div className="flex gap-5 items-center">
                  {item.images.slice(0, 3).map((item, index) => (
                    <div className="" key={index}>
                      <Image
                        src={`/assets/product-preview${item.url}`}
                        alt={"icon"}
                        width={100}
                        height={100}
                        className="rounded-full"
                      />
                      <p className="text-center text-slate-300 text-lg font-normal leading-7">
                        {item.imageTitle}
                      </p>
                    </div>
                  ))}
                  {item.images.length > 3 && (
                    <div>
                      <p className="text-start text-slate-400 text-lg font-normalleading-7">
                        and <br /> more ...
                      </p>
                    </div>
                  )}
                </div>

                <div className="flex gap-6">
                  <button className="" onClick={goToPrevious}>
                    {" "}
                    <Image
                      src={"/assets/product-icons/arrow-left.svg"}
                      alt={"icon"}
                      width={20}
                      height={20}
                      className="w-14 h-14 bg-white bg-opacity-90 rounded-[28px] border border-gray-200  p-4"
                    />
                  </button>
                  <button className="" onClick={goToNext}>
                    {" "}
                    <Image
                      src={"/assets/product-icons/arrow-right.svg"}
                      alt={"icon"}
                      width={20}
                      height={20}
                      className="w-14 h-14 bg-white bg-opacity-90 rounded-[28px] border border-gray-200  p-4"
                    />
                  </button>
                </div>
              </div>

              <div className="flex-1 lg:flex h-full items-end hidden mb-[-64px]">
                <Image
                  src={`/assets/product-feature/${item.featuredImageURL}`}
                  alt={""}
                  width={600}
                  height={600}
                  className=" bg-black bg-opacity-10 w-[600px]"
                />
              </div>
            </div>
          </div>
        ))}
      </Slider>
    </div>
  );
}
