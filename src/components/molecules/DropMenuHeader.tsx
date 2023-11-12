import { Menu, Transition } from "@headlessui/react";
import { Fragment, useEffect, useRef, useState } from "react";
import Link from "next/link";
import Button from "../atomic/Button";
import Image from "next/image";

export default function DropMenu() {
  return (
    <div className="">
      <Menu as="div" className="relative inline-block text-left">
        <div>
          <Menu.Button className="inline-flex w-full justify-center rounded-md  px-4 py-2 text-sm font-medium text-primary  focus:outline-none focus-visible:ring-2 focus-visible:ring-white/75">
            <Image
              src={"/assets/general/_Nav menu button.svg"}
              alt={""}
              width={50}
              height={50}
            />
          </Menu.Button>
        </div>
        <Transition
          as={Fragment}
          enter="transition ease-out duration-100"
          enterFrom="transform opacity-0 scale-95"
          enterTo="transform opacity-100 scale-100"
          leave="transition ease-in duration-75"
          leaveFrom="transform opacity-100 scale-100"
          leaveTo="transform opacity-0 scale-95">
          <Menu.Items className="absolute right-5 snap-center mt-2 w-[300px] origin-center divide-y divide-gray-100 rounded-md bg-primary shadow-lg ring-1 ring-black/5 focus:outline-none">
            <div className="lg:hidden   bg-white p-4 rounded shadow-lg w-full">
              <Link
                href="/"
                className="block text-primary py-2 hover:text-gray-300 ">
                Home
              </Link>
              <Link
                href="#"
                className="block text-primary py-2 hover:text-gray-300">
                Product
              </Link>
              <Link
                href="#"
                className="block text-primary py-2 hover:text-gray-300">
                Contact Us
              </Link>
              <Link
                href="#"
                className="block text-primary py-2 hover:text-gray-300">
                About Us
              </Link>
              <Link
                href="#"
                className="block text-primary py-2 hover:text-gray-300">
                Article
              </Link>
              <div className="w-full items-center justify-center lg:border-b border-primary">
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
            </div>
          </Menu.Items>
        </Transition>
      </Menu>
    </div>
  );
}
