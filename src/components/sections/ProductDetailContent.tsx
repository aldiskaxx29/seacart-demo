import Image from "next/image";
import { useRouter } from "next/router";
import React from "react";

interface ProductDetailContentProps {
  product: {
    id: number;
    productName: string;
    description: string;
    featureImageCollage: { id: number; url: string }[];
    featuredImageURL: string;
    images: {
      id: number;
      url: string;
      imageTitle: string;
      weight: any;
      cut: string;
      package: string[];
    }[];
  };
}

const ProductDetailContent: React.FC<ProductDetailContentProps> = ({
  product,
}) => {
  return (
    <>
      <div className="flex w-full lg:relative items-center justify-center pt-[150px]">
        <div className=" flex px-4 lg:w-[1200px] absolute w-full items-center">
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
          <div className="p-2">{product.productName}</div>
        </div>
      </div>

      <div className={`flex w-full  items-start justify-center h-fit pt-5`}>
        <div className=" lg:w-[1200px] lg:flex w-full grid gap-8 px-4 pb-64">
          <div className="lg:w-2/5 grid gap-5">
            <h2 className="text-indigo-900 text-5xl font-bold font-['Sen'] leading-[60px] w-3/4">
              Try out Our Fresh {product.productName}
            </h2>
            <div className="relative overflow-hidden  w-full flex gap-5 items-end">
              <div className="w-1/2 h-[300px] flex items-end max-w-[3000px]">
                <Image
                  src={`/assets/product-detail-collage${product.featureImageCollage[1].url}`}
                  alt={product.productName}
                  width={700}
                  height={700}
                  className=" object-cover h-[300px]"
                />
              </div>
              <div className="relative overflow-hidden w-1/2  max-w-[3000px] ">
                <Image
                  src={`/assets/product-detail-collage${product.featureImageCollage[2].url}`}
                  alt={product.productName}
                  width={700}
                  height={700}
                  className=" object-cover aspect-square"
                />
              </div>
            </div>
            <div className="relative overflow-hidden  w-full flex gap-5 items-start">
              <div className="w-1/3 max-w-[3000px]">
                <Image
                  src={`/assets/product-detail-collage${product.featureImageCollage[3].url}`}
                  alt={product.productName}
                  width={700}
                  height={(4 / 3) * 700}
                  className=" object-cover h-[250px]"
                />
              </div>
              <div className="relative overflow-hidden w-2/3 max-w-[3000px]  ">
                <Image
                  src={`/assets/product-detail-collage${product.featureImageCollage[0].url}`}
                  alt={product.productName}
                  width={700}
                  height={700}
                  className=" object-cover aspect-square"
                />
              </div>
            </div>
          </div>
          <div
            className={`lg:w-3/5  flex-col justify-start items-start gap-4 lg:gap-8 inline-flex ${
              product.id % 2 !== 0
                ? ` lg:px-8`
                : ` lg:px-0 lg:order-first  lg:pr-20`
            } `}>
            <h2 className="text-indigo-900 text-5xl font-bold font-['Sen'] leading-[60px]">
              {product.productName}
            </h2>
            <p className="text-neutral-800 text-base font-normal font-['Sen'] leading-normal">
              {product.description}
            </p>
            {product.images.map((item, index) => (
              <div
                key={index}
                className="flex w-full py-4 border-b border-gray-100">
                <div className="lg:w-2/5 w-2/4 flex items-center justify-start gap-5 lg:text-base text-sm">
                  <Image
                    src={`/assets/product-preview${item.url}`}
                    alt={"icon"}
                    width={100}
                    height={100}
                    className="rounded-full lg:w-[72px] w-[64px]"
                  />{" "}
                  {item.imageTitle}
                </div>
                <div className="lg:w-2/5  w-1/4  grid gap-0 lg:text-base text-sm">
                  {Array.isArray(item.weight) ? (
                    item.weight.map((weight, index) => (
                      <li key={index}>{weight}</li>
                    ))
                  ) : (
                    <li>{item.weight}</li>
                  )}
                </div>
                <div className="lg:w-1/5  w-1/4  items-center lg:text-base text-sm">
                  {Array.isArray(item.package) ? (
                    item.package.map((packageItem, index) => (
                      <li key={index}>{packageItem}</li>
                    ))
                  ) : (
                    <li>{item.package}</li>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default ProductDetailContent;
