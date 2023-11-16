import Image from "next/image";
import React, { useEffect, useState } from "react";
import { ProductSlider } from "../../../service/DummyData";
import ApiDescriptionComponent from "../molecules/ArticleHtmlCode";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { FadeIn } from "../animations/AnimationTemplate";
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
export default function ProductCatalogue() {
  const [data, setData] = useState<Props[]>([]);

  useEffect(() => {
    const fetchData = async () => {
      setTimeout(() => {
        setData(ProductSlider);
      }, 1000);
    };

    fetchData();
  }, []);

    const [ref, inView] = useInView({ triggerOnce: true });
  
    const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    if (inView) {
      setIsVisible(true);
    }
  }, [inView]);

  return (
    <>
      {data.map((item, index) => (
        <div key={index} className="">
          <MotionDiv>
          <div
            className={`flex w-full lg:relative items-center justify-center min-h-screen ${
              index % 2 === 0 ? `bg-white` : `bg-gray-100`
              }`}>
              
            <div className="lg:absolute lg:w-[1200px] lg:flex w-full grid gap-8 px-4 py-8">
              <div className="lg:w-2/5">
                <div className="relative overflow-hidden  w-full">
                  <FadeIn>

                  <Image
                    src={`/assets/product-feature/${item.featuredImageURL}`}
                    alt={item.productName}
                    width={700}
                    height={700}
                    className="lg:w-[388px] h-[580px] rounded-lg object-cover"
                    />
                    </FadeIn>
                </div>
              </div>
              <div
                className={`lg:w-3/5  flex-col justify-start items-start gap-4 lg:gap-8 inline-flex ${
                  index % 2 === 0 ? `` : `lg:order-first  lg:pr-20`
                  } `}><FadeIn>
                  
                <Image
                  src={"/assets/product-page/Ornament.svg"}
                  width={100}
                  height={100}
                  alt={""}
                  className="w-20"
                  />
                </FadeIn>
                <FadeIn>

                <h2 className="text-indigo-900 text-5xl font-bold font-['Sen'] leading-[60px]">
                  {item.productName}
                </h2>
                </FadeIn>
                <FadeIn>

                <p className="text-neutral-800 text-base font-normal font-['Sen'] leading-normal">
                  <ApiDescriptionComponent description={item.fullDescription} />
                </p>
                </FadeIn>
                <FadeIn>

                <button
                  className="text-teal-400 text-sm font-normal  leading-tight flex gap-2 items-center p-2 hover:bg-teal-400/10 rounded-lg w-fit"
                  onClick={() => {
                    window.location.href = `/product/detail-product/${item.id}`;
                  }}>
                  See Detail
                  <Image
                    src={"/assets/product-icons/arrow-circle-broken-right.svg"}
                    alt={"icon"}
                    width={20}
                    height={20}
                    />
                </button>
                    </FadeIn>
              </div>
            </div>
          </div>
        </MotionDiv>
        </div>
      ))}
    </>
  );
}
