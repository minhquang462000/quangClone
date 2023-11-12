import React from "react";

const ButtonDynamic = () => {
  const styleCss ="focus:bg-blue-600 focus:text-white  px-3 rounded-2xl lg:w-[30%] lg:py-1"
  return (
   
    <div className=" bg-white p-1 rounded-2xl flex w-[65%] text-gray-900 text-[13px] font-bold justify-between items-center lg:w-[25%]">
      <button className={styleCss}>TUẦN</button>
      <button className={styleCss}>THÁNG</button>
      <button className={styleCss}>MỌI LÚC</button>
    </div>
  );
};

export default ButtonDynamic;
