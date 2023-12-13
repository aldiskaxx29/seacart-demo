import Footers from "@/components/molecules/Footers";
import Header from "@/components/molecules/Header";
import PeopleBehind from "@/components/sections/PeopleBehind";
import VisiMisi from "@/components/sections/VisiMisi";
import WhoAreWe from "@/components/sections/WhoAreWe";
import Head from "next/head";
import React from "react";

export default function About() {
  return (
    <main className={``}>
      <Head>
        <title>Seacart By Solutee</title>
        <meta
          name="Welcome to Seacart"
          content="where passion for the ocean meets a commitment to excellence in seafood sourcing and supply."
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link
          rel="icon"
          href="/assets/general/Seacart_Logo Normal Circular.svg"
        />
      </Head>

      <Header />

      <WhoAreWe />
      <VisiMisi />
      <PeopleBehind />

      <Footers />
    </main>
  );
}
