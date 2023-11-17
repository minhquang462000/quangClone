 import React from 'react'
 import  Link  from 'next/link';

 const Dashboard = () => {


   return (
     <div className=' p-10 flex gap-5 lg:w-[1280px] m-auto'>
        <Link href ={"user"}>
        <div className='hover:bg-blue-300 px-10 py-8 border rounded-xl cursor-pointer shadow-xl' >Manager Users</div>
        </Link >
        <Link href ={"product"}> <div className='hover:bg-blue-300 px-10 py-8 border rounded-xl cursor-pointer shadow-xl' >Maneger Products</div></Link>
        
     </div>
   )
 }
 
 export default Dashboard