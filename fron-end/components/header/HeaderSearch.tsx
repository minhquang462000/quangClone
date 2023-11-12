"use client";
import { AiOutlineSearch } from "react-icons/ai";
import { HeaderInputSearch } from "./HeaderInputSearch";
import { useState } from "react";

export default function HeaderSearch() {
  const [isShowInput, setIsShowInput] = useState<boolean>(false);
  const HandleShowInpus = () => {
    setIsShowInput(true);
  };
  return (
    <div className="relative z-10 group">
      <div
        className="text-xl bg-gray-400 p-3 rounded-full  bg-opacity-70  hover:bg-gray-500"
        onClick={HandleShowInpus}
      >
        <AiOutlineSearch />
      </div>
      <div
        className={`absolute outline-none -top-3 -right-[61px]    ${
          isShowInput ? "block   " : "hidden  "
        } `}
      >
        <HeaderInputSearch />
      </div>
    </div>
  );
}
