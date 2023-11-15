import Image from "next/image";
import React, { useEffect, useState } from "react";
import { articleList } from "../../../service/DummyData";
import { formatDate } from "../../../service/utils";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { FadeIn, FadeInUp } from "../animations/AnimationTemplate";
import PopUpComingSoon from "./PopUpComingSoon";

interface Article {
  id: number;
  image_url: string;
  category: string;
  title: string;
  content: string;
  writer: {
    url: string;
    name: string;
  };
  date: string;
}

export default function ArticleList() {
  const [data, setData] = useState<Article[]>([]);

  useEffect(() => {
    const fetchData = async () => {
      setTimeout(() => {
        setData(articleList);
      }, 1000);
    };

    fetchData();
  }, []);

    let [isOpen, setIsOpen] = useState(false);

    function closeModal() {
      setIsOpen(false);
    }

    function openModal() {
      setIsOpen(true);
  }
  
  

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
      <PopUpComingSoon
        isOpen={isOpen}
        openModal={openModal}
        closeModal={closeModal}
      />

      <div className="py-32 grid gap-4 items-start  lg:px-32 px-2">
        <FadeInUp>
          <div className="p-4">
            <span className="text-teal-400 text-base font-extrabold  leading-normal">
              Article & News
            </span>
            <h2 className="text-indigo-900 text-4xl font-extrabold ">
              Lastest article posts
            </h2>
            <span className=" text-neutral-800 text-xl font-normal">
              Tool and strategies modern teams need to help their companies
              grow.
            </span>
          </div>
        </FadeInUp>

        {/* Article */}
        <div className="justify-start items-start gap-8 lg:inline-flex">
          {/* article Item */}
          {data.map((item, index) => (
            <div
              className="p-4 cursor-pointer rounded-md hover:bg-slate-200 flex-1 gap-4 grid mt-10 hover:shadow-lg duration-500"
              key={index}
              onClick={openModal}>
              <FadeIn>
                <div className=" overflow-hidden">
                  <Image
                    src={`/assets/article-list${item.image_url}`}
                    alt={"article"}
                    width={700}
                    height={100}
                    className="rounded hover:scale-110 duration-700"
                  />
                </div>

                <span className="text-teal-400 text-sm font-extrabold font-['Sen'] leading-tight">
                  {item.category}
                </span>
                <div className="justify-start items-center gap-4 flex">
                  <span className="text-indigo-900 text-2xl font-extrabold leading-loose line-clamp-1">
                    {item.title}
                  </span>
                  <Image
                    src={"/assets/article-list/Icon wrap.png"}
                    alt={""}
                    width={20}
                    height={30}
                  />
                </div>
                <div className="text-neutral-800 text-base font-normal font-['Sen'] leading-normal line-clamp-2">
                  {item.content}
                </div>
                <div className="flex gap-2 items-center">
                  <Image
                    src={`/assets/article-list/${item.writer.url}`}
                    alt={""}
                    width={100}
                    height={100}
                    className="w-10 h-10"
                  />
                  <div className="grid">
                    <span className="text-sm font-extrabold font-['Sen'] leading-tight">
                      {item.writer.name}
                    </span>
                    <span className="text-sm font-normal font-['Sen'] leading-tight mt-2">
                      {formatDate(item.date)}
                    </span>
                  </div>
                </div>
              </FadeIn>
            </div>
          ))}
        </div>
      </div>
    </motion.div>
  );
}
