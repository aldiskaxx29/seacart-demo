import Footers from "@/components/molecules/Footers";
import Header from "@/components/molecules/Header";
import CompanyAdress from "@/components/sections/CompanyAdress";
import Head from "next/head";
import React from "react";

export default function index() {
  return (
    <main className={``}>
      <Head>
        <title>Seacart by Solutee</title>
        <meta
          name="Contact Us"
          content="Downstreaming Commodity Through Technology"
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link
          rel="icon"
          href="/assets/general/Seacart__Logo Normal Color.png"
        />
      </Head>
      <Header />

      <CompanyAdress />

      <Footers />
    </main>
  );
}
