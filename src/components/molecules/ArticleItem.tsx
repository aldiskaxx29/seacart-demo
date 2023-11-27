import Image from "next/image";
import React from "react";
import { FadeIn } from "../animations/AnimationTemplate";
import { formatDate } from "../../../service/utils";
import { ArticleProps, ArticlePropsMaps } from "../../../service/type";

const ArticleItem: React.FC<ArticlePropsMaps> = ({
    key,
    id,
  image_url,
  category,
  title,
  content,
  writer_url,
  writer_name,
  date,
}) => {
  return (
    <div>
      <div
        className="p-4 cursor-pointer rounded-md hover:bg-slate-200 flex-1 gap-4 grid mt-10 hover:shadow-lg duration-500"
        key={key}
        onClick={() => {
          window.location.href = `/article/detail-article/${id}`;
        }}>
        <FadeIn>
          <div className=" overflow-hidden">
            <Image
              src={`/assets/article-list${image_url}`}
              alt={"article"}
              width={700}
              height={100}
              className="rounded hover:scale-110 duration-700 object-cover h-[256px]"
            />
          </div>

          <span className="text-teal-400 text-sm font-extrabold font-['Sen'] leading-tight">
            {category}
          </span>
          <div className="justify-start items-center gap-4 flex">
            <span className="text-indigo-900 text-2xl font-extrabold leading-loose line-clamp-1">
              {title}
            </span>
            <Image
              src={"/assets/article-list/Icon wrap.png"}
              alt={""}
              width={20}
              height={30}
            />
          </div>
          <div className="text-neutral-800 text-base font-normal font-['Sen'] leading-normal line-clamp-2">
            {content}
          </div>
          <div className="flex gap-2 items-center mt-5">
            <Image
              src={`/assets/article-list/${writer_url}`}
              alt={""}
              width={100}
              height={100}
              className="w-10 h-10"
            />
            <div className="grid">
              <span className="text-sm font-extrabold font-['Sen'] leading-tight">
                {writer_name}
              </span>
              <span className="text-sm font-normal font-['Sen'] leading-tight mt-2">
                {formatDate(date)}
              </span>
            </div>
          </div>
        </FadeIn>
      </div>
    </div>
  );
};

export default ArticleItem;
