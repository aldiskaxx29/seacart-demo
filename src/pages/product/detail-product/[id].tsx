import Footers from "@/components/molecules/Footers";
import Header from "@/components/molecules/Header";
import ProductDetailContent from "@/components/sections/ProductDetailContent";
import { useRouter } from "next/router";
import React, { useEffect, useState } from "react";
import {  ProductSlider } from "../../../../service/DummyData";
import Head from "next/head";
import { ProductProps } from "../../../../service/type";



export default function ProductDetail() {
  const router = useRouter();
  const id: string | undefined = router.query?.id as string | undefined;
  const [product, setProduct] = useState<ProductProps | null>(null);

  useEffect(() => {
    const fetchData = async () => {
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
      fetchData();
    }
  }, [id]);

  if (!product) {
    return <p>Loading Your Data ... </p>;
  }

  return (
    <>
      <Head>
        <title>{product?.name} - SeaCart </title>
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
