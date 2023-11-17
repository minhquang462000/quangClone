"use client";
import React from "react";
import Link from "next/link";
import { RiArrowRightSLine } from "react-icons/ri";


interface IProps {
  blogs: IBlog[];
}
const NewUpdeateItem = (props: IProps) => {

  const { blogs } = props;
  return (
    <div className="flex flex-col gap-3  w-screen px-2 grid-rows-5 overflow-hidden lg:w-[1280px] lg:grid-rows-2 m-auto">
      <p className="text-xl font-bold mb-[30px]">MỚI CẬP NHẬP</p>
      <div className="grid  grid-cols-newUpdate gap-3 lg:grid-cols-7 lg:gap-5">
        {blogs.map(item=>{
          return <div className="text-xl flex  gap-1 xl:flex-col ">
          <Link href={`/mangas/${item.id}`} className="w-[60px] h-[80px]  lg:w-[170px] lg:h-[250px]">
            <img
              className="rounded-lg w-full h-full object-cover"
              src={item.img}
              alt=""
            />
          </Link>
          <div className="flex flex-col gap-2 mt-2">
            <Link href={""}>
              <p className="text-sm font-bold w-full truncate">{item.name}</p>
            </Link>
            <div className="font-normal text-sm">
              <span>C.34 -</span>
              <span> 46 phút trước</span>
            </div>
          </div>
        </div>
        })}
       
      </div>
     
      <Link href={"/newest"}>
        <div className="text-sm text-gray-500 font-bold flex items-center justify-end hover:text-blue-400 mt-7">
          <span className="text-lg">
            <RiArrowRightSLine />
          </span>
          <p>Xem danh sách truyện</p>
        </div>
      </Link>
    </div>
  );
};

export default NewUpdeateItem;
