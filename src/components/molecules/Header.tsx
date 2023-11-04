import Link from "next/link";
import React from "react";

export default function Header() {
  return (
    <div>
      <div className="flex gap-2">
        <Link href="/" className="p-3 bg-gray-900 rounded-lg">
          Home
        </Link>

        <Link href="/product" className="p-3 bg-gray-900 rounded-lg">
          Produk
        </Link>

        <Link href="/about" className="p-3 bg-gray-900 rounded-lg">
          About
              </Link>
              

      </div>
    </div>
  );
}
