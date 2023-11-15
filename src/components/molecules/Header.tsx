import Image from "next/image";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import DropMenu from "./DropMenuHeader";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { FadeIn, FadeInUp } from "../animations/AnimationTemplate";
import { useRouter } from "next/router";

const Header = () => {
  
  const router = useRouter();

  const [ref, inView] = useInView({ triggerOnce: true });

  const [isVisible, setIsVisible] = useState(false);

    const isActiveLink = (path:String) => {
      return router.pathname === path ? "active-link" : "";
    };

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
  
          
      <header className="header-comp lg:px-20 px-8 py-4 flex items-center justify-between w-full fixed top-0 gap-10 h-[100px] z-50 border-b lg:border-b-0 border-primary shadow-sm">
        <div className="flex gap-6 items-center lg:border-b w-full h-[100px] border-primary">
            <FadeIn>
              
            <Image
            src="/assets/article-list/Main Logo.png"
            alt="Logo"
            className="w-10 h-10 mr-4"
            width={200}
            height={200}
            />
            </FadeIn>

          <nav className="hidden lg:flex gap-4 text-gray-800">
                <FadeIn>
                <Link href="/" className={`hover:text-gray-300 rounded-lg px-4 py-2  ${isActiveLink("/")? "font-bold bg-white shadow-sm":""}`}>
              Home
            </Link>
                </FadeIn><FadeIn>

            <Link href="/product" className={`hover:text-gray-300 rounded-lg px-4 py-2  ${isActiveLink("/product")? "font-bold bg-white shadow-sm":""}`}>
              Product
            </Link>
                </FadeIn><FadeIn>

            <Link href="/contact" className={`hover:text-gray-300 rounded-lg px-4 py-2  ${isActiveLink("/contact")? "font-bold bg-white shadow-sm":""}`}>
              Contact Us
            </Link>
              </FadeIn>
              {/* <FadeIn>

            <Link href="/aboutus" className={`hover:text-gray-300 rounded-lg px-4 py-2  ${isActiveLink("/aboutus")? "font-bold bg-white shadow-sm":""}`}>
              About Us
            </Link>
                </FadeIn><FadeIn>

            <Link href="/article" className={`hover:text-gray-300 rounded-lg px-4 py-2  ${isActiveLink("/article")? "font-bold bg-white shadow-sm":""}`}>
              Article
            </Link>
                </FadeIn> */}
          </nav>
        </div>

        <div className="lg:hidden flex items-center  h-[100px] border-primary">
          <DropMenu />
        </div>
          <FadeIn>
            
        <div className="hidden lg:flex w-[300px] items-center justify-center lg:border-b h-[100px] border-primary">
          <button
            className="bg-primary text-white hover:bg-gray-700 py-2 px-8 font-regular rounded flex items-center justify-center gap-2 "
            onClick={() => {
              window.location.href = `/product`;
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
      </header>
    </div>
        </motion.div>
  );
};

export default Header;
