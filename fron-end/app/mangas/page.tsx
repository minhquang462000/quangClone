import Link from "next/link";
import React from "react";

import EndInfoIManga from "@/components/MangaItem/EndInfoIManga";
import MainItemManga from "@/components/MangaItem/MainItemManga";
import InforAuthor from "@/components/MangaItem/InforAuthor";
import ChapterItem from "@/components/MangaItem/ChapterItem";
import ItemRelate from "@/components/MangaItem/ItemRelate";
const Manga = () => {
  return (
    <div className="px-2 flex flex-col  py-10 bg-stone-200 ">
      <main className=" lg:w-[1280px] m-auto">
      <section>
        <MainItemManga />
      </section>
      <section>
        <div className=" bg-white px-2 pt-10 pb-5 rounded-b-lg shadow-lg h-max flex gap-3">
          <div className="lg:w-[70%]">
            <InforAuthor />
            <div className="mt-5 flex flex-col gap-1 h-[520px] overflow-scroll">
              <ChapterItem />
              <ChapterItem />
              <ChapterItem />
              <ChapterItem />
              <ChapterItem />
              <ChapterItem />
              <ChapterItem />
              <ChapterItem />
              <ChapterItem />
            </div>
          </div>
          <div className="hidden lg:block w-[30%] text-left text-gray-500 px-4  h-[700px]">
            <div className="mb-2 h-[50%] overflow-hidden">
              <p className="font-bold mb-3 ">CÙNG NHÓM DỊCH</p>
              <div className="flex flex-col gap-2">
                <ItemRelate />
                <ItemRelate />
                <ItemRelate />
                <ItemRelate />
                <ItemRelate />
                <ItemRelate />
                <ItemRelate />
              </div>
            </div>
            <div className="h-[50%] overflow-hidden">
              <p className="font-bold mb-3">ĐỀ XUẤT</p>
              <div className="flex flex-col gap-2">
                <ItemRelate />
                <ItemRelate />
                <ItemRelate />
                <ItemRelate />
                <ItemRelate />
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="lg:w-[800px] lg:m-auto">
        <EndInfoIManga />
      </section>
      </main>
      
    </div>
  );
};

export default Manga;
