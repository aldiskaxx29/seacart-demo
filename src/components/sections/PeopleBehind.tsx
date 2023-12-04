import Image from "next/image";
import React, { useEffect, useState } from "react";
import { EmployeeList } from "../../../service/DummyData";
import { EmployeeProps } from "../../../service/type";

export default function PeopleBehind() {
  const [data, setData] = useState<EmployeeProps[]>([]);

  useEffect(() => {
    const fetchData = async () => {
      setTimeout(() => {
        setData(EmployeeList);
      }, 1000);
    };

    fetchData();
  }, []);
  return (
    <main
      className={`grid lg:px-20 mt-6 lg:mt-[164px] gap-10 items-center justify-center bg-slate-100 rounded-lg py-6`}>
      <div className="w-full h-full grid items-center justify-center gap-3  lg:gap-5 lg:ps-10 text-center p-4">
        <div className="w-full flex items-center justify-center">
          <Image
            src={"/assets/product-page/Ornament.svg"}
            width={100}
            height={100}
            alt={""}
            className="w-20 "
          />
        </div>

        <div className=" text-indigo-900 lg:text-6xl lg:text-4xl lg:leading-[72px] text-center text-3xl font-bold font-['Sen'] leading-[38px]">
          Meet Our Team
        </div>
        <div className=" lg:text-[#212121] lg:text-xl lg:leading-[30px] text-center text-gray-500 text-sm font-normal font-['Sen'] leading-tight">
          Seacart wouldn`t be what it is today without the extraordinary people
          behind it.
        </div>
      </div>
      <div className="grid lg:grid-cols-3 gap-10 lg:gap-20 lg:px-20 p-4 justify-center">
        {data.map((item, index) => (
          <div className="gap-3 grid items-end justify-end" key={index}>
            <Image
              src={`/assets/about/${item.url}`}
              width={500}
              height={500}
              alt={item.name}
              className="w-[768px] object-cover rounded-md"
            />
            <div className="text-center text-indigo-900 text-3xl font-bold font-['Sen'] leading-[38px]">
              {item.name}
            </div>
            <div className="text-center text-[#212121] text-lg font-normal font-['Sen'] leading-7">
              {item.position}
            </div>
          </div>
        ))}
      </div>
    </main>
  );
}
