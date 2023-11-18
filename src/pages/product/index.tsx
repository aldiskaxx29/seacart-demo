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
        <title>Sea Cart by Solutee</title>
        <meta
          name="Product Catalogue"
          content="FRESH FROM THE OCEAN TO YOUR PLATE"
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link
          rel="icon"
          href="/assets/general/Seacart__Logo Normal Color.png"
        />
      </Head>
      <Header />
      <ProductHero />

      <ProductList />
      {/* <DocumentasiMakanan /> */}
      <Image src={'/assets/general/image 53.png'} width={1500} height={1500} alt="Food"/>
      <ProductCatalogue />

      <Footers />
    </>
  );
}
