import React, { useContext } from 'react'
import { JobContext } from '../contexts/JobContext'

export const Sidebar = () => {
    const { sidebarToggle,isSidBarOpen } = useContext(JobContext)
    return (
        <div className={`w-[100vw]  bg-[#7e7e7f53] fixed h-screen top-0 right-0 flex z-[60] ${isSidBarOpen ? 'visible' : 'hidden'}`}>
            <div onClick={sidebarToggle} className='h-full flex-1'>

            </div>
            <div className='w-1/2 max-w-[350px] bg-white h-full flex flex-col gap-2 text-black text-start px-4 py-10'>

                <i onClick={sidebarToggle} class="fa-solid fa-x text-[#A128FF]  cursor-pointer mb-4 "></i>
                <p className='text-[#303030] font-semibold text-base   hover:text-black   cursor-pointer' >Home</p>
                <p className='text-[#303030] font-semibold text-base  hover:text-black  cursor-pointer  ' >Find Job</p>
                <p className='text-[#303030] font-semibold text-base  hover:text-black   cursor-pointer' >Find Talents</p>
                <p className='text-[#303030] font-semibold text-base  hover:text-black  cursor-pointer  '>Abut Us</p>
                <p className='text-[#303030] font-semibold text-base  hover:text-blac  cursor-pointerk '>Testimonials</p>

            </div>

        </div>
    )
}
