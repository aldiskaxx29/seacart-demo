import Footers from "@/components/molecules/Footers";
import Header from "@/components/molecules/Header";
import ProductDetailContent from "@/components/sections/ProductDetailContent";
import { useRouter } from "next/router";
import React, { useEffect, useState } from "react";
import { ProductSlider } from "../../../../service/DummyData";
import Head from "next/head";
import { ProductProps } from "../../../../service/type";
import { getProductDetail } from "../../../../service/API";
import OurProducts from "@/components/sections/OurProducts";
import Image from "next/image";

export default function ProductDetail() {
  const router = useRouter();
  const id: string | undefined = router.query?.id as string | undefined;
  const [product, setProduct] = useState<ProductProps | null>(null);

  useEffect(() => {
    const fetchData = async (id: any) => {
      try {
        if (id) {
          const res = await getProductDetail(id);
          setProduct(res);
          console.log(res);
        }
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData(id);
  }, [id]);

  if (!product) {
    return (
      <div className="w-[100vw] h-[100vh]  items-center justify-center grid animate-pulse">
        <div className="grid gap-10">
          <div className="">
            <Image
          src={`/assets/general/GraphicProductCatalogue2.svg`}
          alt={""}
          height={100}
          width={100}
          className={` animate-spin `}
        />
          </div>
        
        <p>Loading...</p>

        </div>
      </div>
    );
  }

  return (
    <>
      <Head>
        <title>{product?.name} - Seacart </title>
        <meta
          name={product?.short_description}
          content={product?.description}
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link
          rel="icon"
          href="/assets/general/Seacart_Logo Normal Circular.svg"
        />
      </Head>
      <main className={``}>
        <Header />

        {product ? (
          <ProductDetailContent product={product} />
        ) : (
            <div className="w-[100vw] h-[100vh] bg-black">
              
          <p>Loading...</p>
            </div>
        )}
        <OurProducts />
        <Footers />
      </main>
    </>
  );
}
