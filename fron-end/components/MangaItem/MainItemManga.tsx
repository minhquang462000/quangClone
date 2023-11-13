import React from 'react'
import { GoClock } from "react-icons/go";
import Link from "next/link";
const MainItemManga = () => {
  return (
    <div className="border rounded-t-lg overflow-hidden h-[700px] shadow-md">
        <div className="relative">
          <div className="absolute">
            <img
              src="https://i.ytimg.com/vi/JDqq2NDXOts/maxresdefault.jpg"
              alt=""
            />
          </div>
          <div className="absolute top-40">
            <div className="m-auto w-[140px] h-[210px] shadow-md rounded-xl overflow-hidden object-cover ">
              <img
                className="w-full h-full "
                src="https://photo-baomoi.bmcdn.me/w700_r1/2023_10_18_304_47257074/9291fb54cb1822467b09.jpg"
                alt=""
              />
            </div>
            <div className="flex flex-col justify-center items-center mt-4">
              <div className="flex flex-col mb-4 px-3">
                <h2 className="font-extrabold text-xl">
                  Oneshot nhưng lại là series
                </h2>
                <p className="font-sans text-[14px]">
                  Cụ thể tên của tác giả sẽ được đề cập trong tên mỗi chương.
                </p>
              </div>
              <div className="flex items-center gap-1 font-sans mb-3">
                <span className="text-lg ">
                  <GoClock />
                </span>
                <span>2 giờ trước</span>
              </div>
              <ul className="font-semibold text-sm flex flex-wrap  gap-1 px-2">
                <Link href={""}>
                  <li className="bg-gray-300 px-2 py-[2px] rounded-xl flex gap-1 items-center">
                    <span>manga</span>
                    <span className="text-[10px] scale-75  bg-gray-400 rounded-xl px-1">
                      456
                    </span>
                  </li>
                </Link>
                <Link href={""}>
                  <li className="bg-gray-300 px-2 py-[2px] rounded-xl flex gap-1 items-center">
                    <span>manga</span>
                    <span className="text-[10px] scale-75  bg-gray-400 rounded-xl px-1">
                      456
                    </span>
                  </li>
                </Link>
                <Link href={""}>
                  <li className="bg-gray-300 px-2 py-[2px] rounded-xl flex gap-1 items-center">
                    <span>manga</span>
                    <span className="text-[10px] scale-75  bg-gray-400 rounded-xl px-1">
                      456
                    </span>
                  </li>
                </Link>
                <Link href={""}>
                  <li className="bg-gray-300 px-2 py-[2px] rounded-xl flex gap-1 items-center">
                    <span>manga</span>
                    <span className="text-[10px] scale-75  bg-gray-400 rounded-xl px-1">
                      456
                    </span>
                  </li>
                </Link>
                <Link href={""}>
                  <li className="bg-gray-300 px-2 py-[2px] rounded-xl flex gap-1 items-center">
                    <span>manga</span>
                    <span className="text-[10px] scale-75  bg-gray-400 rounded-xl px-1">
                      456
                    </span>
                  </li>
                </Link>
              </ul>
              <div className="flex flex-col my-5 gap-2">
                <button className="bg-gray-400 px-[75px] py-1 font-semibold text-gray-600  rounded-lg">
                  ĐĂNG NHẬP ĐỂ THEO DÕI
                </button>
                <button className="bg-gray-300 px-[75px] py-1 font-semibold text-gray-900  rounded-lg hover:bg-slate-700 hover:text-white">
                  ĐỌC TỪ CHƯƠNG !
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
  )
}

export default MainItemManga