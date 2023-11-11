import Footers from "@/components/molecules/Footers";
import Header from "@/components/molecules/Header";
import Contact from "@/components/sections/Contact";
import ProductDetailContent from "@/components/sections/ProductDetailContent";
import ProductList from "@/components/sections/ProductList";
import React from "react";

export default function product() {
  return (
    <div className={`items-center bg-red-300`}>

      <Header />

      <ProductList />
      <Contact />

      <Footers />
      
    </div>
  );
}
