import React from 'react'
import ButtonDynamic from '../OutStanding/ButtonDynamic'
import TranslationGroupItem from './TranslationGroupItem'

const TranslationGroup = () => {
  return (
    <div className='px-2 lg:w-[1280px] m-auto'>
        <div className='font-bold text-xl text-gray-700 mb-[60px]'>NHÓM DỊCH HÀNG ĐẦU</div>
        <div className='flex justify-end mb-[20px]'><ButtonDynamic/></div>
        <div className='grid grid-rows-5 overflow-hidden gap-2'>
            <TranslationGroupItem/>
            <TranslationGroupItem/>
            <TranslationGroupItem/>
            <TranslationGroupItem/>
            <TranslationGroupItem/>
        </div>
    </div>
  )
}

export default TranslationGroup