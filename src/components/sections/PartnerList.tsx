import React, { useEffect, useState } from "react";
import Slider from "react-slick";
import { ClientList } from "../../../service/DummyData";
import Image from "next/image";
declare module "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { FadeIn, FadeInDown, FadeInUp } from "../animations/AnimationTemplate";
import { MotionDiv } from "../animations/MotionDiv";

interface Props {
  id: number;
  client: string;
  url: string;
}
[];

export default function PartnerList() {
  const [data, setData] = useState<Props[]>([]);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      setTimeout(() => {
        setData(ClientList);
      }, 1000);
    };

    fetchData();
  }, []);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768);
    };

    // Initial check
    handleResize();

    // Add event listener for window resize
    window.addEventListener("resize", handleResize);

    // Cleanup the event listener on component unmount
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 5,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
  };

  const mobileSettings = {
    ...settings,
    slidesToShow: 3, // Adjust the number of slides for mobile view
  };



  return (
    <MotionDiv>
      <div className="py-32 flex-col justify-center items-center gap-16 min-h-screen">
        <div className="flex-col justify-start items-center gap-5 inline-flex lg:px-[200px] px-4 w-full">
          <FadeInUp>
            <span className="text-center text-teal-400 text-base font-extrabold leading-normal">
              Integration
            </span>
          </FadeInUp>
          <FadeInUp>
            <span className="text-center text-indigo-900 text-4xl font-extrabold">
              Trust and Transparency
            </span>
          </FadeInUp>
          <FadeInUp>
            <span className=" text-center flex  text-neutral-800 text-xl font-normal lg:w-[500px]">
              We&rsquo;re proud to showcase our performance data and the growing
              list of companies who have chosen to partner with us.
            </span>
          </FadeInUp>
        </div>

        <div className="lg:flex gap-10 w-full items-center justify-center mt-20">
          <FadeIn>
            <div className="flex-col justify-start items-center gap-3 inline-flex lg:mt-0 mt-10 lg:w-fit w-full">
              <h1 className="text-center text-indigo-900 text-6xl font-extrabold leading-[72px]">
                1000+
              </h1>
              <span className="text-center text-neutral-800 text-lg font-normal leading-7">
                Items Sold
              </span>
            </div>
          </FadeIn>
          <FadeIn>
            <div className="flex-col justify-start items-center gap-3 inline-flex lg:mt-0 mt-10 lg:w-fit w-full">
              <h1 className="text-center text-indigo-900 text-6xl font-extrabold leading-[72px]">
                15 Min
              </h1>
              <span className="text-center text-neutral-800 text-lg font-normal leading-7">
                Avg. Delivery Time
              </span>
            </div>
          </FadeIn>
          <FadeIn>
            <div className="flex-col justify-start items-center gap-3 inline-flex lg:mt-0 mt-10 lg:w-fit w-full">
              <h1 className="text-center text-indigo-900 text-6xl font-extrabold leading-[72px]">
                98%
              </h1>
              <span className="text-center text-neutral-800 text-lg font-normal leading-7">
                Customer Satisfactions
              </span>
            </div>
          </FadeIn>
        </div>
        <FadeInDown>
          <div className="flex-col mt-20 w-full items-center justify-center">
            <div className="mb-5 flex items-center justify-center">
              <span className="text-indigo-900 text-lg font-extrabold">
                Trusted
              </span>
            </div>
            <div>
              <Slider {...(isMobile ? mobileSettings : settings)}>
                {data.map((item, index) => (
                  <div
                    key={index}
                    className={
                      isMobile ? "px-4" : "flex justify-center items-center"
                    }>
                    <Image
                      src={`/assets/partner-logo/${item.url}`}
                      alt={"icon"}
                      width={isMobile ? 100 : 120}
                      height={100}
                      className=""
                    />
                  </div>
                ))}
              </Slider>
            </div>
          </div>
        </FadeInDown>
      </div>
    </MotionDiv>
  );
}
