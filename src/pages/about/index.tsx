import Footers from "@/components/molecules/Footers";
import Header from "@/components/molecules/Header";
import PeopleBehind from "@/components/sections/PeopleBehind";
import VisiMisi from "@/components/sections/VisiMisi";
import WhoAreWe from "@/components/sections/WhoAreWe";
import React from "react";

export default function About() {
  return (
    <main className={`flex min-h-screen flex-col items-center p-24`}>
      <h1 className="p-4 "> About </h1>

      <Header />

      <WhoAreWe />
      <VisiMisi />
      <PeopleBehind />

      <Footers />
    </main>
  );
}
