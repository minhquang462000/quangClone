 import Link from 'next/link'
import React from 'react'
 
 const ItemRelate = () => {
   return (
     <div className='flex gap-2'>
        <Link href={""}>
            <div className='w-[50px] rounded-lg overflow-hidden '>
            <img className='w-full h-full' src="https://photo-baomoi.bmcdn.me/w700_r1/2023_10_18_304_47257074/9291fb54cb1822467b09.jpg" alt="" />
            </div>

        </Link>
        <div className='flex flex-col gap-2'>
        <Link href={""}>  <div className='text-xl font-bold '>Tên truyện</div></Link>
        <div className='text-sm font-light'>
            <span>C.35 -</span>
            <span>19 PHÚT TRƯỚC</span>
        </div>
        </div>
    
     </div>
   )
 }
 
 export default ItemRelate