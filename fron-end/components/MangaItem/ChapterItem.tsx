import { MdDownload } from "react-icons/md";

const ChapterItem = () => {
  return (
    <div className="flex justify-between items-center gap-2 bg-slate-200  border-slate-400 border-l-[5px] p-2 hover:bg-slate-300">
      <div className=" font-bold">C.460</div>
      <div className="flex flex-col text-left">
        <p className="font-me">Tên chap truyện</p>
        <ol className="flex font-thin text-xs">
          <li> một ngày trước</li>
          <li> - 5,5k lượt xem</li>
          <li> - 13 bình luận</li>
        </ol>
      </div>
      <button className="bg-stone-300 rounded-full p-2">
        <MdDownload />
      </button>
    </div>
  );
};

export default ChapterItem;
