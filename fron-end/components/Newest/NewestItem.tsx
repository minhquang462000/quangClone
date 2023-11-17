import React from 'react'



interface IProps {
    blogs: IBlog[];
  }
const NewestItem = (props :IProps) => {
    const { blogs } = props;
    
  return (
    blogs.map(item =>{
        return  <div className='flex flex-col gap-2 '>
        <div className='w-[120px] h-[180px] rounded-lg overflow-hidden lg:w-[200px] lg:h-[300px] cursor-pointer'>
            
            <img className='w-full h-full object-cover' src={item.img} alt="" />
            </div>
        <div className='flex flex-col gap-1'>
            <p className='font-extrabold text-sm  w-[120px]  truncate lg:text-base lg:w-[200px] cursor-pointer'> {item.name}</p>
            <span className='flex justify-between text-xs font-light lg:justify-start lg:gap-2 lg:text-sm '>
                <p className='font-medium'>C.46</p>
                <p> - 4 GIỜ TRƯỚC</p>
            </span>
        </div>

    </div>
    })
   
  )
}

export default NewestItem