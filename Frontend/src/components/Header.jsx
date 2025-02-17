import React from 'react'
import Navbar from './Navbar'
import Filterbar from './Filterbar'

const Header = () => {
    return (
        <div className='w-full  bg-white min-h-[214px] py-5 flex flex-col items-center justify-between drop-shadow-md'>

            <Navbar />

            <Filterbar />
        </div>
    )
}

export default Header