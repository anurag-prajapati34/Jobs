import React, { useContext } from 'react'
import brandIcon from '../assets/icons/brandicon.svg'
import { JobContext } from '../contexts/JobContext.jsx'
import '../styles/Navbar.css'
import { Sidebar } from './Sidebar.jsx'
const Navbar = () => {
    const { handleApplyJobBtnClick, sidebarToggle} = useContext(JobContext)
    return (
        <div className='w-full'>
            <div className='w-full max-w-[890px]  h-[80px] border-[1px] border-[#FCFCFC] rounded-full drop-shadow  flex justify-between items-center px-[26px]  m-auto'>
                <img src={brandIcon} alt='Cybermind works' />

                <p className='text-[#303030] font-semibold text-base hide'>Home</p>
                <p className='text-[#303030] font-semibold text-base hide' >Find Job</p>
                <p className='text-[#303030] font-semibold text-base hide'>Find Talents</p>
                <p className='text-[#303030] font-semibold text-base hide'>Abut Us</p>
                <p className='text-[#303030] font-semibold text-base hide'>Testimonials</p>


                <span className='flex gap-2 items-center justify-between'>
                    <button onClick={handleApplyJobBtnClick} className='bg-gradient-to-t from-[#6100AD] to-[#A128FF] px-[24px] py-[8px] rounded-full text-white font-semibold text-base'>Create Jobs</button>

                    <i onClick={sidebarToggle} class="fa-solid fa-bars more-icon"></i>
                </span>



            </div>


        </div>
    )
}

export default Navbar