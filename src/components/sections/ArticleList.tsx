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
        limitedDataCopy.splice(
          excludedIndex,
          1,
          ...(data.slice(3, 4) || []) // Replace with the next 3 items in the list
        );
      }
    }

    setRenderedData(limitedDataCopy);
  }, [data, id]);

  //   let [isOpen, setIsOpen] = useState(false);

  //   function closeModal() {
  //     setIsOpen(false);
  //   }

  //   function openModal() {
  //     setIsOpen(true);
  // }
  
  //   const limitedData = data.slice(0, 3);


  return (
    <MotionDiv>
      {/* <PopUpComingSoon
        isOpen={isOpen}
        openModal={openModal}
        closeModal={closeModal}
      /> */}

      <div className="py-32 grid gap-4 items-start  lg:px-32 px-2">
        <FadeInUp>
          <div className="p-4 grid gap-3">
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
          {renderedData.map((item, index) =>
            id && item.id.toString() === id.toString() ? null : (
              <div
                className="p-4 cursor-pointer rounded-md hover:bg-slate-200 flex-1 gap-4 grid mt-10 hover:shadow-lg duration-500"
                key={index}
                onClick={() => {
                  window.location.href = `/article/detail-article/${item.id}`;
                }}>
                <FadeIn>
                  <div className=" overflow-hidden">
                    {item.image_url && (<Image
                      src={item.image_url}
                      alt={item.title}
                      width={700}
                      height={100}
                      className="rounded hover:scale-110 duration-700 object-cover h-60"
                    />)}
                  </div>

                  <span className="text-teal-400 text-sm font-extrabold font-['Sen'] leading-tight mt-4">
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
                    {item.short_description}
                  </div>
                  <div className="flex gap-2 items-center mt-4">
                    <Image
                      src={`/assets/article-list/Main Logo.png`}
                      alt={""}
                      width={100}
                      height={100}
                      className="w-10 h-10"
                    />
                    <div className="grid">
                      <span className="text-sm font-extrabold font-['Sen'] leading-tight">
                        Admin
                      </span>
                      <span className="text-sm font-normal font-['Sen'] leading-tight mt-2">
                        {formatDate(item.updated_at)}
                      </span>
                    </div>
                  </div>
                </FadeIn>
              </div>
            )
          )}
        </div>
      </div>
    </MotionDiv>
  );
}
