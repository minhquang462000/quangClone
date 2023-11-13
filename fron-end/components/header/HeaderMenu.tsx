"use client";
import { IoMenuSharp } from "react-icons/io5";
import HeaderMenuList from "./HeaderMenuList";
import { useEffect, useRef, useState } from "react";
import HeaderMenuListDextop from "./HeaderMenuListDextop";

export default function HeaderMenu() {
  const [showMenuList, setShowMenuList] = useState<boolean>(false);
  const menuRef = useRef();
  useEffect(() => {
    const handler = (e) => {
      if (!menuRef.current.contains(e.target)) {
        setShowMenuList(false);
      }
    };
    document.addEventListener("mousedown", handler);
    return () => {
      document.removeEventListener("mousedown", handler);
    };
  }, [showMenuList]);
  return (
    <div className="relative" ref={menuRef}>
      <div
        className=" hover:bg-gray-500 text-xl bg-gray-400 p-3  rounded-full  bg-opacity-70 cursor-pointer "
        onClick={()=>setShowMenuList(!showMenuList)}
      >
        {" "}
        <IoMenuSharp />
      </div>
      <div
        className={`absolute top-12 right-0 ${
          showMenuList ? "block" : "hidden"
        }   lg:hidden`}
        
      >
        {" "}
        <HeaderMenuList />
      </div>
      <div
        className={`absolute top-12 right-0 hidden ${
          showMenuList ? "lg:block" : "lg:hidden"
        }    `}
      >
        {" "}
        <HeaderMenuListDextop />
      </div>

      {/* {showMenuList ? (
        <div className={`absolute top-14 right-0 `}>
          {" "}
          <HeaderMenuList />
        </div>
      ) : null} */}
    </div>
  );
}
