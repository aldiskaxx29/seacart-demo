import React from "react";
import Button from "../atomic/Button";

export default function HeroBanner() {
  return (
    <main className={`flex min-h-screen flex-col items-center  justify-center`}>
      <div className="text-center space-y-10 mb-10">
        <p>Seafood Supplier</p>
        <h1 className=" text-8xl font-bold text-center bg-accent-secondary text-primary">
          Bring The Sea <br /> to Your Kitchen!
        </h1>
        <p>Downstreaming Commodity Through Technology</p>
      </div>

      <Button link={""} text={"View Product"} variant={"Primary"} />
      <div className=" flex mt-3 gap-3">
        <Button link={""} text={"ig"} variant="Secondary" classNames="w-[56px] h-[56px] rounded-full" />
        <Button link={""} text={"ig"} variant="Secondary" classNames="w-[56px] h-[56px] rounded-full" />
        <Button link={""} text={"ig"} variant="Secondary" classNames="w-[56px] h-[56px] rounded-full" />
        <Button link={""} text={"ig"} variant="Secondary" classNames="w-[56px] h-[56px] rounded-full" />
      </div>
    </main>
  );
}
