import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";
import Button from "../atomic/Button";
import DropMenu from "./DropMenuHeader";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <div>
      <header className="header-comp py-4 flex items-center justify-between px-6 w-full  fixed gap-10 h-[100px] z-50 border-b lg:border-b-0 border-primary">
        <div className="flex gap-6 items-center lg:border-b w-full h-[100px] border-primary">
          <Image
            src="/public/favicon.ico"
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

        <div className="lg:hidden flex items-center  h-[100px] border-primary">
          <DropMenu />
        </div>

        <div className="hidden lg:flex w-[300px] items-center justify-center lg:border-b h-[100px] border-primary">
          
          <button className="bg-primary text-white hover:bg-gray-700 py-2 px-8 font-regular rounded flex items-center justify-center gap-2">
            Let`s Talk{" "}
            <Image
              src={"/assets/general/whatsapp.svg"}
              alt={""}
              width={16}
              height={16}
            />
          </button>
        </div>
      </header>
    </div>
  );
};

export default Header;
