"use client";
import Link from "next/link";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/pagination";
import "../../Style/StyleAppSwiper.css";
import { FreeMode, Pagination } from "swiper/modules";
interface IProps {
  blogs: IBlog[];
}

export default function HotTruyenComponent(props: IProps) {
  const { blogs } = props;
  const pagination = {
    clickable: true,
    renderBullet: function (index, className) {
      return '<span class="' + className + '">' + (index + 1) + "</span>";
    },
  };
  const ItemRender = blogs.filter((item) => item.id < 7);
  return (
    <div className="flex flex-col my-[80px] gap-3 mt-8">
      <div className=" relactive   text-white font-bold lg:text-xl rounded-lg ">
        <div className="h-[320px] bg-gradient-to-r from-purple-500 to-pink-500 absolute w-screen  right-0 -top-24 lg:h-[600px]"></div>
        <Swiper
          className=" lg:gap-2 lg:w-[1000px] m-auto lg:mb-5 "
          slidesPerView={1}
          spaceBetween={1}
          pagination={{
            clickable: true,
          }}
          modules={[FreeMode, Pagination]}
        >
          {ItemRender.map((item, index) => {
            return (
              <SwiperSlide key={index}>
                <div className="w-screen lg:w-[1000px] cursor-pointer  lg:h-[550px]  h-[250px] lg:m-auto rounded-xl  object-cover  relative ">
                  <img
                    className=" rounded-2xl absolute px-2 object-cover  h-full w-full "
                    src={item.img}
                    alt=""
                  />
                  <div className="absolute flex flex-col bottom-0  p-6 pb-8 ">
                    <Link href={`/mangas/${item.id}`}>
                      <span>{item.name}</span>
                    </Link>
                    <span className="text-base font-serif">Đoạn mô tả</span>
                  </div>
                  <div className="absolute bottom-0 p-6 pb-8  right-0 hidden lg:block">
                  <Link href={`/mangas/${item.id}`}>  <button className="bg-blue-800 rounded-lg bg-opacity-70 px-8 py-2">
                      XEM THÔNG TIN
                    </button></Link>
                  </div>
                </div>
              </SwiperSlide>
            );
          })}
        </Swiper>
      </div>
    </div>
  );
}
