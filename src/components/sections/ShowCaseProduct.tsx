import React, { useEffect, useRef, useState } from "react";
import Slider from "react-slick";
import Image from "next/image";
import { FadeIn, FadeInRight, FadeInUp } from "../animations/AnimationTemplate";
import { MotionDiv } from "../animations/MotionDiv";
import { getProductHome } from "../../../service/API";
import { ProductProps } from "../../../service/type";

export default function ShowCaseProduct() {
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };

  const sliderRef = useRef<Slider>(null);

  const [data, setData] = useState<ProductProps[]>([]);
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await getProductHome();
        setData(res);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, []);

  const handleSlideChange = (index: any) => {
    setCurrentSlide(index);
  };

  return (
    <MotionDiv>
      <div className="bg-[#2F306A] lg:flex h-[100vh] lg:h-[100vh] lg:mt-0 mt-20 lg:pt-[72px] overflow-hidden">
        <div className="flex-1 lg:w-2/5 overflow-hidden z-10">
          {Array.isArray(data) && data.length > 0 && (
            <Slider
              ref={sliderRef}
              {...settings}
              afterChange={handleSlideChange}>
              {data.map((item, index) => (
                <div
                  key={index}
                  className="w-full flex items-center justify-center">
                  <FadeInRight>
                    <Image
                      src={`${item?.featured_image}`}
                      alt={item?.name}
                      width={500}
                      height={500}
                      className="object-cover w-full lg:rounded-ss-xl lg:h-[800px] h-[228px]"
                    />
                  </FadeInRight>
                </div>
              ))}
            </Slider>
          )}
        </div>

        {/* Component Content */}
        {Array.isArray(data) && data.length > 0 && (
          <div className="grid gap-2 lg:order-first lg:w-3/5 lg:pt-[72px] pt-6 pb-5">
            <div className="lg:flex-1 px-4 lg:px-[100px] flex flex-col lg:justify-between h-full">
              <div className="flex flex-col gap-6 justify-start  items-start lg:h-full h-[320px]">
                <div className=" h-fit">
                  <FadeInUp>
                    <div className="grid lg:gap-4  h-fit">
                      <div className="lg:grid lg:gap-6 gap-4 flex items-start h-fit">
                        <Image
                          src={"/assets/general/Featured icon.svg"}
                          alt={"icon"}
                          width={24}
                          height={24}
                          className="lg:w-12 lg:h-12 w-8 h-8"
                        />

                        <h3 className="text-slate-100 text-2xl lg:text-3xl font-extrabold lg:leading-[38px] h-fit">
                          {data[currentSlide]?.name}
                        </h3>
                      </div>

                      <span className="text-slate-300 lg:text-lg font-normal lg:w-[560px]  text-base font-['Sen'] leading-normal h-fit">
                        {data[currentSlide]?.short_description}
                      </span>
                      <button
                        className="text-teal-400 text-sm font-normal leading-tight flex gap-2 items-center  hover:bg-teal-400/10 rounded-lg w-fit mt-3  h-fit "
                        onClick={() => {
                          window.location.href = `/product/detail-product/${data[currentSlide]?.id}`;
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
                </div>

                <div className="flex items-center justify-start gap-5 lg:px-4 h-fit">
                  <div className="flex gap-4 lg:gap-5 items-start h-fit">
                    {data[currentSlide]?.sub_products
                      .slice(0, 3)
                      .map((subItem, subIndex) => (
                        <FadeIn key={subIndex}>
                          <div className="grid gap-3">
                            <Image
                              src={`${subItem.image_url}`}
                              alt={"icon"}
                              width={100}
                              height={100}
                              className="rounded-full lg:w-[100px] w-[64px] aspect-square object-cover"
                            />
                            <span className="text-center w-[64px] lg:w-[100px] text-slate-300 lg:text-lg text-sm lg:font-normal   font-normal font-['Sen'] lg:leading-7  leading-tight">
                              {subItem.name}
                            </span>
                          </div>
                        </FadeIn>
                      ))}
                  </div>
                  {data[currentSlide]?.images_url.length > 3 && (
                    <FadeIn>
                      <div className=" items-start justify-center flex flex-col text-start text-slate-400 lg:text-lg font-normal lg:leading-7   text-sm font-['Sen'] leading-tight h-fit">
                        <div>and</div>
                        <div>more ...</div>
                      </div>
                    </FadeIn>
                  )}
                </div>
              </div>

              <FadeIn>
                <div className="flex gap-8 lg:w-fit justify-between lg:mb-16   lg:px-0 px-20 h-fit">
                  <button
                    className=""
                    onClick={() => sliderRef?.current?.slickPrev()}>
                    {" "}
                    <Image
                      src={"/assets/product-icons/arrow-left.svg"}
                      alt={"icon"}
                      width={20}
                      height={20}
                      className="w-14 h-14 hover:bg-slate-300 bg-white bg-opacity-90 rounded-[28px] p-4"
                    />
                  </button>
                  <button
                    className=""
                    onClick={() => sliderRef?.current?.slickNext()}>
                    {" "}
                    <Image
                      src={"/assets/product-icons/arrow-right.svg"}
                      alt={"icon"}
                      width={20}
                      height={20}
                      className="w-14 h-14 hover:bg-slate-300 bg-white bg-opacity-90 rounded-[28px] p-4"
                    />
                  </button>
                </div>
              </FadeIn>
              <div className="relative">
                <Image
                  src={`/assets/general/GraphicProduct${
                    currentSlide % 2 === 0 ? "1" : "2"
                  }.svg`}
                  alt={""}
                  height={500}
                  width={500}
                  className="object-cover absolute lg:bottom-10 bottom-[-20px] lg:right-[-200px] right-[-10px] z-0 lg:w-[450px] w-[300px]"
                />
              </div>
            </div>
          </div>
        )}
      </div>
    </MotionDiv>
  );
}
