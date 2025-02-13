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
      <div className="py-[112px] flex-col justify-center items-center gap-16 h-[100vh]">
        <div className="flex-col lg:justify-start items-center lg:gap-5 gap-4 inline-flex lg:px-[200px] px-4 w-full justify-center">
          
          <div className="flex flex-col items-center justify-center gap-3"><FadeInUp>
            <span className="text-center text-teal-400 lg:text-base font-extrabold lg:leading-normal  text-sm font-['Sen'] leading-tight">
              Integration
            </span>
          </FadeInUp>
          <FadeInUp>
            <span className="text-center flex w-full text-indigo-900 lg:text-4xl font-extrabold text-3xl font-['Sen'] leading-[38px]">
              Trust and Transparency
            </span>
          </FadeInUp>
          </div>
          <FadeInUp>
            <span className=" text-center flex  text-[#212121] lg:text-xl font-normal lg:w-[500px]   text-lg font-['Sen'] leading-7">
              We&rsquo;re proud to showcase our performance data and the growing
              list of companies who have chosen to partner with us.
            </span>
          </FadeInUp>
        </div>

        <FadeInDown>
          <div className="flex-col lg:mt-20 mt-12 w-full items-center justify-center">
            <div className="mb-5 flex items-center justify-center">
              <span className="text-indigo-900 text-lg font-extrabold">
                Trusted By
              </span>
            </div>
            <div className="py-2 grid grid-cols-3 lg:grid-cols-6 lg:gap-20 lg:px-20 gap-6">
              {data.map((item, index) => (
                <div
                  key={index}
                  className={
                    isMobile
                      ? "px-4 flex justify-center items-center"
                      : "flex justify-center items-center"
                  }>
                  <Image
                    src={`/assets/partner-logo/${item.url}`}
                    alt={item.client}
                    width={300}
                    height={300}
                    className=" lg:w-44 w-[120px] flex items-center justify-center"
                  />
                </div>
              ))}
            </div>
          </div>
        </FadeInDown>
      </div>
    </MotionDiv>
  );
}
