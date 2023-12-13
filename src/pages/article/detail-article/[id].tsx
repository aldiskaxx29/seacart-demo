import Footers from "@/components/molecules/Footers";
import Header from "@/components/molecules/Header";
import ArticleDetailContent from "@/components/sections/ArticleDetailContent";
import Head from "next/head";
import { useRouter } from "next/router";
import React, { useEffect, useState } from "react";
import { ArticleProps } from "../../../../service/type";
import { articleList } from "../../../../service/DummyData";
import ArticleList from "@/components/sections/ArticleList";

export default function Article() {

  return (
    <>
      <Head>
        <title>Seacart by Solutee</title>
        <meta
          name="Seafood Supplier"
          content="Downstreaming Commodity Through Technology"
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link
          rel="icon"
          href="/assets/general/Seacart_Logo Normal Circular.svg"
        />
      </Head>
      <main className={``}>
        <Header />

        <ArticleDetailContent />

        <ArticleList />

        <Footers />
      </main>
    </>
  );
}
