import Footers from "@/components/molecules/Footers";
import Header from "@/components/molecules/Header";
import Contact from "@/components/sections/Contact";
import DocumentasiMakanan from "@/components/sections/DocumentasiMakanan";
import ProductCatalogue from "@/components/sections/ProductCatalogue";
import ProductHero from "@/components/sections/ProductHero";
import ProductList from "@/components/sections/ProductList";
import VideoPlaceholderProduct from "@/components/sections/VideoPlaceholderProduct";
import Head from "next/head";
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
      <DocumentasiMakanan />
      <ProductCatalogue />

      <Footers />
    </>
  );
}
