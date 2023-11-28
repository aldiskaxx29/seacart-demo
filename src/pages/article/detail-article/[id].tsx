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
    <main className={``}>


      <Header />

      <ArticleDetailContent />

      <ArticleList />

      <Footers />
    </main>
  );
}
