import Link from 'next/link'
import Image from 'next/image'
import React from 'react'
import { contents, footerLinks, socials } from '@/data/website'

import { RedirectButton } from './buttons';

import HomeRoundedIcon from '@mui/icons-material/HomeRounded';
import AssignmentRoundedIcon from '@mui/icons-material/AssignmentRounded';
import MenuBookRoundedIcon from '@mui/icons-material/MenuBookRounded';

const Sidebar = () => {
  return (
    <div className='z-50 w-[240px] top-0 fixed h-full flex flex-col justify-center md:gap-2 items-center' id='contact'>
        <RedirectButton icon={<HomeRoundedIcon sx={{color: `#A7B0BA`}} className='group-hover:text-white text-inherit ease-in-out duration-300'/>} text={`Dashboard`} redirect='/'/>
        <RedirectButton icon={<AssignmentRoundedIcon sx={{color: `#A7B0BA`}} className='group-hover:text-white text-inherit ease-in-out duration-300'/>} text={`Orders`} redirect='/orders'/>
        <RedirectButton icon={<MenuBookRoundedIcon sx={{color: `#A7B0BA`}} className='group-hover:text-white text-inherit ease-in-out duration-300'/>} text={`Menu`} redirect='/menu'/>
    </div>
  )
}

export default Sidebar