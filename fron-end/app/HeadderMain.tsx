'use client'
import HeaderTitle from "@/components/header/HeaderTitle";
import HeaderMenu from "@/components/header/HeaderMenu";
import HeaderSearch from "@/components/header/HeaderSearch";
import HeaderDextopTitle from "@/components/header/HeaderDextopTitle";
import { useState } from "react";

export default function HeaderMain() {
  const [bgHeader, setBgHeader] = useState<boolean>(false);
  const changeBg = () => {
    window.scrollY >= 90 ? setBgHeader(true) : setBgHeader(false);
  };
  window.addEventListener("scroll", changeBg);

  return (
    <header className="relative z-50 ">
      <div
        className={` fixed top-0 left-0 right-0 lg:w-screen  text-gray-600 bg-gray-300  ${
          bgHeader ? "bg-opacity-90 text-gray-600 shadow-lg shadow-gray-500 " : "bg-opacity-0"
        } `}
      >
      <div className="py-3 flex justify-between items-center px-2 lg:w-[1280px] m-auto">
      <div className="lg:w-[400px] hidden lg:block justify-start">
          <HeaderDextopTitle />
        </div>
        <div className="lg:w-[20%]">
          <HeaderTitle />
        </div>
        <div className="flex gap-2 lg:w-[400px] justify-end">
          <HeaderSearch />
          <HeaderMenu />
        </div>
      </div>
      </div>
    </header>
  );
}
