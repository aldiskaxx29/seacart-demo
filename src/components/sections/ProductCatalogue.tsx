import Image from "next/image";
import React, { useEffect, useState } from "react";
import { ProductSlider } from "../../../service/DummyData";
import ApiDescriptionComponent from "../molecules/ArticleHtmlCode";
import { FadeIn } from "../animations/AnimationTemplate";
import { MotionDiv } from "../animations/MotionDiv";
import { getProductHome } from "../../../service/API";
import { ProductProps } from "../../../service/type";


export default function ProductCatalogue() {
const [data, setData] = useState<ProductProps[]>([]);
const [dataDummy, setDataDummy] = useState<ProductProps[]>([]);

useEffect(() => {
  const fetchData = async () => {
    try {
      const res = await getProductHome();
      setData(res);
      setDataDummy(ProductSlider);
      console.log(res);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  fetchData();
}, []);



  return (
    <>
      {dataDummy.map((item, index) => (
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
                        src={`${item?.images_url[1]}`}
                        alt={item.name}
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
                  } `}>
                  <FadeIn>
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
                      {item.name}
                    </h2>
                  </FadeIn>
                  <FadeIn>
                    <p className="text-neutral-800 text-base font-normal font-['Sen'] leading-normal">
                      <ApiDescriptionComponent
                        description={item.description}
                      />
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
                        src={
                          "/assets/product-icons/arrow-circle-broken-right.svg"
                        }
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
