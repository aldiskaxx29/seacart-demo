import React, { Fragment, useEffect, useState } from "react";
import { Listbox, Tab, Transition } from "@headlessui/react";
import ArticleItem from "../molecules/ArticleItem";
import ArticleItemIndiVidual from "../molecules/ArticleItemIndividual";
import { ArticleProps } from "../../../service/type";
import { articleList } from "../../../service/DummyData";
import Image from "next/image";
import { getArticleCategories, getArticles } from "../../../service/API";

function classNames(...classes: any) {
  return classes.filter(Boolean).join(" ");
}

export default function ArticleListFull() {
  const [data, setData] = useState<ArticleProps[]>([]);
  const [selectedCategory, setSelectedCategory] = useState<string>("All");
  const [currentPage, setCurrentPage] = useState<number>(1);
  const [searchInput, setSearchInput] = useState<string>("");
  const itemsPerPage = currentPage == 1 ? 9 : 8;

  // useEffect(() => {
  //   const fetchData = async () => {
  //     setTimeout(() => {
  //       setData(articleList);
  //     }, 1000);
  //   };

  //   fetchData();
  // }, []);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await getArticles();
        console.log(res);
        setData(res);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, []);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await getArticleCategories();
        console.log(res);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
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
      ? data.filter((item) =>
          item.title.toLowerCase().includes(searchInput.toLowerCase())
        )
      : data.filter(
          (item) =>
            item.category === selectedCategory &&
            item.title.toLowerCase().includes(searchInput.toLowerCase())
        );

  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentItems = filteredData.slice(indexOfFirstItem, indexOfLastItem);

  const paginate = (pageNumber: number) => {
    setCurrentPage(pageNumber);
  };

  const handleSearchChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSearchInput(event.target.value);
    // Reset selected category when searching
    setSelectedCategory("All");
  };

  return (
    <div className="grid gap-10 lg:px-20 lg:pt-[112px] p-4">
      <div className="grid gap-5">
        <div className="grid gap-3">
          <span className="text-teal-400 text-base font-extrabold leading-normal">
            Article & News
          </span>
          <span className="text-indigo-900 lg:text-4xl text-3xl font-extrabold leading-[44px]">
            Resources and insights
          </span>
        </div>

        <span className=" text-gray-500 text-xl font-normal font-['Sen'] leading-[30px]">
          Stay updated on the sea and seafood industries with the latest news.
        </span>
      </div>

      <div className="lg:flex items-start justify-start ">
        <div className="lg:w-1/4 lg:pe-5">
          <div className="w-full flex border rounded-md px-3 py-1 text-gray-500 text-base font-normal font-['Sen'] leading-normal mb-5 focus:border-gray-300  focus:outline-slate-900">
            <Image
              src={"/assets/general/search-lg.svg"}
              alt={""}
              width={20}
              height={20}
            />
            <input
              type="text"
              placeholder="Search Categories"
              value={searchInput}
              onChange={handleSearchChange}
              className="w-full px-2 py-1 rounded-md focus:outline-none"
            />
          </div>

          <div className="hidden lg:block">
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

          <div>
            <div className="lg:hidden block">
              <Listbox
                value={selectedCategory}
                onChange={(value) => setSelectedCategory(value)}>
                <div className="relative mt-1">
                  <Listbox.Button className="relative w-full cursor-default rounded-lg bg-white py-2 pl-3 pr-10 text-left shadow-md focus:outline-none focus-visible:border-indigo-500 focus-visible:ring-2 focus-visible:ring-white/75 focus-visible:ring-offset-2 focus-visible:ring-offset-orange-300 sm:text-sm">
                    <span className="block truncate">{selectedCategory}</span>
                    <span className="pointer-events-none absolute inset-y-0 right-0 flex items-center pr-2">
                      <Image
                        src={"/assets/general/chevron-down.svg"}
                        alt={""}
                        width={20}
                        height={20}
                      />
                    </span>
                  </Listbox.Button>
                  <Transition
                    as={Fragment}
                    leave="transition ease-in duration-100"
                    leaveFrom="opacity-100"
                    leaveTo="opacity-0">
                    <Listbox.Options className="absolute mt-1 max-h-60 w-full overflow-auto rounded-md bg-white py-1 text-base shadow-lg ring-1 ring-black/5 focus:outline-none sm:text-sm">
                      {categories.map((category) => (
                        <Listbox.Option
                          key={category}
                          className={({ active }) =>
                            `relative cursor-default select-none py-2 pl-10 pr-4 hover:bg-indigo-900 hover:text-white ${
                              active
                                ? "bg-indigo-100 text-indigo-900"
                                : "text-gray-900"
                            }`
                          }
                          value={category}>
                          {({ selected }) => (
                            <>
                              <span
                                className={`block truncate ${
                                  selected ? "font-medium" : "font-normal"
                                }`}>
                                {category}
                              </span>
                              {selected ? (
                                <span className="absolute inset-y-0 left-0 flex items-center pl-3 text-indigo-900">
                                  <Image
                                    src={"/assets/general/check.svg"}
                                    alt={""}
                                    width={20}
                                    height={20}
                                  />
                                </span>
                              ) : null}
                            </>
                          )}
                        </Listbox.Option>
                      ))}
                    </Listbox.Options>
                  </Transition>
                </div>
              </Listbox>
            </div>
          </div>
        </div>
        {searchInput == "" ? (
          <div className=" lg:w-3/4 lg:m-0  w-full grid">
            {currentPage === 1 && (
              <ArticleItemIndiVidual
                id={currentItems[0]?.id}
                image_url={currentItems[0]?.image_url}
                short_description={currentItems[0]?.short_description}
                category={currentItems[0]?.category}
                title={currentItems[0]?.title}
                content={currentItems[0]?.content}
                writer_url={"Main Logo.png"}
                writer_name={"Seacart Admin"}
                updated_at={currentItems[0]?.updated_at}
              />
            )}

            <div className="grid lg:grid-cols-2 gap-2">
              {currentItems
                .filter((_, index) => (currentPage === 1 ? index !== 0 : true))
                .map((item, index) => (
                  <ArticleItem
                    key={index}
                    id={item.id}
                    image_url={item.image_url}
                    category={item.category}
                    title={item.title}
                    content={item.short_description}
                    writer_url={"Main Logo.png"}
                    writer_name={"Seacart Admin"}
                    date={item.updated_at}
                  />
                ))}
            </div>
          </div>
        ) : (
          <div className="lg:w-3/4 lg:m-0  w-full">
            <div className="grid lg:grid-cols-2 gap-2">
              {currentItems.map((item, index) => (
                <ArticleItem
                  key={index}
                  id={item.id}
                  image_url={item.image_url}
                  category={item.category}
                  title={item.title}
                  content={item.short_description}
                  writer_url={"Main Logo.png"}
                  writer_name={"Admin"}
                  date={item.updated_at}
                />
              ))}
              </div>
              {filteredData.length === 0 ?            <div className="w-full h-[300px] flex items-center justify-center ] text-gray-500 text-md font-normal font-['Sen'] leading-[30px] ">
              {" "}
              Article Not Found
            </div> : null}

          </div>
        )}
      </div>
      <div className="flex justify-between py-5 border-t ">
        <button
          onClick={() => paginate(currentPage - 1)}
          className="flex gap-4"
          disabled={currentPage === 1}>
          <Image
            src={"/assets/general/arrow-left.png"}
            alt={""}
            width={24}
            height={24}
          />{" "}
          Previous
        </button>
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
        <button
          onClick={() => paginate(currentPage + 1)}
          className="flex gap-4"
          disabled={
            currentPage === Math.ceil(filteredData.length / itemsPerPage)
          }>
          Next{" "}
          <Image
            src={"/assets/general/arrow-right.png"}
            alt={""}
            width={24}
            height={24}
          />{" "}
        </button>
      </div>
    </div>
  );
}
