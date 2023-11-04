import Footers from "@/components/molecules/Footers";
import Header from "@/components/molecules/Header";
import CompanyAdress from "@/components/sections/CompanyAdress";
import React from "react";

export default function index() {
  return (
    <main className={`flex min-h-screen flex-col items-center p-24`}>
      <Header />

      <CompanyAdress />

      <Footers />
    </main>
  );
}
