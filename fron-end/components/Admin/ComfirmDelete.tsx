import axios from 'axios';
import React from 'react'


interface IProps {
    setIsShowComfirm:(value:boolean)=>void;
    idItem:number,
    getProduct:()=>{}
}
const ComfirmDelete = (props :IProps) => {
    const {setIsShowComfirm,idItem} =props
    

    const handleDelete = async ()=>{
     const deleteItem =   await axios.delete(`http://localhost:8000/products/${idItem}`);
     setIsShowComfirm(false)
     getProduct()
    }
  return (
    <div className='m-auto lg:w-[500px] lg:h-[200px] rounded-lg p-5  bg-stone-300 flex flex-col justify-between'>
        <div className='text-xl'>Bạn có thật sự muốn xóa sản phẩm ???</div>
        <div className='flex justify-end border-black py-2 border-t-2 gap-4'>
            <button onClick={handleDelete} className=' rounded-lg bg-red-600 px-4 py-1 text-white hover:bg-red-800'>YES</button>
            <button onClick={()=>setIsShowComfirm(false)} className=' rounded-lg bg-blue-600 px-4 py-1 text-white hover:bg-blue-800'>NO</button>
        </div>
    </div>
  )
}

export default ComfirmDelete