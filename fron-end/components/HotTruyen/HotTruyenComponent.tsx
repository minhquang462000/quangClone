import HotTruyenDot from "./HotTruyenDot";
import Link from "next/link";
interface IProps {
  blogs: IBlog[];
}

export default function HotTruyenComponent(props: IProps) {
  const { blogs } = props;
  const goToSliderbtDot = (index) => {
    console.log(index);
    
  };
  const ItemRender = blogs.filter((item) => item.id < 7);
  return (
    <div className="flex flex-col my-[80px] gap-3 ">
      <div className=" grid  w-screen grid-cols-dextopS overflow-hidden  lg:gap-2 lg:w-[1000px] m-auto lg:mb-5 ">
        {ItemRender.map((item) => {
          return (
            <div className="relactive  box-content text-white font-bold lg:text-xl rounded-lg ">
              <div className="h-[350px] bg-gradient-to-r from-purple-500 to-pink-500 absolute w-screen z-10 right-0 -top-24 lg:h-[650px]"></div>
              <div className="w-screen lg:w-[1000px]  lg:h-[550px]  h-[250px] lg:m-auto rounded-xl  object-cover z-20  relative ">
                <img
                  className=" rounded-2xl absolute px-2  h-full w-full "
                  src={item.img}
                  alt=""
                />
                <div className="absolute flex flex-col bottom-0  p-6 pb-8 ">
                  <Link href={""}>
                    <span>{item.name}</span>
                  </Link>
                  <span className="text-base font-serif">Đoạn mô tả</span>
                </div>
                <div className="absolute bottom-0 p-6 pb-8  right-0 hidden lg:block">
                  <button className="bg-blue-800 rounded-lg bg-opacity-70 px-8 py-2">
                    XEM THÔNG TIN
                  </button>
                </div>
              </div>
            </div>
          );
        })}
      </div>
      <div className=" text-black  flex justify-center gap-1 ">
        {ItemRender.map((item, index) => {
          return (
            <div key={index} onClick={() => goToSliderbtDot(index)}>
              <HotTruyenDot />
            </div>
          );
        })}
      </div>
    </div>
  );
}
