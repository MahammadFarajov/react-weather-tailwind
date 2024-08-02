import React from 'react'
import rain_sun from "../../public/small_rain_sun.svg"
import small_rain from "../../public/small_rain.svg"

export default function Cards() {
  return (
    <div className='max-w-[1200px] mx-auto w-full flex flex-col gap-[7px]'>
        <div className="flex justify-between items-center">
        <div className="flex gap-[15px] items-center">
            <button className='px-[20.5px] py-[8px] dark:text-white dark:bg-[#4F4F4F] text-black bg-white transition-all shadow-md shadow-[#B4B4B4]/25 hover:bg-customblue hover:text-white rounded-[5px] '>На неделю</button>
            <button className='px-[20.5px] py-[8px] dark:text-white dark:bg-[#4F4F4F] text-black bg-white transition-all shadow-md shadow-[#B4B4B4]/25 hover:bg-customblue hover:text-white rounded-[5px] '>На месяц</button>
            <button className='px-[20.5px] py-[8px] dark:text-white dark:bg-[#4F4F4F] text-black bg-white transition-all shadow-md shadow-[#B4B4B4]/25 hover:bg-customblue hover:text-white rounded-[5px] '>На неделю</button>
        </div>
        <button className='px-[20.5px] py-[8px] dark:text-white dark:bg-[#4F4F4F] text-black bg-white transition-all shadow-md shadow-[#B4B4B4]/25 hover:bg-customblue hover:text-white rounded-[5px] '>Отменить</button>
        </div>
        <div className="rounded-b-2xl dark:bg-[#4F4F4F] flex justify-between gap-[20px] shadow-md shadow-[#B4B4B4]/25 py-5 px-[19px]">
            <div className="bg-customblue/20 dark:bg-[#2E3035] px-[7px] py-[12px] rounded-[10px] w-full">
                <h1 className='font-medium text-[18px]'>Сегодня</h1>
                <p className='text-[#939CB0] font-normal text-[14px] mb-3 mt-[7px] leading-[17.07px]'>28 авг</p>
                <img src={rain_sun} alt="" />
                <p className='font-medium text-[18px] mt-[13px] leading-[21.94px]'>+18°</p>
                <p className='text-[#939CB0] font-normal text-[13px] leading-[15.85px]'>+15°</p>
                <p className='text-[#939CB0] font-normal text-[13px]'>Облачно</p>
            </div>
            <div className="bg-customblue/20 dark:bg-[#2E3035] px-[7px] py-[12px] rounded-[10px] w-full">
                <h1 className='font-medium text-[18px]'>Завтра</h1>
                <p className='text-[#939CB0] font-normal text-[14px] mb-3 mt-[7px] leading-[17.07px]'>28 авг</p>
                <img src={small_rain} alt="" />
                <p className='font-medium text-[18px] mt-[13px] leading-[21.94px]'>+15°</p>
                <p className='text-[#939CB0] font-normal text-[13px] leading-[15.85px]'>+10°</p>
                <p className='text-[#939CB0] font-normal text-[13px]'>Небольшой дождь</p>
            </div>
            <div className="bg-customblue/20 dark:bg-[#2E3035] px-[7px] py-[12px] rounded-[10px] w-full">
                <h1 className='font-medium text-[18px]'>Пн</h1>
                <p className='text-[#939CB0] font-normal text-[14px] mb-3 mt-[7px] leading-[17.07px]'>28 авг</p>
                <img src={rain_sun} alt="" />
                <p className='font-medium text-[18px] mt-[13px] leading-[21.94px]'>+18°</p>
                <p className='text-[#939CB0] font-normal text-[13px] leading-[15.85px]'>+15°</p>
                <p className='text-[#939CB0] font-normal text-[13px]'>Облачно</p>
            </div>
            <div className="bg-customblue/20 dark:bg-[#2E3035] px-[7px] py-[12px] rounded-[10px] w-full">
                <h1 className='font-medium text-[18px]'>Вт</h1>
                <p className='text-[#939CB0] font-normal text-[14px] mb-3 mt-[7px] leading-[17.07px]'>28 авг</p>
                <img src={rain_sun} alt="" />
                <p className='font-medium text-[18px] mt-[13px] leading-[21.94px]'>+18°</p>
                <p className='text-[#939CB0] font-normal text-[13px] leading-[15.85px]'>+15°</p>
                <p className='text-[#939CB0] font-normal text-[13px]'>Облачно</p>
            </div>
            <div className="bg-customblue/20 dark:bg-[#2E3035] px-[7px] py-[12px] rounded-[10px] w-full">
                <h1 className='font-medium text-[18px]'>Ср</h1>
                <p className='text-[#939CB0] font-normal text-[14px] mb-3 mt-[7px] leading-[17.07px]'>28 авг</p>
                <img src={rain_sun} alt="" />
                <p className='font-medium text-[18px] mt-[13px] leading-[21.94px]'>+18°</p>
                <p className='text-[#939CB0] font-normal text-[13px] leading-[15.85px]'>+15°</p>
                <p className='text-[#939CB0] font-normal text-[13px]'>Облачно</p>
            </div>
            <div className="bg-customblue/20 dark:bg-[#2E3035] px-[7px] py-[12px] rounded-[10px] w-full">
                <h1 className='font-medium text-[18px]'>Чт</h1>
                <p className='text-[#939CB0] font-normal text-[14px] mb-3 mt-[7px] leading-[17.07px]'>28 авг</p>
                <img src={rain_sun} alt="" />
                <p className='font-medium text-[18px] mt-[13px] leading-[21.94px]'>+18°</p>
                <p className='text-[#939CB0] font-normal text-[13px] leading-[15.85px]'>+15°</p>
                <p className='text-[#939CB0] font-normal text-[13px]'>Облачно</p>
            </div>
            <div className="bg-customblue/20 dark:bg-[#2E3035] px-[7px] py-[12px] rounded-[10px] w-full">
                <h1 className='font-medium text-[18px]'>Пт</h1>
                <p className='text-[#939CB0] font-normal text-[14px] mb-3 mt-[7px] leading-[17.07px]'>28 авг</p>
                <img src={rain_sun} alt="" />
                <p className='font-medium text-[18px] mt-[13px] leading-[21.94px]'>+18°</p>
                <p className='text-[#939CB0] font-normal text-[13px] leading-[15.85px]'>+15°</p>
                <p className='text-[#939CB0] font-normal text-[13px]'>Облачно</p>
            </div>
        </div>
    </div>
  )
}
