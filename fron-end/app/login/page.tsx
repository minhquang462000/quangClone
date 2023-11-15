import Link from "next/link";
import { useRouter} from "next/router"


export default function LoginPage (){
    return <div className="bg-slate-200 h-[750px] pt-[150px]  text-center ">
        <div className="flex flex-col gap-10 w-[250px] m-auto lg:w-[500px]">
        <p className="font-bold text-xl">Đăng nhập</p>
        <div className="flex flex-col gap-8 text-left">
            <div className="flex flex-col gap-4 ">
                <label htmlFor="name" className="text-xs font-semibold text-stone-600">TÊN ĐĂNG NHẬP</label>
                <input className="px-4 py-2 rounded-lg outline-blue-400" id="name" name="name" type="text" placeholder="Tên đăng nhập" />
            </div>
            <div className="flex flex-col gap-4">
                <label htmlFor="password" className="text-xs font-semibold text-stone-600">MẬT KHẨU</label>
                <input className="px-4 py-2 rounded-lg outline-blue-400" id="password" name="password" type="password" placeholder="Mật khẩu" />
            </div>
            <div className="flex  gap-2">
               
                <input type="checkbox" name="" id="checkbox" />
                <label htmlFor="checkbox" className="text-xs font-semibold text-stone-600">GHI NHỚ MẬT KHẨU</label>
            </div>
            
        </div>
        <div className="bg-blue-600 text-white font-bold text-sm px-5 py-3 rounded-lg hover:bg-blue-800 w-max m-auto"><button>ĐĂNG NHẬP</button></div>
        <div className="flex flex-col text-blue-500 font-bold text-sm gap-3 text-left lg:flex-row lg:m-auto">
            <Link href={""}><span>Quên mật khẩu?</span></Link>
            <Link href={""}><span>Đăng ký tài khoản</span></Link>
        </div>
        </div>
    </div>
}