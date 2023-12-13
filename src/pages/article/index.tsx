import Footers from "@/components/molecules/Footers";
import Header from "@/components/molecules/Header";
import ArticleListFull from "@/components/sections/ArticleListFull";
import Contact from "@/components/sections/Contact";
import ProductList from "@/components/sections/ProductList";
import Head from "next/head";
import React from "react";

export default function article() {
  return (
    <main className={``}>
      <Head>
        <title>Article - Seacart By Solutee</title>
        <meta
          name="Contact Us"
          content="Downstreaming Commodity Through Technology"
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link
          rel="icon"
          href="/assets/general/Seacart_Logo Normal Circular.svg"
        />
      </Head>

      <Header />
      <ArticleListFull />

      <Footers />
    </main>
  );
}
