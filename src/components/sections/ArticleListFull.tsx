import React, { useEffect, useState } from "react";
import { Tab } from "@headlessui/react";
import ArticleItem from "../molecules/ArticleItem";
import ArticleItemIndiVidual from "../molecules/ArticleItemIndividual";
import { ArticleProps } from "../../../service/type";
import { articleList } from "../../../service/DummyData";

function classNames(...classes: any) {
  return classes.filter(Boolean).join(" ");
}

export default function ArticleListFull() {
  const [data, setData] = useState<ArticleProps[]>([]);
  const [selectedCategory, setSelectedCategory] = useState<string>("All");
  const [currentPage, setCurrentPage] = useState<number>(1);
  const itemsPerPage = 8;

  useEffect(() => {
    const fetchData = async () => {
      setTimeout(() => {
        setData(articleList);
      }, 1000);
    };

    fetchData();
  }, []);

  const categories = [
    "All",
    "Food and Cooking",
    "Food and Sustainability",
    "Health and Fitness",
    "Health and Lifestyle",
    "Health and Nutrition",
    "Nutrition and Seasonal Eating",
    "Sustainability",
  ];

  const filteredData =
    selectedCategory === "All"
      ? data
      : data.filter((item) => item.category === selectedCategory);

  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentItems = filteredData.slice(indexOfFirstItem, indexOfLastItem);

  const paginate = (pageNumber: number) => {
    setCurrentPage(pageNumber);
  };

  return (
    <div className="grid gap-10 px-40">
      <div className="flex-col flex gap-5 pt-[100px]">
        <span className="text-teal-400 text-base font-extrabold leading-normal">
          Contact Us
        </span>
        <span className="text-indigo-900 lg:text-4xl text-3xl font-extrabold leading-[44px]">
          Get In Touch
        </span>
        <span className=" text-gray-500 text-xl font-normal font-['Sen'] leading-[30px]">
          Our friendly team would love to hear from you.
        </span>
      </div>

      <div className="flex items-start justify-start">
        <div className="w-1/4">
          <Tab.Group>
            <Tab.List className="grid rounded-xl p-1">
              {categories.map((category) => (
                <Tab
                  key={category}
                  className={({ selected }) =>
                    classNames(
                      "w-full rounded-lg py-2.5 text-sm font-medium leading-5 text-start px-4",
                      "ring-white/60 ring-offset-2 ring-offset-blue-400 focus:outline-none focus:ring-2",
                      selected
                        ? "bg-indigo-900 text-slate-100 text-base font-extrabold font-['Sen'] leading-normal"
                        : "text-gray-500 text-base font-bold font-['Sen'] leading-normal hover:bg-indigo-800 hover:text-white"
                    )
                  }
                  onClick={() => setSelectedCategory(category)}>
                  {category}
                </Tab>
              ))}
            </Tab.List>
          </Tab.Group>
        </div>
        <div className=" w-3/4 m-0 p-0">
          <ArticleItemIndiVidual
            id={currentItems[0]?.id}
            image_url={currentItems[0]?.image_url}
            category={currentItems[0]?.category}
            title={currentItems[0]?.title}
            content={currentItems[0]?.content}
            writer={{
              url: currentItems[0]?.writer.url,
              name: currentItems[0]?.writer.name,
            }}
            date={currentItems[0]?.date}
          />
          <div className="grid grid-cols-2 gap-2">
            {currentItems
              .filter((_, index) => index !== 0)
              .map((item, index) => (
                <ArticleItem
                  key={index}
                  id={item.id}
                  image_url={item.image_url}
                  category={item.category}
                  title={item.title}
                  content={item.content}
                  writer_url={item.writer.url}
                  writer_name={item.writer.name}
                  date={item.date}
                />
              ))}
          </div>
          <div className="flex justify-center my-4">
            <ul className="flex list-none">
              {Array.from(
                { length: Math.ceil(filteredData.length / itemsPerPage) },
                (_, index) => (
                  <li key={index}>
                    <button
                      onClick={() => paginate(index + 1)}
                      className={classNames(
                        "px-3 py-2 mx-1 font-semibold text-sm rounded-md focus:outline-none",
                        currentPage === index + 1
                          ? "bg-indigo-900 text-white"
                          : "bg-white text-indigo-900 hover:bg-blue-300"
                      )}>
                      {index + 1}
                    </button>
                  </li>
                )
              )}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}
