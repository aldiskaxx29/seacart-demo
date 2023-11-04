import Link from "next/link";
import React from "react";

export default function ProductList() {
  return (
    <main className={`flex min-h-screen flex-col items-center p-24`}>
      <h1 className="p-20 text-9xl">Product List</h1>

      <div className="flex gap-4">
        <Link
          href="/product/detail-product/salmon"
          className="p-10 bg-gray-900 rounded-lg">
          Salmon
        </Link>

        <Link
          href="/product/detail-product/tuna"
          className="p-10 bg-gray-900 rounded-lg">
          Tuna
        </Link>

        <Link
          href="/product/detail-product/udang"
          className="p-10 bg-gray-900 rounded-lg">
          Udang
        </Link>
      </div>
    </main>
  );
}
