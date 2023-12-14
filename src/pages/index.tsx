import Footers from "@/components/molecules/Footers";
import Header from "@/components/molecules/Header";
import ArticleList from "@/components/sections/ArticleList";
import DocumentasiKegiatan from "@/components/sections/DocumentasiKegiatan";
import HeroBanner from "@/components/sections/HeroBanner";
import HomeVideo from "@/components/sections/HomeVideo";
import PartnerList from "@/components/sections/PartnerList";
import ShowCaseProduct from "@/components/sections/ShowCaseProduct";
import VideoPlaceholder from "@/components/sections/VideoPlaceholder";
import WhatWeServe from "@/components/sections/WhatWeServe";
import Head from "next/head";

export default function Home() {
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
      <main className="snap-containers w-screen overflow-hidden">
        <Header />
        <div className="snap-childs">
          <HeroBanner />
        </div>
        <div className=" snap-childs">
          <HomeVideo />
        </div>
        <div className=" snap-childs">
          <ShowCaseProduct />
        </div>
        <div className=" snap-childs">
          <PartnerList />
        </div>
        <div className="snap-childs">
          <DocumentasiKegiatan />
        </div>
        <div className="snap-childs">
          <ArticleList />
        </div>

        <div className="snap-childs">
          <Footers />
        </div>
      </main>
    </>
  );
}
