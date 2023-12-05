import Footers from '@/components/molecules/Footers';
import Header from '@/components/molecules/Header';
import ArticleList from '@/components/sections/ArticleList';
import DocumentasiKegiatan from '@/components/sections/DocumentasiKegiatan';
import HeroBanner from '@/components/sections/HeroBanner';
import HomeVideo from '@/components/sections/HomeVideo';
import PartnerList from '@/components/sections/PartnerList';
import ShowCaseProduct from '@/components/sections/ShowCaseProduct';
import VideoPlaceholder from '@/components/sections/VideoPlaceholder';
import WhatWeServe from '@/components/sections/WhatWeServe';
import Head from 'next/head';

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
        <link rel="icon" href="/assets/general/Seacart__Logo Normal Color.png" />
      </Head>
      <main className="snap-container w-screen overflow-hidden">
        <Header />
        <div className="snap-child">
          <HeroBanner />
        </div>
        <div className=" snap-child">
          <HomeVideo />
        </div>
        <div className=" snap-child">
          <ShowCaseProduct />
        </div>
        <div className=" snap-child">
          <PartnerList />
        </div>
        <div className="snap-child">
          <DocumentasiKegiatan />
        </div>
        <div className="snap-child">
          <ArticleList />
        </div>

        <div className="snap-child">
          <Footers />
        </div>
      </main>
    </>
  );
}
