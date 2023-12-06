import { Menu, Transition } from "@headlessui/react";
import { Fragment, useEffect, useRef, useState } from "react";
import Link from "next/link";
import Button from "../atomic/Button";
import Image from "next/image";
import { FadeIn } from "../animations/AnimationTemplate";

export default function  DropMenu() {
  return (
    <div >
      <Menu as="div" className=" inline-block text-left">
        <div>
          <Menu.Button className="inline-flex  justify-center rounded-md  text-sm font-medium text-primary  focus:outline-none focus-visible:ring-2 focus-visible:ring-white/75 px-0 w-10 h-10 p-2">
            <Image
              src={"/assets/general/_Nav menu button.svg"}
              alt={""}
              width={72}
              height={72}
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
            <div className="lg:hidden   bg-white h-full rounded shadow-lg w-full grid gap-5 ">
              <FadeIn>
                <Link
                  href="/"
                  className="block text-primary py-3 mt-[24px]   hover:text-gray-300 px-5  ">
                  <p className="text-indigo-900 text-base font-bold font-['Sen'] leading-normal p-0 mb-1">
                    Home
                  </p>
                  <p className="text-slate-600 text-sm font-normal font-['Sen'] leading-tight p-0 m-0">
                    Start here.
                  </p>
                </Link>
              </FadeIn>
              <FadeIn>
                <Link
                  href="/product"
                  className="block text-primary py-3    hover:text-gray-300 px-5">
                  <p className="text-indigo-900  text-base font-bold font-['Sen'] leading-normal p-0 mb-1">
                    Product
                  </p>
                  <p className="text-slate-600 text-sm font-normal font-['Sen'] leading-tight p-0 m-0">
                    Explore our offerings.
                  </p>
                </Link>
              </FadeIn>
              <FadeIn>
                <Link
                  href="/contact"
                  className="block text-primary py-3    hover:text-gray-300 px-5">
                  <p className="text-indigo-900  text-base font-bold font-['Sen'] leading-normal p-0 mb-1">
                    Contact
                  </p>
                  <p className="text-slate-600 text-sm font-normal font-['Sen'] leading-tight p-0 m-0">
                    Reach out anytime.
                  </p>
                </Link>
              </FadeIn>
              <FadeIn>
                <Link
                  href="/about"
                  className=" text-primary py-3 block   hover:text-gray-300 px-5">
                  <p className="text-indigo-900  text-base font-bold font-['Sen'] leading-normal p-0 mb-1">
                    About Us
                  </p>
                  <p className="text-slate-600 text-sm font-normal font-['Sen'] leading-tight p-0 m-0">
                    Meet the team.
                  </p>
                </Link>
              </FadeIn>
              <FadeIn>
                <Link
                  href="/article"
                  className=" block  text-primary py-3 hover:text-gray-300 px-5">
                  <p className="text-indigo-900 text-base font-bold font-['Sen'] leading-normal p-0 mb-1">
                    Article & News
                  </p>
                  <p className="text-slate-600 text-sm font-normal font-['Sen'] leading-tight p-0 m-0">
                    Stay updated with us.
                  </p>
                </Link>
              </FadeIn>

              <FadeIn>
                <div className="w-full items-center justify-center lg:border-b border-primary px-5 pb-3 pt-4 border-t">
                  <button
                    className="bg-primary text-white hover:bg-gray-700 py-2 px-4 font-regular rounded-lg flex items-center justify-center gap-2 w-full"
                    onClick={() => {
                      window.open("https://wa.me/+6282280002797", "_blank");
                    }}>
                    Let`s Talk{" "}
                    <Image
                      src={"/assets/general/whatsapp.svg"}
                      alt={""}
                      width={16}
                      height={16}
                    />
                  </button>
                </div>
              </FadeIn>
            </div>
          </Menu.Items>
        </Transition>
      </Menu>
    </div>
  );
}
