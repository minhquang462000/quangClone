import { useCallback, useState } from "react";

const ButtonDynamic = () => {
  const [tabIndex, setTadIndex] = useState<number>(0);
  const renderByTab = useCallback(()=>{
    switch (tabIndex) {
      case 0:
        return
      case 1:
      return
      case 2:
      return
      default:
        return null
    }
  },[tabIndex])
  const styleCss ="px-3 rounded-2xl lg:w-[30%] lg:py-1"
  return (
   
    <div className=" bg-white p-1 rounded-2xl flex w-[65%] text-gray-900 text-[13px] font-bold justify-between items-center lg:w-[25%]">
      <button onClick={()=>setTadIndex(0)} className={`${styleCss} ${ tabIndex === 0 ? "bg-blue-600 text-white font-bold" : ""}`}>TUẦN</button>
      <button onClick={()=>setTadIndex(1)} className={`${styleCss} ${ tabIndex === 1 ? "bg-blue-600 text-white font-bold" : ""}`}>THÁNG</button>
      <button onClick={()=>setTadIndex(2)} className={`${styleCss} ${ tabIndex === 2 ? "bg-blue-600 text-white font-bold" : ""}`}>MỌI LÚC</button>
    </div>
  );
};

export default ButtonDynamic;
