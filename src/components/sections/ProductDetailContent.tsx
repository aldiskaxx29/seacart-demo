import { useRouter } from "next/router";
import React from "react";

export default function ProductDetailContent() {
  const router = useRouter();
  const { id } = router.query;

  return (
    <main className={`flex min-h-screen flex-col items-center p-24`}>
      <h1 className="p-20 text-9xl">Detail Product : {id} </h1>
    </main>
  );
}
