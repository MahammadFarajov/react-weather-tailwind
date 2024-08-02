import React from 'react'
import sun from "../../public/sun.png"
import temp from "../../public/temp.png"
import pressure from "../../public/pressure.svg"
import sea from "../../public/Group.svg"
import wind from "../../public/wind.png"

export default function MainTop() {
    return (
    <div className="max-w-[1200px] mx-auto w-full flex gap-[50px] justify-center mb-[50px]">
        <div className='rounded-[20px] dark:bg-[#4F4F4F]/25 bg-white p-5 shadow-lg dark:shadow-[#B4B4B4]/25 flex flex-col gap-[31px] min-w-[400px]'>
            <div className="flex gap-[67px] justify-between items-center">
                <div className="flex flex-col">
                    <h1 className='text-customblue font-medium text-[96px] leading-[117.02px]'>20°</h1>
                    <p className='font-normal dark:text-white text-[40px] leading-none'>Сегодня</p>
                </div>
                    <img src={sun} alt="" />
            </div>
            <div className="flex flex-col gap-[14px]">
                <p className='font-normal text-[25px] text-[#939CB0]'>Time: 21:54</p>
                <p className='font-normal text-[25px] text-[#939CB0]'>City: SaintPetersburg</p>
            </div>
        </div>
        <div className="py-[41.5px] pl-[31px] rounded-[20px] dark:bg-[#4F4F4F]/25 flex flex-col justify-between bg-white p-5 shadow-lg dark:shadow-[#B4B4B4]/25 w-[750px]">
            <div className="flex gap-5 items-center justify-start">
                <div className="bg-white py-[6.5px] px-[11.5px] rounded-full shadow-customblue/20 flex justify-center items-center shadow-md"> <img src={temp} alt="" /></div>
                <p className='font-normal text-[14px] text-[#939CB0]'>Температура</p>
                <p className='font-normal text-[14px] dark:text-white'>20° - ощущается как 17°</p>
            </div>
            <div className="flex gap-5 items-center justify-start">
                <div className="bg-white py-[9.5px] px-[9.5px] rounded-full shadow-customblue/20 flex justify-center items-center shadow-md"> <img src={pressure} alt="" /></div>
                <p className='font-normal text-[14px] text-[#939CB0]'>Давление </p>
                <p className='font-normal text-[14px] dark:text-white'>765 мм ртутного столба - нормальное</p>
            </div>
            <div className="flex gap-5 items-center justify-start">
                <div className="bg-white py-[10px] px-[10px] rounded-full shadow-customblue/20 flex justify-center items-center shadow-md"> <img src={sea} alt="" /></div>
                <p className='font-normal text-[14px] text-[#939CB0]'>Осадки</p>
                <p className='font-normal text-[14px] dark:text-white'>Без осадков</p>
            </div>
            <div className="flex gap-5 items-center justify-start">
                <div className="bg-white py-[10px] px-[9px] rounded-full shadow-customblue/20 flex justify-center items-center shadow-md"> <img src={wind} alt="" /></div>
                <p className='font-normal text-[14px] text-[#939CB0]'>Ветер</p>
                <p className='font-normal text-[14px] dark:text-white'>3 м/с юго-запад - легкий ветер</p>
            </div>
        </div>
    </div>
  )
}
