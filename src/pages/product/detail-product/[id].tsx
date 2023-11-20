import Footers from "@/components/molecules/Footers";
import Header from "@/components/molecules/Header";
import ProductDetailContent from "@/components/sections/ProductDetailContent";
import { useRouter } from "next/router";
import React, { useEffect, useState } from "react";
import {  ProductSlider } from "../../../../service/DummyData";
import Head from "next/head";
import { ProductProps } from "../../../../service/type";
import { getProductDetail } from "../../../../service/API";



export default function ProductDetail() {
  const router = useRouter();
  const id: string | undefined = router.query?.id as string | undefined;
  const [product, setProduct] = useState<ProductProps | null>(null);

  useEffect(() => {
    const fetchDataDummy = async () => {
      if (id) {
        setTimeout(() => {
          const productData = ProductSlider.find(
            (item) => item.id === Number(id)
          );
          setProduct(productData || null);
        }, 1000);
      }
    };

    if (id) {
      fetchDataDummy();
    }
  }, [id]);

  if (!product) {
    return <p>Loading Your Data ... </p>;
  }

//   const [data, setData] = useState<ProductProps>();
// const [dataDummy, setDataDummy] = useState<ProductProps>();

//   useEffect(() => {
//     const fetchData = async (id: any) => {
//       try {
//         const res = await getProductDetail(id);
//         setData(res);
//         console.log(res);
//       } catch (error) {
//         console.error("Error fetching data:", error);
//       }
//     };

//     fetchData(id);
//   }, []);

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
          href="/assets/general/Seacart__Logo Normal Color.png"
        />
      </Head>
      <main className={``}>
        <Header />

        {product ? (
          <ProductDetailContent product={product} />
        ) : (
          <p>Loading...</p>
        )}

        <Footers />
      </main>
    </>
  );
}
