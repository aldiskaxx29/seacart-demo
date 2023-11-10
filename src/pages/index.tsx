import Footers from '@/components/molecules/Footers';
import Header from '@/components/molecules/Header';
import Contact from '@/components/sections/Contact';
import DocumentasiKegiatan from '@/components/sections/DocumentasiKegiatan';
import HeroBanner from '@/components/sections/HeroBanner';
import PartnerList from '@/components/sections/PartnerList';
import ShowCaseProduct from '@/components/sections/ShowCaseProduct';
import VideoPlaceholder from '@/components/sections/VideoPlaceholder';
import WhatWeServe from '@/components/sections/WhatWeServe';
import Link from 'next/link';

export default function Home() {
  return (
    <>

      <Header />


      <HeroBanner />
      <WhatWeServe />
      <ShowCaseProduct />
      <DocumentasiKegiatan />
      <Contact />

      <Footers />
    </>
  );
}
