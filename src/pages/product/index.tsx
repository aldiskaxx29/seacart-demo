import Header from "@/components/molecules/Header";
import React from "react";

export default function product() {
  return (
    <main className={`flex min-h-screen flex-col items-center p-24`}>
      <h1 className="p-4 "> Product </h1>

      <Header />

      <h1 className="p-20 text-9xl">Ini halaman product</h1>
    </main>
  );
}
