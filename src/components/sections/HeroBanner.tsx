import React from "react";
import Button from "../atomic/Button";
import Image from "next/image";
import Router from "next/router";

export default function HeroBanner() {

  

  return (
    <div
      className={`flex min-h-screen flex-col items-center  justify-center gap-20 w-full px-4`}>
      <div className="text-center mb-10 space-y-4 pt-[120px]">
        <p>Seafood Supplier</p>
        <h1 className="text-6xl lg:text-8xl font-bold text-center bg-accent-secondary text-primary  leading-[72px]">
          Bring The Sea to Your Kitchen!
        </h1>
        <p>Downstreaming Commodity Through Technology</p>
      </div>

      <div className="flex-col flex space-y-10 w-full lg:w-fit justify-center items-center px-8">
        <div className="w-fit">
          <Button
            link={""}
            text={"View Product"}
            variant={"Primary"}
            classNames=""
          />
        </div>

        <div className="w-full justify-between flex mt-3 gap-3">
          <Image
            src={"/assets/social-icons-navy/Social icon.svg"}
            alt={""}
            width={30}
            height={30}
            onClick={() => Router.push("/")}
            className="w-[52px] h-[52px] px-4 py-3 bg-slate-100 rounded-[40px] gap-1 cursor-pointer hover:bg-gray-100"
          />
          <Image
            src={"/assets/social-icons-navy/Social icon-1.svg"}
            alt={""}
            width={30}
            height={30}
            onClick={() => Router.push("/")}
            className="w-[52px] h-[52px] px-4 py-3 bg-slate-100 rounded-[40px] gap-1 cursor-pointer hover:bg-gray-100"
          />
          <Image
            src={"/assets/social-icons-navy/Social icon-2.svg"}
            alt={""}
            width={30}
            height={30}
            onClick={() => Router.push("/")}
            className="w-[52px] h-[52px] px-4 py-3 bg-slate-100 rounded-[40px] gap-1 cursor-pointer hover:bg-gray-100"
          />
          <Image
            src={"/assets/social-icons-navy/Social icon-3.svg"}
            alt={""}
            width={30}
            height={30}
            onClick={() => Router.push("/")}
            className="w-[52px] h-[52px] px-4 py-3 bg-slate-100 rounded-[40px] gap-1 cursor-pointer hover:bg-gray-100"
          />
        </div>
      </div>
    </div>
  );
}
