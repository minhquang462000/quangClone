"use client";
import { useState } from "react";

export function HeaderInputSearch() {
  const [InputSearch, setInputSearch] = useState<String>("");

  return (
    <div className="w-screen bg-gray-400 p-5 px-3 text-center">
      <input
        type="text"
        placeholder="Tìm kiếm truyện"
        onChange={(e) => setInputSearch(e.target.value)}
        className=" bg-stone-200 px-3 py-2 placeholder:text-base rounded-lg w-full outline-blue-400 lg:w-[800px] "
      /> 
    </div>
  );
}
