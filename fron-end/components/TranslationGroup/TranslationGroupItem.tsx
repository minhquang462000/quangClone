import React from "react";
import Link from "next/link";
const TranslationGroupItem = () => {
  return (
    <div className="bg-stone-100 py-1 pl-5 items-center rounded-lg flex w-full h-[80px] gap-2 text-sm relative hover:bg-white hover:shadow-md">
      <Link href={""}>
        <div className="bg-blue-600 rounded-full text-white flex items-center justify-center text-xl font-mono w-[50px] h-[50px] ">MQ</div>
      </Link>
      <div className="flex flex-col gap-2 ">
        <div className="flex justify-between items-center">
          <Link href={""}>
            <h2 className="font-bold text-base w-[200px] truncate">
                MinhQuang
            </h2>
          </Link>
        </div>
        <div className="text-xs text-gray-500 w-[200px] ">
          <p className="truncate">17 TRUYỆN ĐÃ ĐĂNG</p>
          <p className="truncate">46K LƯỢT XEM</p>
        </div>
      </div>
      <span className="text-2xl font-bold text-gray-300 justify-end absolute top-1 right-1 opacity-70">
        01
      </span>
    </div>
  );
};

export default TranslationGroupItem;
