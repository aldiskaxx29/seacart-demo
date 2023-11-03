import Header from "@/components/molecules/Header";
import React from "react";

export default function About() {
  return (
    <main className={`flex min-h-screen flex-col items-center p-24`}>
      <h1 className="p-4 "> About </h1>

      <Header />

      <h1 className="p-20 text-9xl">Ini halaman About</h1>
    </main>
  );
}
