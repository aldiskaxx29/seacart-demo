import { Menu, Transition } from "@headlessui/react";
import { Fragment, useEffect, useRef, useState } from "react";
import Link from "next/link";
import Button from "../atomic/Button";
import Image from "next/image";

export default function DropMenu() {
  return (
    <div className="">
      <Menu as="div" className=" inline-block text-left">
        <div>
          <Menu.Button className="inline-flex w-full justify-center rounded-md  px-5 py-2 text-sm font-medium text-primary  focus:outline-none focus-visible:ring-2 focus-visible:ring-white/75">
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
          <Menu.Items className="fixed left-0 w-screen  divide-gray-100 rounded-lg bg-primary shadow-lg ring-1 ring-black/5 focus:outline-none ">
            <div className="lg:hidden   bg-white py-4  rounded shadow-lg w-full grid gap-5">
              <Link
                href="/"
                className="block text-primary mt-[24px]  mb-1 py-2 hover:text-gray-300 px-5  ">
                <p className="text-indigo-900 mb-2 text-base font-bold font-['Sen'] leading-normal">
                  Home
                </p>
                <p className="text-slate-600 text-sm font-normal font-['Sen'] leading-tight">
                  Start here.
                </p>
              </Link>
              <Link
                href="/product"
                className="block text-primary  mb-1 py-2 hover:text-gray-300 px-5">
                <p className="text-indigo-900  mb-2 text-base font-bold font-['Sen'] leading-normal">
                  Product
                </p>
                <p className="text-slate-600 text-sm font-normal font-['Sen'] leading-tight">
                  Explore our offerings.
                </p>
              </Link>
              <Link
                href="/contact"
                className="block text-primary  mb-1 py-2 hover:text-gray-300 px-5">
                <p className="text-indigo-900  mb-2 text-base font-bold font-['Sen'] leading-normal">
                  Contact
                </p>
                <p className="text-slate-600 text-sm font-normal font-['Sen'] leading-tight">
                  Reach out anytime.
                </p>
              </Link>
              <Link
                href="#"
                className=" text-primary py-2  mb-1 hover:text-gray-300 hidden px-5">
                <p className="text-indigo-900  mb-2 text-base font-bold font-['Sen'] leading-normal">
                  About Us
                </p>
                <p className="text-slate-600 text-sm font-normal font-['Sen'] leading-tight">
                  Meet the team.
                </p>
              </Link>
              <Link
                href="#"
                className=" text-primary py-2 hover:text-gray-300 hidden px-8">
                <p className="text-indigo-900 text-base font-bold font-['Sen'] leading-normal">
                  Article & News
                </p>
                <p className="text-slate-600 text-sm font-normal font-['Sen'] leading-tight">
                  Stay updated with us.
                </p>
              </Link>
              <div className="w-full items-center justify-center lg:border-b border-primary px-5 pb-3 pt-4 border-t">
                <button className="bg-primary text-white hover:bg-gray-700 py-2 px-5 font-regular rounded flex items-center justify-center gap-2 w-full">
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
