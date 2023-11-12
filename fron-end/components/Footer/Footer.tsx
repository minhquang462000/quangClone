import Link from "next/link";
import React from "react";

const FooterComponent = () => {
  return (
    <footer className="h-[280px] bg-slate-800 flex flex-col  justify-center text-sm text-gray-400 text-center">
      <div className="flex flex-col mb-4">
        <Link href={""}>
          <h3 className="text-green-200 font-bold">Contact for work, copyright and more:</h3>{" "}
        </Link>
        <p>nmquang.cuutruyen@gmail.com</p>
      </div>
      <div className="flex flex-col gap-2 mb-8">
        <Link href={""}>
          <span>Điều khoản dịch vụ</span>
        </Link>
        <Link href={""}>
          <span>Chính sách bảo mật</span>
        </Link>
      </div>
      <p className="text-gray-500">© 2023 - cuutruyen.net</p>
    </footer>
  );
};

export default FooterComponent;
