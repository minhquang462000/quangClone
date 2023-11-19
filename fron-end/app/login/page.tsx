'use client'
import axios from "axios";
import Link from "next/link";
import { useRouter } from 'next/navigation'
import { useState } from "react";

export default function LoginPage() {

     const router = useRouter()
  const [isShowPass, setIsShowPass] = useState(false);

  const [formData,setFormData]= useState({
    name:"",
    password:"",
  })
  
  const handleChangeData = (e: any) => {
    const { name, value } = e.target;
    setFormData((old) => {
      return {
        ...old,
        [name]: value,
      };
    });
  };
  const handleChangeShowPass = (e :any) => {
    const checked = e.target.checked;
    setIsShowPass(checked);
  };
  const HandleSubmit=()=>{
    const getUserServer = async ()=>{
        const res = await axios.get(`http://localhost:8000/users?name=${formData.name}&password=${formData.password}`)
        if (res.data.length ===0) {
        alert("Tài khoản mật khẩu không chính xác")
        }else{
            localStorage.setItem("user", JSON.stringify(res.data[0]))
            
            if (res.data[0].role === "admin") {
                router.push('/admin/dashboard')
            }else{
                router.push("/")
            }

        }
    }
    getUserServer()


   
  }
  return (
    <div className="bg-slate-200 h-[750px] pt-[150px]  text-center ">
      <div className="flex flex-col gap-10 w-[250px] m-auto lg:w-[500px]">
        <p className="font-bold text-xl">Đăng nhập</p>
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
              type="password"
              placeholder="Mật khẩu"
              onChange={handleChangeData}
            />
          </div>
          <div className="flex  gap-2">
            <input type="checkbox" name="" id="checkbox"  onChange={handleChangeShowPass}/>
            <label
              htmlFor="checkbox"
              className="text-xs font-semibold text-stone-600"
            >
              GHI NHỚ MẬT KHẨU
            </label>
          </div>
        </div>
        <div className="bg-blue-600 text-white font-bold text-sm px-5 py-3 lg:px-8 rounded-lg hover:bg-blue-800 w-max m-auto">
          <button onClick={HandleSubmit}>ĐĂNG NHẬP</button>
        </div>
        <div className="flex flex-col text-blue-500 font-bold text-sm gap-3 text-left lg:flex-row lg:m-auto">
          <Link href={"/request-reset-password"}>
            <span className="hover:text-blue-700">Quên mật khẩu?</span>
          </Link>
          <Link href={"/register"}>
            <span className="hover:text-blue-700">Đăng ký tài khoản</span>
          </Link>
        </div>
      </div>
    </div>
  );
}
