import Header from '@/components/molecules/Header';
import Link from 'next/link';

export default function Home() {
  return (
    <main className={`flex min-h-screen flex-col items-center p-24`}>
      <h1 className="p-4 "> Home </h1>

      <Header />

      <h1 className="p-20 text-9xl">Ini halaman Home</h1>
    </main>
  );
}
