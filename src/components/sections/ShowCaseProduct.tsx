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
      <div className="bg-[#2F306A] lg:flex h-[100vh] pt-[72px] overflow-hidden">
        <div className="flex-1 w-2/5 overflow-hidden">
          {Array.isArray(data) && data.length > 0 && (
            <Slider
              ref={sliderRef}
              {...settings}
              afterChange={handleSlideChange}>
              {data.map((item, index) => (
                <div key={index} className="w-full">
                  <FadeInRight>
                    <Image
                      src={`${item?.featured_image}`}
                      alt={item?.name}
                      width={500}
                      height={500}
                      className="object-cover w-full lg:rounded-ss-xl lg:h-[700px] h-[300px]"
                    />
                  </FadeInRight>
                </div>
              ))}
            </Slider>
          )}
        </div>

        {/* Component Content */}
        {Array.isArray(data) && data.length > 0 && (
          <div className="grid gap-2 lg:order-first items-stretch lg:w-3/5 pt-[72px]">
            <div className="flex-1 px-4 lg:px-[100px] flex flex-col justify-between h-full">
              <div className="grid gap-8 h-fit items-center">
                <FadeInUp>
                  <div className="grid gap-6">
                    <Image
                      src={"/assets/product-icons/box.svg"}
                      alt={"icon"}
                      width={24}
                      height={24}
                      className="w-12 h-12 p-2 bg-slate-300 rounded-full border-zinc-200 justify-center items-center"
                    />
                    <div className="grid gap-4">
                      <h3 className="text-slate-100 text-3xl font-extrabold leading-[38px]">
                        {data[currentSlide]?.name}
                      </h3>

                      <span className="text-slate-300 text-lg font-normal lg:w-[560px] ">
                        {data[currentSlide]?.short_description}
                      </span>
                      <button
                        className="text-teal-400 text-sm font-normal leading-tight flex gap-2 items-center  hover:bg-teal-400/10 rounded-lg w-fit"
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
                  </div>
                </FadeInUp>

                <div className="flex items-center justify-start gap-5 px-4">
                  <div className="flex gap-4 lg:gap-5 items-start">
                    {data[currentSlide]?.sub_products
                      .slice(0, 3)
                      .map((subItem, subIndex) => (
                        <FadeIn key={subIndex}>
                          <div className="grid gap-4">
                            <Image
                              src={`${subItem.image_url}`}
                              alt={"icon"}
                              width={100}
                              height={100}
                              className="rounded-full lg:w-[100px] w-[64px] aspect-square object-cover"
                            />
                            <span className="text-center w-[64px] lg:w-[100px] text-slate-300 lg:text-lg text-sm lg:font-normal   font-normal font-['Sen'] leading-7">
                              {subItem.name}
                            </span>
                          </div>
                        </FadeIn>
                      ))}
                  </div>
                  {data[currentSlide]?.images_url.length > 3 && (
                    <FadeIn>
                      <div className=" items-start justify-center flex flex-col text-start text-slate-400 text-lg font-normal leading-7 px-6]">
                        <div>and</div>
                        <div>more ...</div>
                      </div>
                    </FadeIn>
                  )}
                </div>
              </div>

              <FadeIn>
                <div className="flex gap-8 w-fit justify-between mb-16">
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
            </div>
          </div>
        )}
      </div>
    </MotionDiv>
  );
}
