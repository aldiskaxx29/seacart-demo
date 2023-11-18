import React from "react";
import Link from "next/link";
import Image from "next/image";

export default function Footers() {
  return (
    <div className="w-full pt-[280px] pb-10 bg-indigo-900 flex-col justify-between items-center inline-flex">
      <div className="px-2 lg:px-8 flex-col justify-start items-start gap-8 flex">
        <div className="self-stretch pb-16 flex-col justify-start items-center gap-10 flex">
          <div className=" flex-col justify-start items-center gap-4 flex">
            <div className="self-stretch text-center text-slate-100 text-3xl font-extrabold leading-[38px]">
              Explore Our Fresh Catch of the Day!
            </div>
            <div className="self-stretch text-center text-slate-300 text-xl font-normal leading-[30px]">
              Dive into a world of fresh, premium seafood at your fingertips.
            </div>
          </div>
          <div className="justify-center items-center gap-3 inline-flex w-full">
            <div className="w-50 px-3 py-3 hover:bg-white/10 rounded-lg justify-center items-center gap-2 flex">
              <div className=" h-5 relative" />
              <button
                onClick={() => {
                  window.location.href = `/product`;
                }}
                className="text-zinc-200 text-base font-normal leading-normal">
                View product
              </button>
            </div>
            <div className="w-50 px-3 py-3 hover:bg-gray-300 bg-white rounded-lg shadow border  justify-center items-center gap-2 flex">
              <button className="text-indigo-900 text-base font-normal leading-normal">
                Contact us
              </button>
            </div>
          </div>
        </div>
      </div>

      <div className="flex-col w-full justify-end items-center gap-16 flex px-5 lg:px-10">
        <div className="w-full pt-8 border-slate-400 border-t  flex-col justify-start items-start gap-12 flex">
          <div className="w-full  flex-col justify-start items-start gap-8 flex">
            <div className=" flex-col justify-start items-start gap-8 flex">
              <div className=" h-10 justify-center items-center inline-flex">
                <Image
                  className="w-10 h-10"
                  src="/assets/general/Seacart__Logo Normal White.png"
                  alt={""}
                  width={40}
                  height={40}
                />
              </div>
              <div className="w-full flex-col justify-start items-start gap-1 flex">
                <div className=" text-slate-100 text-base font-bold leading-normal">
                  Solutee Head Office
                </div>
                <div className=" text-slate-100 text-base font-normal leading-normal w-full lg:w-[500px]">
                  Kawasan Pelabuhan Perikanan Samudera Nizam Zachman, Jalan Tuna
                  Raya No.2, Muara Baru, Kec. Penjaringan, Jakarta Utara, DKI
                  Jakarta, 14440
                </div>
              </div>
            </div>
            <div className=" justify-start items-start gap-8 inline-flex mobile:mt-5">
              <div className=" gap-5 lg:flex mobile:inline-flex">
                <div className="justify-start items-center gap-2 flex">
                  <Link
                    className="text-slate-100 mb-5 text-base font-normal leading-normal"
                    href={"/"}>
                    Home
                  </Link>
                </div>
                <div className="justify-start items-center gap-2 flex">
                  <Link
                    className="text-slate-100 mb-5 text-base font-normal leading-normal"
                    href={"/product"}>
                    Product
                  </Link>
                </div>
                <div className="justify-start items-center gap-2 flex">
                  <Link
                    className="text-slate-100 mb-5 text-base font-normal leading-normal"
                    href={"/contact"}>
                    Contact us
                  </Link>
                </div>
              </div>
              <div className=" lg:space-y-0 gap-5 lg:flex mobile:inline-flex justify-start items-start">
                <div className="justify-start items-start gap-2 flex">
                  <Link
                    className="text-slate-100 mb-5 text-base font-normal leading-normal"
                    href={""}>
                    About us
                  </Link>
                </div>
                <div className="justify-start items-center gap-2 flex">
                  <Link
                    className="text-slate-100 mb-5 text-base font-normal leading-normal"
                    href={""}>
                    Article & News
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="w-full pt-8 border-t border-slate-400 justify-between items-center gap-8 lg:flex lg:flex-row-reverse flex-col space-y-5">
          <div className="flex gap-5">
            <Link href="https://www.instagram.com/seacart.id/">
              <Image
                src={"/assets/social-icons-white/Social icon-1.svg"}
                alt={"icon"}
                width={24}
                height={23}
                className=" cursor-pointer hover:bg-blue-900 rounded-lg p-1"
              />
            </Link>
            <Link href="https://www.facebook.com/seacart.id?_rdc=1&_rdr">
              <Image
                src={"/assets/social-icons-white/Social icon-2.svg"}
                alt={"icon"}
                width={24}
                height={23}
                className=" cursor-pointer hover:bg-blue-900 rounded-lg p-1"
              />
            </Link>
            <Link href="https://www.linkedin.com/company/seacart/about/">
              <Image
                src={"/assets/social-icons-white/linkedin-1.svg"}
                alt={"icon"}
                width={27}
                height={23}
                className=" cursor-pointer hover:bg-blue-900 rounded-lg p-1"
              />
            </Link>
          </div>

          <div className=" text-slate-100 text-base font-normal  leading-normal">
            © 2023 Seacart. All rights reserved.
          </div>
        </div>
      </div>
    </div>
  );
}
