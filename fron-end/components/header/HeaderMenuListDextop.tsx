import Link from "next/link";

export default function HeaderMenuListDextop() {
  const classNameLi = "py-[12px] px-2 ";
  return (
    <ul className="w-[170px]  rounded-xl bg-white shadow-md text-gray-500 ">
      <Link href={"/login"}>
        <li className={` ${classNameLi}`}>Đăng nhập</li>
      </Link>

      <Link href={"/register"}>
        {" "}
        <li className={` ${classNameLi}`}>Đăng ký</li>
      </Link>
      <Link href={""}>
        {" "}
        <li className={` ${classNameLi} border-y border-gray-400`}>
          {" "}
          Truyện đã tải xuống
        </li>{" "}
      </Link>
      
    </ul>
  );
}
