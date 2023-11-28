import Head from "next/head";
import { useRouter } from "next/router";
import React, { useEffect, useState } from "react";
import { articleList } from "../../../service/DummyData";
import { ArticleProps } from "../../../service/type";
import Image from "next/image";
import { formatDate } from "../../../service/utils";

export default function ArticleDetailContent() {
  
  const router = useRouter();
  const id: string | undefined = router.query?.id as string | undefined;
  const [article, setArticle] = useState<ArticleProps | null>(null);

  useEffect(() => {
    const fetchDataDummy = async () => {
      if (id) {
        setTimeout(() => {
          const articleData = articleList.find(
            (item) => item.id === Number(id)
          );
          setArticle(articleData || null);
        }, 1000);
      }
    };

    if (id) {
      fetchDataDummy();
    }
  }, [id]);

  if (!article) {
    return <p>Loading Your Data ... </p>;
  }

  return (
    <main className={`flex min-h-screen flex-col items-center pt-[64px]`}>
      <Head>
        <title>{article.title} - Seacart</title>
        <meta name={article.title} content={article.short_descriptions} />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link
          rel="icon"
          href="/assets/general/Seacart__Logo Normal Color.png"
        />
      </Head>

      <div className="flex w-full lg:relative items-center justify-center pt-[100px]">
        <div className=" flex px-4 lg:w-[1200px] absolute w-full items-center">
          <button
            className=" text-gray-400 text-sm font-normal font-['Sen'] leading-tight hover:bg-gray-100 rounded-md p-2 flex item center justify-center"
            onClick={() => {
              window.location.href = `/`;
            }}>
            <Image
              src={"/assets/general/_Breadcrumb button base.svg"}
              width={20}
              height={20}
              alt={"next"}
            />
          </button>
          <div>
            <Image
              src={"/assets/general/chevron-right (1).svg"}
              width={20}
              height={20}
              alt={"next"}
            />
          </div>
          <button
            className=" text-gray-400 text-sm font-normal font-['Sen'] leading-tight hover:bg-gray-100 rounded-md p-2"
            onClick={() => {
              window.location.href = `/article`;
            }}>
            Article And News
          </button>
          <div>
            <Image
              src={"/assets/general/chevron-right (1).svg"}
              width={20}
              height={20}
              alt={"next"}
            />
          </div>
          <div className="text-indigo-950 text-sm font-extrabold font-['Sen'] leading-tigh px-2 py-1 bg-zinc-200 rounded-md justify-center items-center inline-flex">
            Article Detail
          </div>
        </div>
      </div>

      {/* Article */}

      <div className="grid pt-[64px] items-center justify-center gap-5 lg:w-3/5 md:w-4/5 ">
        <div className=" text-center text-teal-400 text-base font-extrabold font-['Sen'] leading-normal">
          {article.category}
        </div>

        <div className=" text-center text-indigo-900 text-5xl font-extrabold font-['Sen'] leading-[60px]">
          {article.title}
        </div>

        <div className=" text-center text-neutral-800 text-xl font-normal font-['Sen'] leading-[30px]">
          {article.short_descriptions}
        </div>

        <div className="flex gap-2 items-center w-full justify-center">
          <Image
            src={`/assets/article-list/${article.writer.url}`}
            alt={""}
            width={100}
            height={100}
            className="w-10 h-10"
          />
          <div className="grid">
            <span className="text-sm font-extrabold font-['Sen'] leading-tight">
              {article.writer.name}
            </span>
            <span className="text-sm font-normal font-['Sen'] leading-tight mt-2">
              {formatDate(article.date)}
            </span>
          </div>
        </div>

        <Image
          src={`/assets/article-list${article.image_url}`}
          alt={"article"}
          width={1000}
          height={100}
          className="rounded hover:scale-105 duration-700 w-full h-[400px] object-cover"
        />

        <div className="w-full text-neutral-800 text-lg font-normal font-['Sen'] leading-7 p-10 pb-20 border-b-slate-700 mb-5">
         {article.content}
        </div>
      </div>
    </main>
  );
}
