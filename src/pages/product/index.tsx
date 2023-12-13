import Footers from "@/components/molecules/Footers";
import Header from "@/components/molecules/Header";
import ProductCatalogue from "@/components/sections/ProductCatalogue";
import ProductHero from "@/components/sections/ProductHero";
import ProductList from "@/components/sections/ProductList";
import Head from "next/head";
import Image from "next/image";
import React from "react";

export default function product() {
  return (
    <>
      <Head>
        <title>Seacart by Solutee</title>
        <meta
          name="Product Catalogue"
          content="FRESH FROM THE OCEAN TO YOUR PLATE"
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link
          rel="icon"
          href="/assets/general/Seacart_Logo Normal Circular.svg"
        />
      </Head>
      <Header />
      <ProductHero />

      <ProductList />
      <Image
        src={"/assets/general/image 53.png"}
        width={1500}
        height={1500}
        className="w-full px-1"
        alt="Food"
      />
      <ProductCatalogue />

      <Footers />
    </>
  );
}
