"use client";
import axios from "axios";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useState } from "react";

export default function RegisterPage() {
  const router = useRouter();
  const [isShowPass, setIsShowPass] = useState(false);

  const [formData, setFormData] = useState({
    name: "",
    password: "",
  });

  const handleChangeData = (e: any) => {
    const { name, value } = e.target;
    setFormData((old) => {
      return {
        ...old,
        [name]: value,
      };
    });
  };
  const handleChangeShowPass = (e: any) => {
    const checked = e.target.checked;
    setIsShowPass(checked);
  };
  const HandleSubmit = () => {
    const getUserServer = async () => {
      const res = await axios.get(
        `http://localhost:8000/users?name=${formData.name}&password=${formData.password}`
      );
      if (res.data.length === 0) {
        alert("Tài khoản mật khẩu không chính xác");
      } else {
        localStorage.setItem("user", JSON.stringify(res.data[0]));

        if (res.data[0].role === "admin") {
          router.push("/admin/dashboard");
        } else {
          router.push("/");
        }
      }
    };
    getUserServer();
  };
  return (
    <div className="bg-slate-200 h-max py-[50px]  text-center ">
      <div className="flex flex-col gap-10 w-[300px] m-auto lg:w-[500px]">
        <p className="font-bold text-xl">Đăng ký</p>
        <div className="flex flex-col gap-8 text-left">
          <div className="flex flex-col gap-4 ">
            <label
              htmlFor="name"
              className="text-xs font-semibold text-stone-600"
            >
              TÊN ĐĂNG NHẬP
            </label>
            <input
              className="px-4 py-2 rounded-lg outline-blue-400"
              id="name"
              name="name"
              type="text"
              placeholder="Tên đăng nhập"
              onChange={handleChangeData}
            />
          </div>
          <div className="flex flex-col gap-4 ">
            <label
              htmlFor="email"
              className="text-xs font-semibold text-stone-600"
            >
              EMAIL
            </label>
            <input
              className="px-4 py-2 rounded-lg outline-blue-400"
              id="email"
              name="email"
              type="text"
              placeholder="Email"
              onChange={handleChangeData}
            />
          </div>
          <div className="flex flex-col gap-4">
            <label
              htmlFor="password"
              className="text-xs font-semibold text-stone-600"
            >
              MẬT KHẨU
            </label>
            <input
              className="px-4 py-2 rounded-lg outline-blue-400"
              id="password"
              name="password"
              type={isShowPass ? "text" : "password"}
              placeholder="Mật khẩu"
              onChange={handleChangeData}
            />
          </div>
          <div className="flex flex-col gap-4">
            <label
              htmlFor="comfirmpassword"
              className="text-xs font-semibold text-stone-600"
            >
              NHẬP LẠI MẬT KHẨU
            </label>
            <input
              className="px-4 py-2 rounded-lg outline-blue-400"
              id="comfirmpassword"
              name="comfirmpassword"
              type="password"
              placeholder="Mật khẩu"
              onChange={handleChangeData}
            />
          </div>
          <div className="flex flex-col gap-4">
            <div className="w-full h-[100px] lg:h-[150px]">
              <img className="w-full h-full" src="https://tse2.mm.bing.net/th?id=OIP.JS6eU1-hlwa567cXmLUYUQHaEX&pid=Api&P=0&h=220" alt="" />
            </div>
            <input
              className="px-4 py-2 rounded-lg outline-blue-400"
              id="captcha"
              name="captcha"
              type="text"
              placeholder="Nhập captcha"
              onChange={handleChangeData}
            />
            <div className="flex flex-col text-xs font-light gap-3">
            <p>
              Captcha nhập vào là dạng tiếng Việt có dấu, không phân biệt chữ
              hoa hay thường.
            </p>
            <p>
              <span className="text-blue-500 font-semibold cursor-pointer hover:text-blue-700">Làm mới captcha</span>
              <span> nếu captcha bạn gặp phải quá khó đọc.</span>
            </p>
            </div>
           
          </div>
          <div className="flex  gap-2">
            <input
              type="checkbox"
              name=""
              id="checkbox"
              onChange={handleChangeShowPass}
            />
            <div className="text-xs font-medium">
              <label
                htmlFor="checkbox"
                className=" text-stone-600"
              >
                TÔI ĐỒNG Ý VỚI
              </label>
              <Link href={""}>
                <span className="text-blue-500 hover:text-blue-600 font-semibold cursor-pointer"> ĐIỀU KHOẢN DỊCH VỤ VÀ CHÍNH SÁCH BẢO MẬT</span>
              </Link>
            </div>
          </div>
        </div>
        <div className="bg-blue-600 text-white font-bold text-sm px-6 py-3 rounded-lg hover:bg-blue-800 w-max m-auto">
        <button onClick={HandleSubmit}>ĐĂNG KÝ</button>
      </div>
      <div className="flex flex-col text-blue-500 font-bold text-sm gap-3 text-left lg:flex-row lg:m-auto">
        <Link href={"/login"}>
          <span className="hover:text-blue-700">Đăng nhập</span>
        </Link>
        <Link href={"/request-reset-password"}>
          <span className="hover:text-blue-700">Quên mật khẩu?</span>
        </Link>
      </div>
      </div>
      
    </div>
  );
}
