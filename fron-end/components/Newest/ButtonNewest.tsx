import React from "react";
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";
const ButtonNewest = () => {
  return (
    <div className="flex gap-3 justify-center mb-10">
      <div className="flex gap-2 items-center bg-blue-600 rounded-lg px-5 py-2 text-white font-extrabold">
        <IoIosArrowBack />
        <button>Trang trước</button>
      </div>
      <div className="flex gap-2 items-center bg-blue-600 rounded-lg px-5 py-2 text-white font-extrabold">
        <button>Trang sau</button>
        <IoIosArrowForward />
      </div>
    </div>
  );
};

export default ButtonNewest;
