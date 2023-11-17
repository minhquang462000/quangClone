"use client";
import React from "react";
import { useState, useEffect } from "react";
import { storageFirebase } from "../../services/firebace";
import { getDownloadURL, ref, uploadBytes } from "firebase/storage";
import axios from "axios";
// màn hinh be the

interface IProps {
  setTabIndex:(value:number)=>void;
  blog:IBlog | null;
  setBlog:(value:IBlog |null)=>void,
}
const UpdateProduct = (props: IProps) => {
  const {setTabIndex ,setBlog,blog} =props
  const [idItem,setIdItem]  =useState<number>(blog.id)
  const [formData, setFormData] = useState({
    name: blog?.name,
    status:blog?.status,
    img:blog?.img
  });
  const [fileData, setFileData] = useState(null);
  const handleChangeData = (e: any) => {
    const { name, value } = e.target;
    setFormData((old) => {
      return {
        ...old,
        [name]: value,
      };
    });
  };
  const handleChangeFile = (e: any) => {
    setFileData(e.target.files[0]);
  };

  //preview Image Avatar
  const handleUpdate = async () => {
   const UpdateData = await axios.put(`http://localhost:8000/products/${idItem}`,formData)
   setTabIndex(0)
  };

  return (
    <div className="flex flex-col  items-center justify-start gap-10">
      <div>UPDATE PRODUCT</div>
      <div className="flex flex-col items-center justify-center">
        {/* <img src={imagePreview} alt="" className="h-12 w-12 rounded-full overflow-hidden" /> */}
        <label
          htmlFor="fileUpload"
          className="h-16 w-16 bg-gray-200 rounded-full overflow-hidden cursor-pointer"
        >
          {" "}
          <img
              src={blog?.img}
              alt=""
              className="h-full w-full rounded-full overflow-hidden object-cover"
            />
        </label>

        <input
          type="file"
          name=""
          id="fileUpload"
          className="hidden"
          onChange={handleChangeFile}
        />
      </div>
      <div className="flex gap-4 flex-wrap items-end">
        <div>
          <label htmlFor="name">name :</label>
          <input
            type="text"
            className="relative bg-gray-50ring-0 outline-none border border-neutral-500 text-neutral-900 placeholder-violet-700 text-sm rounded-lg focus:ring-violet-500  focus:border-violet-500 block w-64 p-2.5 checked:bg-emerald-500"
            placeholder="name..."
            id="name"
            value={formData.name}
            onChange={handleChangeData}
            name="name"
          />
        </div>
        <div>
          <label htmlFor="name">Status :</label>
          <input
            type="text"
            className="relative bg-gray-50ring-0 outline-none border border-neutral-500 text-neutral-900 placeholder-violet-700 text-sm rounded-lg focus:ring-violet-500  focus:border-violet-500 block w-64 p-2.5 checked:bg-emerald-500"
            placeholder="status..."
            id="status"
            value={formData.status}
            onChange={handleChangeData}
            name="status"
          />
        </div>
        
        <button
          className="cursor-pointer transition-all bg-blue-500 text-white px-6 py-2  active:brightness-90 active:translate-y-[2px] h-max hover:font-bold hover:bg-blue-600  rounded-xl"
          onClick={handleUpdate}
        >
          Update
        </button>
      </div>
    </div>
  );
};

export default UpdateProduct;
