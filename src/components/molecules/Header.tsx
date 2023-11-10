import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";
import Button from "../atomic/Button";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <div>
      <header className="header-comp py-4 flex items-center justify-between px-6 w-full  fixed gap-10 h-[100px]">
        <div className="flex gap-6 items-center border-b w-full h-[100px] border-primary">
          <Image
            src="/logo.png"
            alt="Logo"
            className="h-8 mr-4 bg-red-300"
            width={50}
            height={50}
          />

          <nav className="hidden lg:flex space-x-4">
            <Link href="/" className="hover:text-gray-300 ">
              Home
            </Link>
            <Link href="/product" className="hover:text-gray-300">
              Product
            </Link>
            <Link href="/contactus" className="hover:text-gray-300">
              Contact Us
            </Link>
            <Link href="/aboutus" className="hover:text-gray-300">
              About Us
            </Link>
            <Link href="/article" className="hover:text-gray-300">
              Article
            </Link>
          </nav>
        </div>

        <div className="lg:hidden flex items-center">
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="text-white focus:outline-none">
            ☰
          </button>
        </div>
        {isMenuOpen && (
          <div className="lg:hidden absolute top-16  bg-gray-800 p-4 rounded shadow-lg w-full">
            <Link
              href="/"
              className="block text-white py-2 hover:text-gray-300 ">
              Home
            </Link>
            <Link
              href="#"
              className="block text-white py-2 hover:text-gray-300">
              Product
            </Link>
            <Link
              href="#"
              className="block text-white py-2 hover:text-gray-300">
              Contact Us
            </Link>
            <Link
              href="#"
              className="block text-white py-2 hover:text-gray-300">
              About Us
            </Link>
            <Link
              href="#"
              className="block text-white py-2 hover:text-gray-300">
              Article
            </Link>
          </div>
        )}
        <div className="hidden lg:flex w-[300px] items-center justify-center border-b h-[100px] border-primary">
          <Button link={"/"} text={"Let's Talk"} variant="Primary" />
        </div>
      </header>
    </div>
  );
};

export default Header;
