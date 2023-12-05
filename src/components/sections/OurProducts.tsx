import Image from "next/image";
import React, { useEffect, useRef, useState } from "react";
import { FadeIn, FadeInUp } from "../animations/AnimationTemplate";
import { MotionDiv } from "../animations/MotionDiv";
import {  ProductProps } from "../../../service/type";
import { useRouter } from "next/router";
import {  getProductHome } from "../../../service/API";
import Button from "../atomic/Button";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";


export default function OurProducts() {
  const router = useRouter();
  const id: string | undefined = router.query?.id as string | undefined;
  const [data, setData] = useState<ProductProps[]>([]);
    const [renderedData, setRenderedData] = useState<ProductProps[]>([]);

useEffect(() => {
  const fetchData = async () => {
    try {
      const res = await getProductHome();
      setData(res);
      console.log(res);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  fetchData();
}, []);


  useEffect(() => {
    const limitedDataCopy = [...data.slice(0, 10)];

    if (id) {
      const excludedIndex = limitedDataCopy.findIndex(
        (item) => item.id.toString() === id.toString()
      );

      if (excludedIndex !== -1) {
        limitedDataCopy.splice(excludedIndex, 1, ...(data.slice( 1) || []));
      }
    }

    setRenderedData(limitedDataCopy);
  }, [data, id]);



        const sliderSettings = {
          dots: false,
          infinite: true,
          speed: 500,
          slidesToShow: 4,
          slidesToScroll: 1,
          responsive: [
            {
              breakpoint: 768,
              settings: {
                slidesToShow: 2,
              },
            },
          ],
        };

        const sliderRef = useRef<Slider>(null);




  


  return (
    <MotionDiv>
      <div className="lg:py-[128px] py-[64px]  bg-slate-100 grid  items-start  lg:h-fit  lg:w-full w-[100vw] ">
        <FadeInUp>
          <div className="flex items-center justify-between  lg:px-32 px-4 lg:w-full w-[100vw] ">
            <div className=" grid gap-5">
              <div className="grid gap-3">
                <span className="text-teal-400 text-base font-extrabold  leading-normal  lg:w-full w-[100vw] ">
                  Our Products
                </span>
                <h2 className=" lg:text-4xl lg:leading-[44px] text-indigo-900 text-3xl font-extrabold font-['Sen'] leading-[38px] m-0 p-0  lg:w-full w-[100vw]  ">
                  Explore Another Sea Miracle
                </h2>
              </div>

              <div className=" text-[#212121]  lg:text-xl lg:leading-[30px] text-lg font-normal font-['Sen'] leading-7 pe-4  lg:w-full w-[100vw]  ">
                Tool and strategies modern teams need to help their companies
                grow.
              </div>
            </div>
          </div>
        </FadeInUp>

        <div className=" lg:ps-32 mt-16 ps-4 ">
          <Slider
            {...sliderSettings}
            ref={sliderRef}
            className="lg:w-[100vw] w-[170vw] overflow-hidden ">
            {" "}
            {renderedData.map((item, index) =>
              id && item.id.toString() === id.toString() ? null : (
                <div
                  key={item.id} // Pastikan setiap slide memiliki key yang unik
                  className="  hover:shadow-lg duration-500 overflow-visible"
                  onClick={() => {
                    window.location.href = `/article/detail-article/${item.id}`;
                  }}>
                  <div className="lg:me-8 me-4 bg-white cursor-pointer rounded-md hover:bg-slate-200  p-0 ms-0">
                    <FadeIn>
                      <div className=" overflow-hidden w-fit">
                        {item.featured_image && (
                          <Image
                            src={item.featured_image}
                            alt={item.name}
                            width={700}
                            height={100}
                            className="rounded hover:scale-110 duration-700 object-cover  lg:w-[380px] h-[250px]"
                          />
                        )}
                      </div>
                      <div className="grid gap-3 p-6 lg:p-8">
                        <div className="flex flex-col gap-5 mb-16">
                          <span className="text-indigo-900 text-xl font-bold font-['Sen'] leading-[30px]">
                            {item.name}
                          </span>
                          <div className="line-clamp-3  text-neutral-800 text-base font-normal font-['Sen'] leading-normal">
                            {item.short_description}
                          </div>
                        </div>

                        <FadeIn>
                          <button
                            className="text-[#2F306A] text-sm font-normal  leading-tight flex gap-2 items-center hover:bg-teal-400/10 rounded-lg w-fit "
                            onClick={() => {
                              window.location.href = `/article/product-article/${item.id}`;
                            }}>
                            See Detail
                            <Image
                              src={
                                "/assets/general/arrow-circle-broken-right.png"
                              }
                              alt={"icon"}
                              width={20}
                              height={20}
                              color="#2F306A"
                            />
                          </button>
                        </FadeIn>
                      </div>
                    </FadeIn>
                  </div>
                </div>
              )
            )}
          </Slider>
        </div>

        <FadeIn>
          <div className="flex gap-8  justify-between   lg:px-0 px-20 h-fit mt-12 lg:ms-32  lg:w-full w-[100vw] ">
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
    </MotionDiv>
  );
}
