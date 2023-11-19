'use client'
import Link from "next/link";
import Modal from 'react-bootstrap/Modal';

export default function HeaderMenuList() {
  const classNameLi = "py-[12px] px-2";
  return (
    <ul className="w-[170px]  rounded-xl  bg-white text-gray-500 shadow-sm text-sm">
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
      <Link href={"/login"}>
        {" "}
        <li className={` ${classNameLi} text-yellow-500 font-semibold `}> DASHBOARD</li>{" "}
      </Link>
      <Link href={""}>
        {" "}
        <li className={` ${classNameLi} text-green-500`}>Ủng hộ</li>{" "}
      </Link>

      <Link href={""}>
        {" "}
        <li className={` ${classNameLi}`}>Fanpage</li>{" "}
      </Link>

      <Link href={""}>
        {" "}
        <li className={` ${classNameLi} text-green-500`}>Tin tức</li>
      </Link>

      <Link href={""}>
        {" "}
        <li className={` ${classNameLi} text-green-500`}>Động Romcom</li>{" "}
      </Link>
    </ul>
  );
}
