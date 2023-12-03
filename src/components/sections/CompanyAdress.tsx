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
      <div className="lg:grid bg-gray-100 lg:px-20 pt-32 pb-16 lg:gap-24 gap:12 px-4 space-y-12 lg:space-y-0">
        <FadeIn>
          <div className="flex-col flex gap-5">
            <span className="text-teal-400 text-base font-extrabold  leading-normal">
              Contact Us
            </span>
            <span className="text-indigo-900 lg:text-4xl text-3xl font-extrabold  leading-[44px]">
              Get In Touch
            </span>
            <span className=" text-gray-500 text-xl font-normal font-['Sen'] leading-[30px]">
              Our friendly team would love to hear from you.
            </span>
          </div>
        </FadeIn>

        <div className="lg:flex grid gap-5">
          {/* Second Column */}
          <div className="flex-col flex gap-12">
            <FadeInDown>
              <div className="flex gap-4">
                <Image
                  src={"/assets/contact/mail-01.svg"}
                  alt={"icon"}
                  width={30}
                  height={30}
                  className="w-12 h-12 bg-slate-300 rounded-full border-zinc-200 justify-center items-center"
                />
                <div className="flex-col flex justify-start items-start gap-2">
                  <span className="text-indigo-900 lg:text-xl text-lg font-extrabold">
                    Email
                  </span>
                  <span className="text-gray-500 text-base font-normal font-['Sen'] leading-normal">
                    Our friendly team is here to help.
                  </span>
                  <span className="text-[#212121] lg:text-xl text-base  font-normal  leading-[30px]">
                    seacart@solutee.co.id
                  </span>
                </div>
              </div>
            </FadeInDown>
            <FadeInDown>
              <div className="flex gap-4">
                <Image
                  src={"/assets/contact/marker-pin-02.svg"}
                  alt={"icon"}
                  width={30}
                  height={30}
                  className="w-12 h-12 bg-slate-300 rounded-full border-zinc-200 justify-center items-center"
                />
                <div className="flex-col flex justify-start items-start gap-2">
                  <span className="text-indigo-900  lg:text-xl text-lg font-extrabold">
                    Office
                  </span>
                  <span className="text-gray-500 text-base font-normal font-['Sen'] leading-normal">
                    Come say hello at our office.
                  </span>
                  <span className="text-[#212121]  lg:text-xl text-base font-normal  leading-[30px]">
                    Kawasan Pelabuhan Perikanan Samudera Nizam Zachman, Jalan
                    Tuna Raya No.2, Muara Baru, Kec. Penjaringan, Jakarta Utara,
                    DKI Jakarta, 14440
                  </span>
                </div>
              </div>
            </FadeInDown>
            <FadeInDown>
              <div className="flex gap-4">
                <Image
                  src={"/assets/contact/phone.svg"}
                  alt={"icon"}
                  width={30}
                  height={30}
                  className="w-12 h-12 bg-slate-300 rounded-full border-zinc-200 justify-center items-center"
                />
                <div className="flex-col flex justify-start items-start gap-2">
                  <span className="text-indigo-900  lg:text-xl text-lg font-extrabold">
                    Phone (WhatsApp)
                  </span>
                  <span className="text-gray-500 text-base font-normal font-['Sen'] leading-normal">
                    24 Hour Help Service.
                  </span>
                  <span className="text-[#212121]  lg:text-xl text-base font-normal  leading-[30px]">
                    +62 822 8000 2797
                  </span>
                </div>
              </div>
            </FadeInDown>
          </div>

          {/* First Column */}
          <FadeIn>
            <div className="flex-col flex">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d589.7322546765134!2d106.79942543218263!3d-6.099707385649241!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e6a1dc9578d808b%3A0x106d32956732d294!2sPelabuhan%20Perikanan%20Samudera%20Nizam%20Zachman!5e0!3m2!1sen!2sid!4v1699786185648!5m2!1sen!2sid"
                width="600"
                height="500"
                style={{ border: 0 }}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                className="rounded-lg lg:w-[600px] w-full"></iframe>
            </div>
          </FadeIn>
        </div>
      </div>
    </MotionDiv>
  );
}
