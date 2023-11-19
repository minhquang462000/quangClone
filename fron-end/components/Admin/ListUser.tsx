"use client";
import axios from "axios";
import React from "react";
import { useEffect, useState } from "react";



const ListUser = () => {
 
  const [userList, setUserList] = useState([]);

  useEffect(() => {
    async function getUser() {
      const res = await axios.get("http://localhost:8000/users");
      const data = res.data;
      setUserList(data);
    }
    getUser();
  }, []);
  const handleChangeActive = async (item : number)=>{
    
   const userUpdate = (await axios.put(`http://localhost:8000/users/${item.id}`,{...item, isActive: !item.isActive})).data
    const newUserList = userList.map(user =>{
      if (user.id === userUpdate.id) {
        user.isActive = userUpdate.isActive
      } return user
    })
    setUserList(newUserList)
  }
  const classThTd = "border border-slate-600 flex items-center justify-center truncate h-[100px]";
  return (
    <div   >
      {userList.length === 0 && "không có dữ liệu"}
      {userList.length !== 0 && (     <table className="w-full border border-slate-500 border-collapse">
          <thead>
            <tr className="grid grid-cols-6">
              <th className={classThTd}>ID</th>
              <th className={classThTd}>avt</th>
              <th className={classThTd}>name</th>
              <th className={classThTd}>age</th>
              <th className={classThTd}>email</th>
              <th className={classThTd}>status</th>
            </tr>
          </thead>
          <tbody>
            {userList.map((item) => {
              return (
                <tr className="grid grid-cols-6" key={item.id}>
                   <td className={classThTd}>
                    <span className="truncate">{item.id}</span>
                  </td>
                  <td className={classThTd}>
                  <img className="w-[60px] h-full object-cover" src={item.avt} alt=""  />
                  </td>
                  <td className={classThTd}>
                    <span className="truncate">{item.name}</span>
                  </td>
                  <td className={classThTd}>{item.age}</td>
                  <td className={classThTd}>
                    <span className="truncate">{item.email}</span>
                  </td>
                  <td className={classThTd}>
                  <div onClick={()=>{handleChangeActive(item)}}> {item.isActive ? <span className="bg-green-500 rounded-lg px-4 py-1 text-white  hover:font-bold hover:bg-green-700 cursor-pointer">active</span> : <span className="bg-red-500 rounded-lg px-4 py-1 text-white  hover:font-bold hover:bg-red-700 cursor-pointer">de-active</span>}</div>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
        
       
      )}
    </div>
  );
};

export default ListUser;
