"use client";
import axios from "axios";
import React from "react";
import { useEffect, useState } from "react";
import ComfirmDelete from "./ComfirmDelete";

interface IPops {
  setTabIndex:(value:number)=>void;
  blog:IBlog | null;
  setBlog:(value:IBlog |null)=>void,
}
 

const ListProduct = (props: IPops) => {
  const [userList, setUserList] = useState([]);
  const {setTabIndex ,setBlog,blog} =props
  const [isShowComfirm,setIsShowComfirm] =useState<boolean>(false)
  const [idItem,setIdItem]=useState(0)

  async function getProduct() {
    const res = await axios.get("http://localhost:8000/products");
    const data = res.data;
    setUserList(data);
  }
  useEffect(() => {
    getProduct();
  }, []);
 


  // setUserList(userList?.sort((a:any ,b:any) =>b.id - a.id))

  const classThTd = "border border-slate-600 p-2 flex items-center justify-center truncate w-full  h-[100px]";
  return (
   <div className="relative">
    <div className={`absolute left-[35%] ${ isShowComfirm ? "block":"hidden"}`}><ComfirmDelete setIsShowComfirm={setIsShowComfirm} idItem={idItem} getProduct={getProduct()}></ComfirmDelete></div>
     <div   userList ={userList?.sort((a:any ,b:any) =>b.id - a.id)}>
      {userList.length === 0 && "không có dữ liệu"}
      {userList.length !== 0 && (     <table className="w-full border border-slate-500 border-collapse">
          <thead>
            <tr className="grid grid-cols-5">
              <th className={classThTd}>ID</th>
              <th className={classThTd}>Trang bìa</th>
              <th className={classThTd}>Tên truyện</th>
              <th className={classThTd}>Trạng thái</th>
              <th className={classThTd}>Action</th>
            </tr>
          </thead>
          <tbody>
            {userList.map((item) => {
              return (
                <tr className="grid grid-cols-5" key={item.id}>
                  <td className={classThTd}>
                    <span className="truncate">{item.id}</span>
                  </td>
                  <td className={`${classThTd} `}>
                    <img className="w-[60px] h-full object-cover" src={item.img} alt=""  />
                  </td>
                  <td className={classThTd}>
                    <span className="truncate">{item.name}</span>
                  </td>
                  <td className={classThTd}>{item.status}</td>
                  <td className={`${classThTd} flex justify-around` }>
                    <button onClick={()=>{setIsShowComfirm(true) ,setIdItem(item.id)}} className=" bg-red-500 px-5 py-1 rounded-lg  hover:text-white hover:bg-red-700">Delete</button>
                    <button onClick={()=>{setTabIndex(2) ; setBlog(item);}}  className="  bg-red-500 px-5 py-1 rounded-lg  hover:text-white hover:bg-red-700">Edit</button>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      )}
    </div>
   </div>
  );
};

export default ListProduct;
