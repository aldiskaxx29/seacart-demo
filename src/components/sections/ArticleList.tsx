import Image from "next/image";
import React, { useEffect, useState } from "react";
import { articleList } from "../../../service/DummyData";
import { formatDate } from "../../../service/utils";
import { FadeIn, FadeInUp } from "../animations/AnimationTemplate";
import PopUpComingSoon from "./PopUpComingSoon";
import { MotionDiv } from "../animations/MotionDiv";
import { ArticleProps } from "../../../service/type";
import { useRouter } from "next/router";
import { getArticles } from "../../../service/API";
import Button from "../atomic/Button";

export default function ArticleList() {
  const router = useRouter();
  const id: string | undefined = router.query?.id as string | undefined;
  const [data, setData] = useState<ArticleProps[]>([]);
  const [renderedData, setRenderedData] = useState<ArticleProps[]>([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await getArticles();
        setData(res);
        console.log(res);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, []);

  useEffect(() => {
    const limitedDataCopy = [...data.slice(0, 3)];

    if (id) {
      const excludedIndex = limitedDataCopy.findIndex(
        (item) => item.id.toString() === id.toString()
      );

      if (excludedIndex !== -1) {
        limitedDataCopy.splice(excludedIndex, 1, ...(data.slice(3, 4) || []));
      }
    }

    setRenderedData(limitedDataCopy);
  }, [data, id]);

  return (
    <MotionDiv>
      <div className="py-[100px]  pb-24 grid  items-start  lg:px-32 px-2 lg:h-[120vh]">
        <FadeInUp>
          <div className="flex items-center justify-between w-full lg:px-0 px-2">
            <div className=" grid gap-5">
              <div className="grid gap-3">
                <span className="text-teal-400 text-base font-extrabold  leading-normal">
                  Article & News
                </span>
                <h2 className=" lg:text-4xl lg:leading-[44px] text-indigo-900 text-3xl font-extrabold font-['Sen'] leading-[38px] m-0 p-0">
                  Lastest article posts
                </h2>
              </div>

              <span className=" text-[#212121]  lg:text-xl lg:leading-[30px] lg:mb-0 mb-12 text-lg font-normal font-['Sen'] leading-7">
                Tool and strategies modern teams need to help their companies
                grow.
              </span>
            </div>
            <div className="w-fit lg:block hidden">
              <Button
                link={"/article"}
                text={"View All Post"}
                variant={"Primary"}
                classNames=""
              />
            </div>
          </div>
        </FadeInUp>

        {/* Article */}
        <div className="justify-start items-start gap-6 lg:inline-flex px-2">
          {/* article Item */}
          {renderedData.map((item, index) =>
            id && item.id.toString() === id.toString() ? null : (
              <div
                className="lg:p-2 cursor-pointer rounded-md hover:bg-slate-200 flex-1 gap-4 grid  hover:shadow-lg duration-500 lg:mb-0 mb-12"
                key={index}
                onClick={() => {
                  window.location.href = `/article/detail-article/${item.id}`;
                }}>
                <FadeIn>
                  <div className="mb-8 overflow-hidden">
                    {item.image_url && (
                      <Image
                        src={item.image_url}
                        alt={item.title}
                        width={700}
                        height={100}
                        className="rounded hover:scale-110 duration-700 object-cover h-60"
                      />
                    )}
                  </div>
                  <div className="grid gap-3">
                    <span className="text-teal-400 text-sm font-extrabold font-['Sen'] leading-tight ">
                      {item.category}
                    </span>

                    <div className="grid gap-0">
                      <div className="justify-between items-center flex">
                        <span className="text-indigo-900 text-2xl font-extrabold leading-loose line-clamp-1">
                          {item.title}
                        </span>
                        <Image
                          src={"/assets/article-list/Icon wrap.png"}
                          alt={""}
                          width={30}
                          height={30}
                          className="lg:w-12 w-20"
                        />
                      </div>
                      <div className="text-[#212121] text-base font-normal font-['Sen'] leading-normal line-clamp-2">
                        {item.short_description}
                      </div>
                    </div>
                  </div>

                  <div className="flex gap-2 items-center mt-6">
                    <Image
                      src={`/assets/general/Logo Article.svg`}
                      alt={""}
                      width={100}
                      height={100}
                      className="w-10 h-10"
                    />
                    <div className="grid">
                      <span className="text-indigo-900 text-sm font-extrabold font-['Sen'] leading-tight">
                        Seacart Admin
                      </span>
                      <span className="text-sm font-normal font-['Sen'] leading-tight">
                        {formatDate(item.updated_at)}
                      </span>
                    </div>
                  </div>
                </FadeIn>
              </div>
            )
          )}{" "}
          <div className="w-full lg:hidden block mt-12">
            <Button
              link={"/article"}
              text={"View All Post"}
              variant={"Primary"}
              classNames="rounded-lg"
            />
          </div>
        </div>
      </div>
    </MotionDiv>
  );
}
