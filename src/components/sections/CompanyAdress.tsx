import Image from "next/image";
import React from "react";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { useEffect, useState } from "react";
import { FadeIn, FadeInDown, FadeInUp } from "../animations/AnimationTemplate";
import { MotionDiv } from "../animations/MotionDiv";

export default function CompanyAdress() {
  const [ref, inView] = useInView({ triggerOnce: true });

  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    if (inView) {
      setIsVisible(true);
    }
  }, [inView]);

  return (
    <MotionDiv>
      <div className="lg:grid bg-gray-100 lg:px-20 pt-[112px] pb-16 lg:gap-10 gap:12 px-4 space-y-12 lg:space-y-0">
        <FadeIn>
          <div className="flex-col flex gap-5">
            <div className="flex flex-col gap-3">
              <span className="text-teal-400 lg:text-base font-extrabold  lg:leading-normal text-sm  font-['Sen'] leading-tight">
                Contact Us
              </span>
              <span className="text-indigo-900 lg:text-4xl text-3xl  lg:leading-[44px]  font-extrabold font-['Sen'] leading-[38px]">
                Get In Touch
              </span>
            </div>

            <span className=" text-[#212121] lg:text-xl font-normal font-['Sen'] lg:leading-[30px] text-lg leading-7">
              Our friendly team would love to hear from you.
            </span>
          </div>
        </FadeIn>

        <div className="lg:flex grid gap-5 w-full">
          {/* Second Column */}
          <div className="flex-col flex gap-12 lg:w-3/5 lg:pe-10">
            <FadeInDown>
              <div className="lg:flex lg:gap-4 grid gap-2">
                <Image
                  src={"/assets/contact/mail-01.svg"}
                  alt={"icon"}
                  width={30}
                  height={30}
                  className="w-12 h-12 bg-slate-300 rounded-full border-zinc-200 justify-center items-center"
                />
                <div className="flex-col flex justify-start items-start gap-2">
                  <div className="lg:pt-[10px] flex flex-col">
                    <span className="text-indigo-900 font-extrabold lg:text-xl text-lg  font-['Sen'] leading-7">
                      Email
                    </span>
                    <span className="text-gray-500 text-base font-normal font-['Sen'] leading-normal  font-['Sen'">
                      Our friendly team is here to help.
                    </span>
                  </div>

                  <span className="text-[#212121] lg:text-xl text-base  font-normal  lg:leading-[30px]  font-['Sen'] leading-normal">
                    seacart@solutee.co.id
                  </span>
                </div>
              </div>
            </FadeInDown>
            <FadeInDown>
              <div className="lg:flex lg:gap-4 grid gap-2">
                <Image
                  src={"/assets/contact/marker-pin-02.svg"}
                  alt={"icon"}
                  width={30}
                  height={30}
                  className="w-12 h-12 bg-slate-300 rounded-full border-zinc-200 justify-center items-center"
                />
                <div className="flex-col flex justify-start items-start gap-2">
                  <div className="lg:pt-[10px] flex flex-col">
                    {" "}
                    <span className="text-indigo-900 font-extrabold lg:text-xl text-lg  font-['Sen'] leading-7">
                      Office
                    </span>
                    <span className="text-gray-500 text-base font-normal font-['Sen'] leading-normal  font-['Sen'">
                      Come say hello at our office.
                    </span>
                  </div>

                  <span className="text-[#212121]  lg:text-xl text-base font-normal  lg:leading-[30px]  font-['Sen'] leading-normal">
                    Kawasan Pelabuhan Perikanan Samudera Nizam Zachman, Jalan
                    Tuna Raya No.2, Muara Baru, Kec. Penjaringan, Jakarta Utara,
                    DKI Jakarta, 14440
                  </span>
                </div>
              </div>
            </FadeInDown>
            <FadeInDown>
              <div className="lg:flex lg:gap-4 grid gap-2">
                <Image
                  src={"/assets/contact/phone.svg"}
                  alt={"icon"}
                  width={30}
                  height={30}
                  className="w-12 h-12 bg-slate-300 rounded-full border-zinc-200 justify-center items-center"
                />
                <div className="flex-col flex justify-start items-start gap-2">
                  <div className="lg:pt-[10px] flex flex-col">
                    {" "}
                    <span className="text-indigo-900 font-extrabold lg:text-xl text-lg  font-['Sen'] leading-7">
                      Phone (WhatsApp)
                    </span>
                    <span className="text-gray-500 text-base font-normal font-['Sen'] leading-normal  font-['Sen'">
                      24 Hour Help Service.
                    </span>
                  </div>

                  <span className="text-[#212121]  lg:text-xl text-base font-normal  lg:leading-[30px]  font-['Sen'] leading-normal">
                    +62 822 8000 2797
                  </span>
                </div>
              </div>
            </FadeInDown>
          </div>

          {/* First Column */}
          <FadeIn>
            <div className="flex-col flex   lg:w-3/5">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d589.7322546765134!2d106.79942543218263!3d-6.099707385649241!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e6a1dc9578d808b%3A0x106d32956732d294!2sPelabuhan%20Perikanan%20Samudera%20Nizam%20Zachman!5e0!3m2!1sen!2sid!4v1699786185648!5m2!1sen!2sid"
                width="600"
                height="500"
                style={{ border: 0 }}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                className="rounded-lg lg:w-[900px] w-full lg:h-[500px] h-60"></iframe>
            </div>
          </FadeIn>
        </div>
      </div>
    </MotionDiv>
  );
}
