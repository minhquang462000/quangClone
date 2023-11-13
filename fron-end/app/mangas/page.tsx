import Link from "next/link";
import React from "react";


import EndInfoIManga from "@/components/MangaItem/EndInfoIManga";
import MainItemManga from "@/components/MangaItem/MainItemManga";
import InforAuthor from "@/components/MangaItem/InforAuthor";
const Manga = () => {
  return (
    <div className="px-2 flex flex-col text-center py-10 bg-stone-200">
     <section>
      <MainItemManga/>
     </section>
     <section>
      <div className="bg-white px-2 pt-10 pb-16 rounded-b-lg shadow-lg h-max">
      <InforAuthor/>
      </div>
     
     </section>
     <section>
      <EndInfoIManga/>
     </section>
    </div>
  );
};

export default Manga;
