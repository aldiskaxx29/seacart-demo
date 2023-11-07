import Link from "next/link";
import React from "react";

export default function ProductList() {
  return (
    <main className={`flex min-h-screen flex-col items-center p-24`}>
      <h1 className="p-20 text-9xl">Product List</h1>

      <div className="flex gap-4">
        <Link
          href="/product/detail-product/17-agustus"
          className="p-10 bg-gray-900 rounded-lg">
          17 Agustus
        </Link>

        <Link
          href="/product/detail-product/pelantikan"
          className="p-10 bg-gray-900 rounded-lg">
          Pelantikan
        </Link>

        <Link
          href="/product/detail-product/expor-impor-udang"
          className="p-10 bg-gray-900 rounded-lg">
          Expor Impor Udang
        </Link>
      </div>
    </main>
  );
}
