import Image from "next/image";
import { FadeIn, FadeInDown } from "../animations/AnimationTemplate";
import { MotionDiv } from "../animations/MotionDiv";
import { ProductProps } from "../../../service/type";
import { ProductSlider } from "../../../service/DummyData";
import { getProductHome } from "../../../service/API";
import React, { useEffect,  useState } from "react";

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
        <div className="flex w-full lg:relative items-center justify-center pt-[150px]">
          <div className=" flex px-4 lg:w-[1200px] absolute w-full items-center">
            <button
              className=" text-gray-400 text-sm font-normal font-['Sen'] leading-tight hover:bg-gray-100 rounded-md p-2 flex item center justify-center"
              onClick={() => {
                window.location.href = `/`;
              }}>
              <Image
                src={"/assets/general/_Breadcrumb button base.svg"}
                width={20}
                height={20}
                alt={"next"}
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
            <div className="p-2">{product.name}</div>
          </div>
        </div>

        <div className={`flex w-full  items-start justify-center h-fit pt-5`}>
          <div className=" lg:w-[1200px] lg:flex w-full grid gap-8 px-4 pb-64">
            <div className="lg:w-2/5 griditems-start justify-start">
              <FadeIn>
                <h2 className="text-indigo-900 text-5xl font-bold font-['Sen'] leading-[60px] lg:w-3/4 mb-4">
                  Try out Our Fresh {product.name}
                </h2>
              </FadeIn>
              <div className="grid gap-4 h-fit">
                <div className="relative overflow-hidden  w-full flex gap-5 items-end">
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
                  ? ` lg:px-8`
                  : ` lg:px-0 lg:order-first  lg:pr-20`
              } `}>
              <FadeIn>
                <h2 className="text-indigo-900 text-5xl font-bold font-['Sen'] leading-[60px]">
                  {product.name}
                </h2>
                <p className="text-neutral-800 text-base font-normal font-['Sen'] leading-normal">
                  {product.short_description}
                </p>
              </FadeIn>
              <div className="grid gap-2 w-full">
                {product.sub_products.map((item, index) => (
                  <div className=" w-full" key={index}>
                    <FadeInDown>
                      <div className="flex w-full lg:py-1 border-b border-gray-200">
                        <div className="lg:w-1/3 w-[120px] lg:flex grid items-center  justify-center lg:justify-start lg:gap-0  lg:text-base bg-indigo-900 text-white text-base font-bold font-['Sen'] lg:leading-[30px] lg:h-[100px] h-full  rounded lg:text-start text-center py-2">
                          <div className=" lg:w-[130px] w-full flex lg:items-start lg:justify-start items-center justify-center my-2">
                            <Image
                              src={`${item.image_url}`}
                              alt={"icon"}
                              width={100}
                              height={100}
                              className="rounded-full lg:w-[80px] w-[64px] lg:ms-[-25px] flex items-center justify-center"
                            />{" "}
                          </div>

                          <div className="w-full lg:text-start text-center px-1">
                            {item.name}
                          </div>
                        </div>
                        <div className="lg:w-1/3  w-1/3  grid gap-0 lg:text-base text-sm text-indigo-900 font-normal font-['Sen'] leading-[30px] items-center justify-center">
                          {Array.isArray(item.weight) ? (
                            item.weight.map((weight, index) => (
                              <li
                                key={index}
                                className="mt-[-10px] p-0 text-center grid justify-center items-center w-full">
                                {weight}
                              </li>
                            ))
                          ) : (
                            <div className="text-center grid justify-center items-center w-full">
                              <li>{item.weight}</li>
                              {item.type == "" && "" ? (
                                <li> {item.type}</li>
                              ) : null}
                            </div>
                          )}
                        </div>
                        <div className="lg:w-1/3  w-1/3  items-center lg:text-base text-sm text-indigo-900 font-normal font-['Sen'] justify-center text-center grid">
                          <div>
                            {item.wrap.split(", ").map((wrapItem, index) => (
                              <li key={index}>
                                {wrapItem.trim()}{" "}
                                {index < item.wrap.split(", ").length - 3 &&
                                  ", "}
                              </li>
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
