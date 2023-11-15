import React, { useEffect, useState } from "react";
import Button from "../atomic/Button";
import Image from "next/image";
import Router from "next/router";
import { FadeIn, FadeInUp } from "../animations/AnimationTemplate";
import { motion } from "framer-motion";

export default function HeroBanner() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  return (
    <div
      className={`bg-gray-100 flex min-h-screen flex-col items-center  justify-center gap-10 px-4 relative`}>
      <div className="text-center mb-10 space-y-4 ">
        <motion.div
          initial="hidden"
          animate={isVisible ? "visible" : "hidden"}
          variants={{
            visible: {
              transition: {
                staggerChildren: 0.2,
              },
            },
          }}>
          <FadeInUp>
            <span>Seafood Supplier</span>
          </FadeInUp>
          <FadeInUp>
            <h1 className="text-6xl lg:text-8xl font-bold text-center bg-accent-secondary text-primary  font-['Sen'] lg:w-[800px] md:w-full">
              Bring The Sea to Your Kitchen!
            </h1>
          </FadeInUp>
          <FadeInUp>
            <span>Downstreaming Commodity Through Technology</span>
          </FadeInUp>
        </motion.div>
      </div>

      <motion.div
          initial="hidden"
          animate={isVisible ? "visible" : "hidden"}
          variants={{
            visible: {
              transition: {
                staggerChildren: 0.2,
              },
            },
          }}>
      <div className="flex-col flex space-y-10 w-full lg:w-fit justify-center items-center px-8">
          <FadeIn >

        <div className="w-fit">
          <Button
            link={"/product"}
            text={"View Product"}
            variant={"Primary"}
            classNames=""
            />
        </div>
            </FadeIn>

        <div className="w-full justify-between flex mt-3 gap-3">
            <FadeIn>
              
            <Image
            src={"/assets/social-icons-navy/Social icon.svg"}
            alt={""}
            width={30}
            height={30}
            onClick={() => Router.push("/")}
            className="w-[52px] h-[52px] px-4 py-3 bg-white rounded-[40px] gap-1 cursor-pointer hover:bg-gray-100"
            />
            </FadeIn>
            <FadeIn>

          <Image
            src={"/assets/social-icons-navy/Social icon-1.svg"}
            alt={""}
            width={30}
            height={30}
            onClick={() => Router.push("/")}
            className="w-[52px] h-[52px] px-4 py-3 bg-white rounded-[40px] gap-1 cursor-pointer hover:bg-gray-100"
            />
            </FadeIn>
            <FadeIn >
              
            <Image
            src={"/assets/social-icons-navy/Social icon-2.svg"}
            alt={""}
            width={30}
            height={30}
            onClick={() => Router.push("/")}
            className="w-[52px] h-[52px] px-4 py-3 bg-white rounded-[40px] gap-1 cursor-pointer hover:bg-gray-100"
            />
            </FadeIn>
            <FadeIn>
              
            <Image
            src={"/assets/social-icons-navy/Social icon-3.svg"}
            alt={""}
            width={30}
            height={30}
            onClick={() => Router.push("/")}
            className="w-[52px] h-[52px] px-4 py-3 bg-white rounded-[40px] gap-1 cursor-pointer hover:bg-gray-100"
            />
            </FadeIn>
        </div>
      </div>
            </motion.div>
    </div>
  );
}
