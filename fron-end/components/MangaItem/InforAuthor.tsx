
'use client'
import React, { useState } from "react";
import { BsMessenger, BsFacebook } from "react-icons/bs";
const InforAuthor = () => {
  const [isShorten,setIsShorten] =useState<boolean>(true)
  return (
      <div className={`bg-slate-200 text-left rounded-lg overflow-hidden ${isShorten ? "h-[200px]":"h-max"} relative `}>
        <div className="p-4 ">
          <div className="flex justify-between items-center">
            <div className="flex items-center gap-2">
              <span className="w-[30px] h-[30px] flex justify-center items-center rounded-full font-bold text-sm  bg-blue-300 text-blue-600">a</span>
              <div className="flex flex-col font-sans ">
                <span className="font-bold text-sm">ĐẤU PHÁ THƯƠNG KHUNG</span>
                <span className=" font-extralight text-xs">4 TRUYỆN</span>
              </div>
            </div>
            <div className="flex gap-4 text-stone-500">
              <span>
                {" "}
                <BsFacebook />
              </span>
              <span>
                <BsMessenger />
              </span>
            </div>
          </div>
          <div className=" flex flex-col mt-5 gap-5 text-stone-500 text-sm">
            <p>
              Điều gì đã kết nối hai con người vụng về không biết bạn bè của
              mình là ai?
            </p>
            <p>
              Một ngày nọ, Kami-Doji Takuto, người ghét tham gia vào một nhóm và
              sống một cuộc sống độc lập, nhận được một cuộc gọi từ bạn cùng lớp
              của mình, Shirase Chinashi. Khi cô ấy mở miệng, lời thoại của cô
              ấy không như anh mong đợi: "Tôi có thể gọi anh là chủ nhân được
              không?"
            </p>
            <p>
              Ichinashi từ chối, nhưng các môn đệ của cô ấy không ngừng di
              chuyển! Takumi sẽ làm gì trong tình huống khó chịu nhất trong đời?
            </p>
          </div>
        </div>
        <div className= "bg-slate-300 p-4 pb-5  rounded-b-lg text-stone-700 ">
            <div className="flex flex-col gap-2 mb-4">
              <span className="font-bold">TRANG CHÍNH THỨC</span>
              <span>comic-walker.com</span>
            </div>
            <div className="flex flex-col gap-4">
              <span className="font-bold">THÔNG TIN THÊM</span>
              <div className="text-sm">
                <span className="flex gap-1">
                  <p className="font-bold">3</p>
                  <p>chương đã đăng</p>
                </span>
                <span className="flex gap-1">
                  <p className="font-bold">460</p>
                  <p>lượt xem</p>
                </span>
              </div>
             
            </div>
           
          </div>
          <div className={`text-center text-sm font-semibold text-stone-700 absolute  right-0  ${isShorten ?"bg-stone-300 bottom-0 shadow-xl bg-opacity-40 ":"bottom-1 "} w-full `}>
                <button onClick={()=>setIsShorten(!isShorten)}>{isShorten ?"Xem thêm":"Thu gọn"}</button>
          </div>
         
      </div>
  );
};

export default InforAuthor;
