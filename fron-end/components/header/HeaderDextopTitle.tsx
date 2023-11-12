'use client'
import Link from "next/link";


export default function HeaderDextopTitle(){
    return <ul className='text-gray-600 font-bold flex gap-3 text-xs  '>
        <Link href={""}><li className='text-yellow-700'>CẮT WEBTOON</li></Link>
        <Link href={""}><li className='hover:text-gray-300 '>DISCORD</li></Link>
        <Link href={""}><li>HỘI KÍN</li></Link>
        <Link href={""}><li>ĐĂNG TRUYỆN</li></Link>
        <Link href={""}><li>TIN TỨC</li></Link>
    </ul>
}