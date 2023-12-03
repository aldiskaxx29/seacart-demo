import Head from "next/head";
import { useRouter } from "next/router";
import React, { useEffect, useState } from "react";
import { ArticleProps } from "../../../service/type";
import Image from "next/image";
import { formatDate } from "../../../service/utils";
import { getArticleDetail } from "../../../service/API";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";

export default function ArticleDetailContent() {
  const router = useRouter();
  const id: string | undefined = router.query?.id as string | undefined;
  const [article, setArticle] = useState<ArticleProps | null>(null);

  useEffect(() => {
    const fetchData = async (id: any) => {
      try {
        if (id) {
          const res = await getArticleDetail(id);
          setArticle(res);
          console.log(res);
        }
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData(id);
  }, [id]);

  const handleCopyLink = () => {
    const articleUrl = window.location.href;
    navigator.clipboard.writeText(articleUrl);
    alert("Link copied to clipboard!");
  };

  const handleSocialMediaShare = (socialMedia: any) => {
    const articleUrl = window.location.href;
    const title = encodeURIComponent(article?.title || "");

    switch (socialMedia) {
      case "facebook":
        window.open(
          `https://www.facebook.com/sharer/sharer.php?u=${articleUrl}`
        );
        break;
      case "twitter":
        window.open(
          `https://twitter.com/intent/tweet?url=${articleUrl}&text=${title}`
        );
        break;
      case "linkedin":
        window.open(
          `https://www.linkedin.com/shareArticle?url=${articleUrl}&mini=true&title=${title}`
        );
        break;
      default:
        break;
    }
  };

  if (!article) {
    return <p>Loading Your Data ... </p>;
  }

  return (
    <main className={`flex min-h-screen flex-col items-center pt-[64px]`}>
      <Head>
        <title>{article.title} - Seacart</title>
        <meta name={article.title} content={article.short_description} />
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

        <div className=" text-center text-indigo-900  text-4xl lg:text-5xl font-extrabold font-['Sen'] leading-[60px]">
          {article.title}
        </div>

        <div className=" text-center text-[#212121] text-xl font-normal font-['Sen'] leading-[30px]">
          {article.short_description}
        </div>

        <div className="flex gap-2 items-center w-full justify-center">
          <Image
            src={`/assets/article-list/Main Logo White.png`}
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
              {formatDate(article.updated_at)}
            </span>
          </div>
        </div>

        <Image
          src={`${article.image_url}`}
          alt={"article"}
          width={1000}
          height={100}
          className="rounded hover:scale-105 duration-700 w-full lg:h-[400px] object-cover px-4"
        />

        <div className="w-full text-[#212121] text-lg font-normal font-['Sen'] leading-7 p-4 lg:p-10 pb-20 border-b-slate-700 mb-5">
          <ReactMarkdown remarkPlugins={[remarkGfm]}>
            {article.content}
          </ReactMarkdown>
        </div>

        <div className="lg:flex p-4 grid gap-10 lg:items-center justify-between border-t pt-10 border-t-gray-200">
          <div className=" text-teal-400 text-base font-extrabold font-['Sen'] leading-normal">
            {article.category}
          </div>
          <div className="flex gap-2">
            <button
              className=" hover:bg-gray-100 text-slate-700 text-sm font-normal font-['Sen'] leading-tight p-3 flex gap-2 border-gray-400 border rounded-md items-center justify-center"
              onClick={handleCopyLink}>
              <Image
                src={"/assets/social-icons-gray/copy-01.svg"}
                width={20}
                height={20}
                alt={"next"}
              />
              Copy Link
            </button>
            <button
              className=" hover:bg-gray-100 text-slate-700 text-sm font-normal font-['Sen'] leading-tight p-3 flex gap-2 border-gray-400 border rounded-md items-center justify-center"
              onClick={() => handleSocialMediaShare("twitter")}>
              <Image
                src={"/assets/social-icons-gray/Social icon.svg"}
                width={20}
                height={20}
                alt={"next"}
              />
            </button>
            <button
              className=" hover:bg-gray-100 text-slate-700 text-sm font-normal font-['Sen'] leading-tight p-3 flex gap-2 border-gray-400 border rounded-md items-center justify-center"
              onClick={() => handleSocialMediaShare("facebook")}>
              <Image
                src={"/assets/social-icons-gray/Social icon-1.svg"}
                width={20}
                height={20}
                alt={"next"}
              />
            </button>
            <button
              className=" hover:bg-gray-100 text-slate-700 text-sm font-normal font-['Sen'] leading-tight p-3 flex gap-2 border-gray-400 border rounded-md items-center justify-center"
              onClick={() => handleSocialMediaShare("linkedin")}>
              <Image
                src={"/assets/social-icons-gray/Social icon-2.svg"}
                width={20}
                height={20}
                alt={"next"}
              />
            </button>
          </div>
        </div>
      </div>
    </main>
  );
}
