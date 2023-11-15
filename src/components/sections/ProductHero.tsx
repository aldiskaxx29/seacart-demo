import Image from "next/image";
import React from "react";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { useEffect, useState } from "react";
import { FadeInRight, MoveRotate } from "../animations/AnimationTemplate";

export default function ProductHero() {

    const [ref, inView] = useInView({ triggerOnce: true });

    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
      if (inView) {
        setIsVisible(true);
      }
    }, [inView]);
  
  return (
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
      <div>
        <div className="flex min-h-screen bg-gray-50">
          <div className="flex-1 relative flex items-center justify-center lg:ps-32 ">
            <div className="z-2 absolute ">
              <MoveRotate>
                <Image
                  src={
                    "/assets/product-page/top-view-appetizing-seafood-mix-wooden-table-PhotoRoom 1.png"
                  }
                  alt={"product"}
                  width={600}
                  height={600}
                />
              </MoveRotate>
            </div>
            <div className="bg-primary w-[150px] lg:w-[400px] h-full  "></div>
          </div>

          <div className="flex-1 items-center justify-center relative flex">
            {" "}
            <div className="text-indigo-900 lg:text-8xl text-3xl font-bold font-['Sen'] leading-[48px] absolute lg:w-[500px] w-[160px] ms-5">
          <FadeInRight>
              FRESH FROM THE OCEAN TO YOUR PLATE
          </FadeInRight>
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );
}
