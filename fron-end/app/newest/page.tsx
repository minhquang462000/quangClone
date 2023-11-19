'use client'
import React from 'react'
import NewestItem from '@/components/Newest/NewestItem';
import { useState } from 'react';
import { useEffect } from 'react';
import axios from 'axios';
import Loading from '@/components/Loading';
import ButtonNewest from '@/components/Newest/ButtonNewest';

const page = () => {
  const [productNewestList,setProductNewestList] =useState()
useEffect(()=>{
  const getProductList =async ()=>{
    const res = await axios.get("http://localhost:8000/products")
    setProductNewestList(res.data)
  }
  getProductList()
},[])
if (!productNewestList) {
  return <Loading/>
}

  return (
    <main className='px-2 py-8   text-stone-700 bg-slate-200  '>
        <div className='lg:w-[1280px] m-auto flex flex-col gap-8'>
        <div className='font-bold text-xl '>MỚI CẬP NHẬT</div>
        <div className='grid gap-3 grid-cols-3 h-max overflow-hidden lg:grid-cols-6 '>
          <NewestItem blogs={productNewestList}/>
         
        </div>
        <div><ButtonNewest/></div>
        </div>
    </main>
  )
}

export default page