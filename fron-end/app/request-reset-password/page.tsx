import Link from 'next/link'
import React from 'react'

const RequestResetPasswordPage = () => {
  return (
    <div className="bg-slate-200 h-[650px] pt-[150px]  text-center ">
      <div className="flex flex-col gap-10 w-[250px] m-auto lg:w-[500px]">
        <p className="font-bold text-xl">Quên mật khẩu</p>
        <div className="flex flex-col gap-8 text-left">
          <div className="flex flex-col gap-4 ">
            <label
              htmlFor="email"
              className="text-xs font-semibold text-stone-600"
            >
             ĐỊA CHỈ EMAIL
            </label>
            <input
              className="px-4 py-2 rounded-lg outline-blue-400"
              id="email"
              name="email"
              type="email"
              placeholder="Nhập địa chỉ Email của bạn"
             
            />
          </div>
        </div>
        <div className="bg-blue-600 w text-white font-bold text-sm px-5 py-3 lg:px-8 rounded-lg hover:bg-blue-800 w-full m-auto lg:w-[250px]">
          <button >KHÔI PHỤC MẬT KHẨU</button>
        </div>
        <div className="flex flex-col text-blue-500 font-bold text-sm gap-3 text-left lg:flex-row lg:m-auto">
          <Link href={"/login"}>
            <span className="hover:text-blue-700">Đăng nhập</span>
          </Link>
          <Link href={"/register"}>
            <span className="hover:text-blue-700">Đăng ký tài khoản</span>
          </Link>
        </div>
      </div>
    </div>
  )
}

export default RequestResetPasswordPage