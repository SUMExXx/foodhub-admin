import React from 'react';

import Image from 'next/image';
import Link from 'next/link';

interface MenuItemProps{
    name: string,
    desc: string,
    price: number,
    type: string,
    imgUrl: string
}

const MenuItem = ({ name, desc, price, type, imgUrl} : MenuItemProps) => {
  return (
    <div className='rounded-xl shadow-[rgba(17,_17,_26,_0.1)_0px_0px_16px] hover:shadow-[rgba(13,_38,_76,_0.19)_0px_9px_20px] ease-in-out duration-300 cursor-pointer'>
        <div className='duration-0 flex flex-col justify-center md:w-[160px] md:gap-2 w-full'>
            <Image src={imgUrl} alt={name} height={160} width={160} className="h-[160px] w-[160px] rounded-xl flex md:p-1 items-end justify-between object-cover">
                {/* <div className='w-[20px] h-[20px] rounded-md'/>
                <div className='w-[20px] h-[20px] rounded-md'/> */}
            </Image>
            <div className='flex flex-col md:p-2 md:pt-0 justify-center items-center text-center md:gap-2 w-full'>
                <h4 className='text-sm font-black rounded-sm w-[100px]'>{name}</h4>
                <div className='flex justify-between w-full'>
                    <h4 className='text-sm font-bold text-left rounded-sm w-[80px]'>{type}</h4>
                    <h4 className='text-sm rounded-sm text-right font-bold w-[40px]'>{price}</h4>
                </div>
                <div className='flex flex-col md:gap-1 w-full'>
                    <span className='text-sm rounded-sm w-full line-clamp-3'>{desc}</span>
                </div>
            </div>
        </div>
    </div>
  )
}

export default MenuItem

export const MenuItemPlaceHolder = () =>{
    return (
    <div className='rounded-xl p-4 shadow-[rgba(17,_17,_26,_0.1)_0px_0px_16px] hover:shadow-[rgba(13,_38,_76,_0.19)_0px_9px_20px] ease-in-out duration-300 cursor-pointer'>
        <div className='animate-pulse duration-0 flex flex-col justify-center md:w-[160px] md:gap-4 w-full'>
            <div className="bg-slate-200 h-[160px] w-[160px] rounded-xl flex md:p-2 items-end justify-between">
                <div className='w-[20px] h-[20px] rounded-md bg-white'/>
                <div className='w-[20px] h-[20px] rounded-md bg-white'/>
            </div>
            <div className='flex flex-col justify-center items-center md:gap-2 w-full'>
                <h4 className='h-[10px] rounded-sm w-[100px] bg-slate-200'></h4>
                <div className='flex justify-between w-full'>
                    <h4 className='h-[10px] rounded-sm w-[80px] bg-slate-200'></h4>
                    <h4 className='h-[10px] rounded-sm w-[40px] bg-slate-200'></h4>
                </div>
                <div className='flex flex-col md:gap-1 w-full'>
                    <h4 className='h-[10px] rounded-sm w-full bg-slate-200'></h4>
                    <h4 className='h-[10px] rounded-sm w-full bg-slate-200'></h4>
                    <h4 className='h-[10px] rounded-sm w-full bg-slate-200'></h4>
                </div>
            </div>
        </div>
    </div>
  )
}