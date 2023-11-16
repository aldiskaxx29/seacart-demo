import React, { useEffect, useRef, useState } from "react";

import Slider from "react-slick";
declare module "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { ProductSlider } from "../../../service/DummyData";
import Image from "next/image";
import { FadeIn, FadeInRight, FadeInUp } from "../animations/AnimationTemplate";
import { MotionDiv } from "../animations/MotionDiv";

interface Props {
  id: number;
  productName: string;
  description: string;
  fullDescription: string;
  featuredImageURL: string;
  images: {
    id: number;
    url: string;
    imageTitle: string;
  }[];
}
[];

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

  const [data, setData] = useState<Props[]>([]);

  useEffect(() => {
    const fetchData = async () => {
      setTimeout(() => {
        setData(ProductSlider);
      }, 1000);
    };

    fetchData();
  }, []);

  return (
    <MotionDiv>
      <div className=" bg-indigo-900 ">
        <Slider ref={sliderRef} {...settings}>
          {data.map((item, index) => (
            <div key={index} className="">
              <div className="lg:flex flex-wrap-reverse min-h-screen pt-[100px]">
                <div className="flex-1 lg:flex lg:items-end  lg:justify-end items-center justify-center  overflow-hidden">
                  <div className=" w-full">
                    <FadeInRight>
                      <Image
                        src={`/assets/product-feature/${item.featuredImageURL}`}
                        alt={""}
                        width={500}
                        height={500}
                        className=" object-cover w-full lg:rounded-ss-xl lg:h-full h-[300px]"
                      />
                    </FadeInRight>
                  </div>
                </div>

                <div className="flex-1 px-4 lg:px-[100px] grid gap-2 lg:order-first items-end mt-8 pb-8 mb-8">
                  <div className="grid gap-5">
                    <FadeInUp>
                      <div className="grid gap-5">
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

                        <span className=" text-slate-300 text-lg font-normal  lg:w-[400px] ">
                          {item.description}
                        </span>
                        <button
                          className="text-teal-400 text-sm font-normal  leading-tight flex gap-2 items-center p-2 hover:bg-teal-400/10 rounded-lg w-fit"
                          onClick={() => {
                            window.location.href = `/product/detail-product/${item.id}`;
                          }}>
                          See Detail
                          <Image
                            src={
                              "/assets/product-icons/arrow-circle-broken-right.svg"
                            }
                            alt={"icon"}
                            width={20}
                            height={20}
                          />
                        </button>
                      </div>
                    </FadeInUp>

                    <div className="flex gap-4 lg:gap-10 items-start">
                      {item.images.slice(0, 3).map((item, index) => (
                        <FadeIn key={index}>
                          <div className="grid gap-5">
                            <Image
                              src={`/assets/product-preview${item.url}`}
                              alt={"icon"}
                              width={100}
                              height={100}
                              className="rounded-full lg:w-[100px] w-[64px]"
                            />
                            <span className="text-center w-[64px] lg:w-[100px] text-slate-300 lg:text-lg text-sm  lg:font-normal ">
                              {item.imageTitle}
                            </span>
                          </div>
                        </FadeIn>
                      ))}
                      {item.images.length > 3 && (
                        <FadeIn>
                          <div>
                            <span className="text-start text-slate-400 text-lg font-normalleading-7">
                              and <br /> more ...
                            </span>
                          </div>
                        </FadeIn>
                      )}
                    </div>

                    <FadeIn>
                      <div className="flex gap-6 lg:w-fit w-full justify-between mt-5">
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
                    </FadeIn>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </Slider>
      </div>
    </MotionDiv>
  );
}
