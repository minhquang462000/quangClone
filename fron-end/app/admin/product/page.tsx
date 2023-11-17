"use client";
import CreateProduct from "@/components/Admin/CreateProduct";
import ListProduct from "@/components/Admin/ListProduct";
import React from "react";
import { useState, useCallback } from "react";
import Link from "next/link";
import UpdateProduct from "@/components/Admin/UpdateProduct";

const ProductManeger = () => {
    const [tabIndex, setTadIndex] = useState<number>(0);
    const [blog, setBlog]=useState<IBlog | null>(null)
  const renderByTab = useCallback(() => {
    switch (tabIndex) {
      case 0:
        return <ListProduct blog={blog} setBlog={setBlog} setTabIndex ={setTadIndex}/>;
      case 1:
        return <CreateProduct setTabIndex ={setTadIndex}/>;
      case 2:
        return <UpdateProduct blog={blog} setBlog={setBlog} setTabIndex ={setTadIndex}/>;
      default:
        return null;
    }
  },[tabIndex]);

  return (
    <div className="p-8 w-[1280px] m-auto ">
      <div className="flex gap-4 mb-5">
        <div
          onClick={() => setTadIndex(0)}
          className={`p-4 py-2  rounded-lg shadow-lg cursor-pointer ${
            tabIndex === 0 ? "bg-blue-400 text-white font-bold" : ""
          }`}
        >
          List Product
        </div>
        <div
          onClick={() => setTadIndex(1)}
          className={`p-4 py-2  rounded-lg shadow-lg cursor-pointer ${
            tabIndex === 1 ? "bg-blue-400 text-white font-bold" : ""
          }`}
        >
          Create Product
        </div>
       <Link href ="/admin/user"> <div className="p-4 py-2  rounded-lg shadow-lg text-yellow-500 cursor-pointer">Goto Users</div></Link>
      </div>
      {renderByTab()}

      <div></div>
    </div>
  );
}

export default ProductManeger