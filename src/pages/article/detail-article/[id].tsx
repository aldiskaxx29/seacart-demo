import Footers from "@/components/molecules/Footers";
import Header from "@/components/molecules/Header";
import ArticleDetailContent from "@/components/sections/ArticleDetailContent";
import { useRouter } from "next/router";
import React from "react";

export default function Article() {
  const router = useRouter();
  const { id } = router.query;

  return (
    <main className={`flex min-h-screen flex-col items-center p-24`}>
      <Header />

      <ArticleDetailContent />

      <Footers />
    </main>
  );
}
