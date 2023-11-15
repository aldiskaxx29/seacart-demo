import Videos from "../molecules/Videos";

import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { useEffect, useState } from "react";
import { FadeInDown } from "../animations/AnimationTemplate";

export default function VideoPlaceholder() {

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
      <FadeInDown>

    <div className=" flex-col justify-center items-center    w-full lg:min-h-screen lg:grid hidden ">
      <div className="bg-gray-100 lg:h-[50vh] lg:w-[100vw] lg:flex hidden">
      </div>
      <div className=" overflow-hidden rounded-lg px-2 lg:px-20 lg:mt-[-250px] lg:mb-[200px] pb-20 ">
        <Videos />
      </div>
    </div>
      </FadeInDown>
        </motion.div>
  );
}
