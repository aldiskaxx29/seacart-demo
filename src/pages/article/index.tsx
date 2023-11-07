import Footers from "@/components/molecules/Footers";
import Header from "@/components/molecules/Header";
import Contact from "@/components/sections/Contact";
import ProductList from "@/components/sections/ProductList";
import React from "react";

export default function article() {
  return (
    <main className={`flex min-h-screen flex-col items-center p-24`}>
      <h1 className="p-4 "> Product </h1>

      <Header />

      <ProductList />
      <Contact />

      <Footers />
    </main>
  );
}
