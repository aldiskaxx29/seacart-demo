import Footers from "@/components/molecules/Footers";
import Header from "@/components/molecules/Header";
import ProductDetailContent from "@/components/sections/ProductDetailContent";
import { useRouter } from "next/router";
import React from "react";

export default function ProductDetail() {

  const router = useRouter();
  const { id } = router.query;


  return (
    <main className={`flex min-h-screen flex-col items-center p-24`}>
      
      <Header />

      <ProductDetailContent />

      <Footers />
    </main>
  );
}
