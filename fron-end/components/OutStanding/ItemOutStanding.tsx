 import React from 'react'
 import Link from 'next/link'
 const ItemOutStanding = () => {
   return (
    <div className="bg-blue-100 py-4 pl-5 gap-2 rounded-lg flex  text-sm relative hover:bg-white">
    <Link href={""}>
      <div className="h-[80px]  w-[50px] object-cover">
        <img className="w-full h-full rounded-lg "
          src="http://product.hstatic.net/200000515997/product/edc5bf61-5ed7-4d5d-8603-55293b6810f1_54ebd3e2cecc44468fca2ca276e54ab2_grande.jpg"
          alt=""
        />
      </div>
    </Link>
    <div className="flex flex-col gap-2 ">
      <div className="flex justify-between items-center">
        <Link href={""}>
          <h2 className="font-bold text-base w-[120px] truncate">Tên truyệnsdádsadsdsadsdádsdádádád</h2>
        </Link>
       
      </div>
      <div className="text-sm text-gray-500 w-[160px] ">
        <p className="truncate">Chương 46 - 2 THÁNG TRƯỚC</p>
        <p className="truncate">LƯỢT XEM</p>
      </div>
    </div>
    <span className="text-2xl font-bold text-gray-400 justify-end absolute top-1 right-1 opacity-70">01</span>
  </div>
   )
 }
 
 export default ItemOutStanding