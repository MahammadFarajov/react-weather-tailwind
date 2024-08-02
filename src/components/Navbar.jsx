import React from 'react'
import logo from "../../public/nav-logo.png"
import { MdInvertColors } from 'react-icons/md'
import { SlArrowDown } from 'react-icons/sl'

export default function Navbar() {
  const toggleTheme = () => {
    document.documentElement.classList.toggle("dark")
  }
  return (
    <div className='max-w-[1200px] mx-auto w-full py-5 flex justify-between mb-[10px]'>
        <div className="flex gap-5 items-center">
            <img src={logo} alt="logo" />
            <h1 className='text-customblue text-[25px] font-bold leading-[30.48px] uppercase'>React weather</h1>
        </div>
        <div className="flex gap-5 items-center">
            <MdInvertColors onClick={toggleTheme} size={35} className="text-customblue cursor-pointer"/>
            <button className='flex gap-3 items-center dark:text-white dark:bg-[#4F4F4F] bg-customblue/20 py-[9px] px-5 rounded-[10px]'>Sellect City <SlArrowDown color='text-black dark:text-white' /></button>
        </div>
    </div>
  )
}
