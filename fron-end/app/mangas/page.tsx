import Link from "next/link";
import React from "react";


import EndInfoIManga from "@/components/MangaItem/EndInfoIManga";
import MainItemManga from "@/components/MangaItem/MainItemManga";
import InforAuthor from "@/components/MangaItem/InforAuthor";
import ChapterItem from "@/components/MangaItem/ChapterItem";
const Manga = () => {
  return (
    <div className="px-2 flex flex-col text-center py-10 bg-stone-200">
     <section>
      <MainItemManga/>
     </section>
     <section>
      <div className="bg-white px-2 pt-10 pb-5 rounded-b-lg shadow-lg h-max">
      <InforAuthor/>
      <div className="mt-5 flex flex-col gap-1 h-[520px] overflow-scroll">
      <ChapterItem/>
      <ChapterItem/>
      <ChapterItem/>
      <ChapterItem/>
      <ChapterItem/>
      <ChapterItem/>
      <ChapterItem/>
      <ChapterItem/>
      <ChapterItem/>
      </div>
      </div>
     </section>
     <section>
      <EndInfoIManga/>
     </section>
    </div>
  );
};

export default Manga;
