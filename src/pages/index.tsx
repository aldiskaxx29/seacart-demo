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
    <main className={`flex min-h-screen flex-col items-center p-24`}>
      <h1 className="p-20 text-3xl">Home</h1>

      <Header />

      <HeroBanner />
      <VideoPlaceholder />
      <PartnerList />
      <WhatWeServe />
      <ShowCaseProduct />
      <DocumentasiKegiatan />
      <Contact />

      <Footers />
    </main>
  );
}
