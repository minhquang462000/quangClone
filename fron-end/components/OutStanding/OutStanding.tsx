import React from "react";
import ButtonDynamic from "./ButtonDynamic";
import Link from "next/link";
import ItemOutStanding from "./ItemOutStanding";

interface IProps {
  blogs: IBlog[];
}
const OutStanding = (props: IProps) => {
  const { blogs } = props;
  return (
    <div className="px-2 py-6 bg-gradient-to-t from-blue-300 to-blue-700 shadow-md w-screen lg:w-[1280px] m-auto">
      <p className="text-xl text-white font-bold mb-[70px] ">TRUYỆN NỔI BẬT</p>
      <div className="flex justify-end mb-8">
        <ButtonDynamic />
      </div>
      <div className="grid grid-cols-newUpdate gap-3 grid-rows-3 lg:grid-cols-3 lg:grid-rows-3">
        <ItemOutStanding />
        <ItemOutStanding />
        <ItemOutStanding />
        <ItemOutStanding />
        <ItemOutStanding />
        <ItemOutStanding />
      </div>
    </div>
  );
};

export default OutStanding;
