import Footers from '@/components/molecules/Footers';
import Header from '@/components/molecules/Header';
import ArticleList from '@/components/sections/ArticleList';
import DocumentasiKegiatan from '@/components/sections/DocumentasiKegiatan';
import HeroBanner from '@/components/sections/HeroBanner';
import NewComp from '@/components/sections/NewComp';
import PartnerList from '@/components/sections/PartnerList';
import ShowCaseProduct from '@/components/sections/ShowCaseProduct';
import VideoPlaceholder from '@/components/sections/VideoPlaceholder';
import WhatWeServe from '@/components/sections/WhatWeServe';

export default function Home() {
  return (
    <>
      <Header />
      <HeroBanner />
      <NewComp />
      <WhatWeServe />
      <VideoPlaceholder />
      <ShowCaseProduct />
      <PartnerList />
      <DocumentasiKegiatan />
      <ArticleList />

      <Footers />     

    </>
  );
}
