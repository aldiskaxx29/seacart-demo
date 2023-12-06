import Image from "next/image";
import React from "react";
import { FadeIn } from "../animations/AnimationTemplate";
import { formatDate } from "../../../service/utils";
import { ArticlePropsOne } from "../../../service/type";

const ArticleItemIndiVidual: React.FC<ArticlePropsOne> = ({
  id,
  image_url,
  short_description,
  category,
  title,
  writer_url,
  writer_name,
  updated_at,
}) => {
  return (
    <div>
      <FadeIn>
        <div
          className="lg:px-4 lg:py-4 cursor-pointer rounded-md hover:bg-slate-200 flex-1 gap-8 lg:flex hover:shadow-lg duration-500 justify-center items-center w-full"
          onClick={() => {
            window.location.href = `/article/detail-article/${id}`;
          }}>
          <div className=" overflow-hidden lg:w-3/5">
            {image_url && (
              <Image
                src={`${image_url}`}
                alt={"article"}
                width={700}
                height={100}
                className="rounded hover:scale-110 duration-700 lg:m-0 mb-4 object-cover h-80 "
              />
            )}
          </div>
          <div className="lg:w-2/5 grid items-center h-fit lg:gap-5 gap-3">
            <span className="text-teal-400 text-sm font-extrabold font-['Sen'] leading-tight">
              {category}
            </span>
            <div className="justify-start items-center gap-4 flex">
              <span className="text-indigo-900 text-2xl font-extrabold line-clamp-2">
                {title}
              </span>
            </div>
            <div className="text-[#212121] text-base font-normal font-['Sen'] leading-normal line-clamp-2 lg:line-clamp-4">
              {short_description}
            </div>
            <div className="flex gap-2 items-center mt-6">
              <Image
                src={`/assets/article-list/Main Logo White.png`}
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
                  {formatDate(updated_at)}
                </span>
              </div>
            </div>
          </div>
        </div>
      </FadeIn>
    </div>
  );
};

export default ArticleItemIndiVidual;
