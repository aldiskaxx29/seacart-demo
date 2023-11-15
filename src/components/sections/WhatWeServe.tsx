import Image from "next/image";
import React from "react";
import Videos from "../molecules/Videos";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import  { useEffect, useState } from "react";
import { FadeIn, FadeInUp } from "../animations/AnimationTemplate";

export default function WhatWeServe() {
  const [ref, inView] = useInView({ triggerOnce: true });
  
    const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    if (inView) {
      setIsVisible(true);
    }
  }, [inView]);

  return (
    <div className="lg:flex bg-gray-100 lg:px-20 lg:gap-24 gap:12 px-4 space-y-12 lg:space-y-0 min-h-screen items-center justify-center pt-[120px]">
      <motion.div
        ref={ref}
        initial="hidden"
        animate={isVisible ? "visible" : "hidden"}
        variants={{
          visible: {
            transition: {
              staggerChildren: 0.2,
            },
          },
        }}>
        {/* First Column */}
        <div className="flex-col flex gap-5">
          <FadeIn>
            <span className="text-teal-400 text-base font-extrabold  leading-normal">
              What We Serve
            </span>
          </FadeIn>
          <FadeIn>
            <span className="text-indigo-900 lg:text-4xl text-3xl font-extrabold  leading-[44px]">
              Introducing to Seacart
            </span>
          </FadeIn>
          <FadeIn>
            <span className="text-neutral-800 lg:text-xl text-lg font-normal  leading-[30px]">
              As the worlds top fishery producer, Indonesia faces industry
              challenges, but Seacart offers 24/7 support as your complete
              solution!
            </span>
          </FadeIn>
        </div>
            </motion.div>

      <motion.div
        ref={ref}
        initial="hidden"
        animate={isVisible ? "visible" : "hidden"}
        variants={{
          visible: {
            transition: {
              staggerChildren: 0.2,
            },
          },
        }}>
        
      {/* Second Column */}
      <div className="flex-col flex lg:gap-12 gap-8 lg:mt-0 mt-8">

        <FadeInUp>
        <div className="flex gap-4 mt-4">
          <Image
            src={"/assets/featured-icons/Featured icon.svg"}
            alt={"icon"}
            width={30}
            height={30}
            className="w-12 h-12 bg-slate-300 rounded-full border-zinc-200 justify-center items-center"
            />
          <div className="flex-col flex justify-start items-start gap-2">
            <span className="text-indigo-900 lg:text-xl text-lg font-extrabold">
              Same-Day Delivery and Price Stability
            </span>
            <span className="text-neutral-800 lg:text-xl text-base  font-normal  leading-[30px]">
              As the worlds top fishery producer, Indonesia faces industry
              challenges, but Seacart offers 24/7 support as your complete
              solution!
            </span>
          </div>
        </div>
          </FadeInUp>
          

          <FadeInUp>

          
        <div className="flex gap-4 lg:mb-0 mb-8">
          <Image
            src={"/assets/featured-icons/Featured icon-1.svg"}
            alt={"icon"}
            width={30}
            height={30}
            className="w-12 h-12 bg-slate-300 rounded-full border-zinc-200 justify-center items-center"
            />
          <div className="flex-col flex justify-start items-start gap-2">
            <span className="text-indigo-900  lg:text-xl text-lg font-extrabold">
              Quality Assurance and Stock Management
            </span>
            <span className="text-neutral-800  lg:text-xl text-base font-normal  leading-[30px]">
              We guarantee high-quality products, secure transactions, and offer
              stock management and kitchen stock analysis services for efficient
              control.
            </span>
          </div>
        </div>
            </FadeInUp>
        </div>
        
        <FadeInUp>

      <div className="rounded-xl overflow-hidden lg:hidden mb-4">
        <Videos />
      </div>
        </FadeInUp>
            </motion.div>
    </div>
  );
}
