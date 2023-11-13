"use client";
import { AiOutlineSearch } from "react-icons/ai";
import { HeaderInputSearch } from "./HeaderInputSearch";
import { useEffect, useRef, useState } from "react";
import { log } from "console";

export default function HeaderSearch() {
  const [isShowInput, setIsShowInput] = useState<boolean>(false);
  const showRef = useRef();
  // solution
  useEffect(()=>{
    const handler =(e :any)=>{
      // if (showRef.current && !showRef.current!.contains(e.target)  && isShowInput){
      //   setIsShowInput(false)
      // }
      if (!showRef.current.contains(e.target)){
        setIsShowInput(false)
      }
    }
    document.addEventListener('mousedown',handler)
return()=>{
  document.removeEventListener("mousedown",handler)
}
   
  },[isShowInput])
 
  return (
    <div className=" z-10 "  ref={showRef}>
      <div
        className="text-xl bg-gray-400 p-3 rounded-full cursor-pointer  bg-opacity-70  hover:bg-gray-500"
        
      
      >
        <div onClick={()=>setIsShowInput(!isShowInput)}> <AiOutlineSearch/></div>
       
      </div>
      <div
        className={`absolute outline-none top-0 left-0 `}
      >
        {isShowInput && (
          <div>
            <HeaderInputSearch />
          </div>
        )}
      </div>
    </div>
  );
}
