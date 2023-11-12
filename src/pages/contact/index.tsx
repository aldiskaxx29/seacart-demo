import Footers from "@/components/molecules/Footers";
import Header from "@/components/molecules/Header";
import CompanyAdress from "@/components/sections/CompanyAdress";
import React from "react";

export default function index() {
  return (
    <main className={``}>
      <Header />

      <CompanyAdress />

      <Footers />
    </main>
  );
}
