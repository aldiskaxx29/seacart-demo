import Image from "next/image";
import { FadeIn, FadeInDown } from "../animations/AnimationTemplate";
import { MotionDiv } from "../animations/MotionDiv";
import { ProductProps } from "../../../service/type";
import { ProductSlider } from "../../../service/DummyData";
import { getProductHome } from "../../../service/API";
import React, { useEffect, useState } from "react";

interface ProductDetailContentProps {
  product: {
    id: number;
    name: string;
    short_description: string;
    description: string;
    images_url: string[];
    sub_products: {
      name: string;
      image_url: string;
      weight: string;
      type: string;
      wrap: string;
    }[];
  };
}

const ProductDetailContent: React.FC<ProductDetailContentProps> = ({
  product,
}) => {
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
      <MotionDiv>
        <div className="flex w-full lg:relative items-center justify-center pt-[120px]">
          <div className=" flex px-4 lg:w-[1200px] absolute w-full items-center gap-2">
            <button
              className=" text-gray-400 text-sm font-normal font-['Sen'] leading-tight hover:bg-gray-100 rounded-md p-2 flex item center justify-center "
              onClick={() => {
                window.location.href = `/`;
              }}>
              <Image
                src={"/assets/general/_Breadcrumb button base.svg"}
                width={20}
                height={20}
                alt={"next"}
                className="w-5 h-5"
              />
            </button>
            <div>
              <Image
                src={"/assets/general/chevron-right (1).svg"}
                width={20}
                height={20}
                alt={"next"}
              />
            </div>
            <button
              className=" text-gray-400 text-sm font-normal font-['Sen'] leading-tight hover:bg-gray-100 rounded-md p-2"
              onClick={() => {
                window.location.href = `/product`;
              }}>
              Product
            </button>
            <div>
              <Image
                src={"/assets/general/chevron-right (1).svg"}
                width={20}
                height={20}
                alt={"next"}
              />
            </div>
            <div className="p-2 h-7 px-2 py-1 bg-zinc-200 rounded-md justify-center items-center inline-flex text-indigo-950 text-sm font-extrabold font-['Sen'] leading-tight">
              {product.name}
            </div>
          </div>
        </div>

        <div className={`flex w-full  items-start justify-center h-fit pt-5`}>
          <div className=" lg:w-[1200px] lg:flex w-full grid gap-8 px-4 pb-64">
            <div className="lg:w-2/5 griditems-start justify-start">
              <FadeIn>
                <h2 className="text-indigo-900 lg:text-5xl font-bold font-['Sen'] lg:leading-[60px] lg:w-3/4 mb-6 text-center text-3xl  leading-[38px]  lg:text-left">
                  Try out Our Fresh {product.name}
                </h2>
              </FadeIn>
              <div className="grid gap-4 h-fit">
                <div className="relative overflow-hidden  w-full flex gap-5 items-end lg:px-0">
                  <div className="w-1/2 h-[300px] flex items-end max-w-[3000px]">
                    <FadeIn>
                      <Image
                        src={`${product.images_url[1]}`}
                        alt={product.name}
                        width={700}
                        height={700}
                        className=" object-cover h-[300px]"
                      />
                    </FadeIn>
                  </div>
                  <div className="relative overflow-hidden w-1/2  max-w-[3000px] ">
                    <FadeIn>
                      <Image
                        src={`${product.images_url[2]}`}
                        alt={product.name}
                        width={700}
                        height={700}
                        className=" object-cover aspect-square"
                      />
                    </FadeIn>
                  </div>
                </div>
                <div className="relative overflow-hidden  w-full flex gap-5 items-start">
                  <div className="w-1/3 max-w-[3000px]">
                    <FadeIn>
                      <Image
                        src={`${product.images_url[3]}`}
                        alt={product.name}
                        width={700}
                        height={(4 / 3) * 700}
                        className=" object-cover h-[250px]"
                      />
                    </FadeIn>
                  </div>
                  <div className="relative overflow-hidden w-2/3 max-w-[3000px]  ">
                    <FadeIn>
                      <Image
                        src={`${product.images_url[0]}`}
                        alt={product.name}
                        width={700}
                        height={700}
                        className=" object-cover aspect-square"
                      />
                    </FadeIn>
                  </div>
                </div>
              </div>
            </div>
            <div
              className={`lg:w-3/5  flex-col justify-start items-start gap-4 lg:gap-8 inline-flex ${
                product.id % 2 !== 0
                  ? ` lg:pr-8  lg:ml-20`
                  : ` lg:px-0 lg:order-first  lg:pr-20`
              } `}>
              <FadeIn>
                <div className="flex flex-col gap-3 items-start justify-start h-fit">
                  <h2 className="text-indigo-900 lg:text-5xl lg:leading-[60px]  text-2xl font-bold font-['Sen']  h-fit m-0 p-0">
                    {product.name}
                  </h2>
                  <p className="text-[#212121] lg:text-base font-normal font-['Sen'] lg:leading-normal  text-sm  leading-tight  h-fit  m-0 p-0">
                    {product.short_description}
                  </p>
                </div>
              </FadeIn>
              <div className="grid lg:gap-2 gap-1 w-full">
                {product.sub_products.map((item, index) => (
                  <div className=" w-full" key={index}>
                    <FadeInDown>
                      <div className="flex w-full lg:py-1">
                        <div className="lg:w-1/3 w-[120px] lg:flex grid items-center  justify-center lg:justify-start lg:gap-0  bg-indigo-900 text-white text-base font-bold font-['Sen'] lg:leading-[30px]  rounded-tl-md rounded-bl-md lg:text-start text-center   lg:text-xl  leading-[30px] p-2 gap-1">
                          <div className="  w-full flex lg:items-start lg:justify-start items-center justify-center ">
                            <Image
                              src={`${item.image_url}`}
                              alt={"icon"}
                              width={100}
                              height={100}
                              className="rounded-full lg:w-[100px] lg:h-[100px] object-cover lg:ms-[-50px]   flex items-center justify-center w-12 h-12 lg:p-1"
                            />{" "}
                          </div>

                          <div className="w-full lg:text-start text-center px-1 text-sm font-bold font-['Sen'] leading-tight text-white lg:text-xl lg:leading-[30px]  lg:ms-[-72px]">
                            {item.name}
                          </div>
                        </div>
                        <div className="lg:w-1/3  w-1/3  grid gap-0 text-sm text-indigo-900 font-normal font-['Sen'] leading-[30px] items-center justify-start lg:px-4 px-2  bg-gray-100 lg:text-lg   lg:leading-7">
                          <div className="text-start grid justify-center items-start w-full  text-xs font-normal font-['Sen'] leading-[18px] ms-1 text-indigo-900 lg:text-lg lg:leading-7">
                            <div className="flex items-start justify-start">
                              <li className="me-[-8px]"></li>
                              {item.weight}
                            </div>

                            {item.type !== "" && " " ? (
                              <div className="grid items-start justify-start">
                                      
                                  {item.type.split("$$").map((group, index) => (
                                    <div key={index} className="flex"><li className="me-[-8px]"></li>
                                      <div className="grid">
                                      {group
                                        .split("%%")
                                        .map((size, sizeIndex) => (
                                          <div key={sizeIndex} className="grid">{size.trim()}</div>
                                        ))}                                        
                                      </div>

                                    </div>
                                  ))}
                              </div>
                            ) : null}
                          </div>
                        </div>
                        <div className="lg:w-1/3  w-1/3  items-center lg:text-lg  text-indigo-900 font-normal font-['Sen'] justify-center text-start grid   bg-gray-50 rounded-tr-md rounded-br-md text-xs  leading-[18px]   lg:leading-7">
                          <div>
                            {item.wrap.split(", ").map((wrapItem, index) => (
                              <div
                                key={index}
                                className="flex items-start justify-star">
                                <li className="me-[-8px] ms-2"></li>
                                {wrapItem.trim()}{" "}
                                {index < item.wrap.split(", ").length - 3 &&
                                  ", "}
                              </div>
                            ))}
                          </div>
                        </div>
                      </div>
                    </FadeInDown>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </MotionDiv>
    </>
  );
};

export default ProductDetailContent;
