import React, { useContext } from 'react';
import searchIcon from '../assets/icons/searchIcon.svg';
import jobTypeIcon from '../assets/icons/jobTypeIcon.svg';
import locationIcon from '../assets/icons/Location.svg';
import SalarySlider from './SalarySlider';
import { JobContext } from '../contexts/JobContext';
import { locations } from '../assets/joblocations.js';
import { jobTypes } from '../assets/jobTypes.js';

const Filterbar = () => {
    const { handleSeach, handleJobLoationFilter, handleJobTypeFilter } = useContext(JobContext);

    return (
        <div className='w-full max-w-[1321px] flex flex-wrap  justify-between items-center bg-white p-4 rounded-lg  gap-4 divide-x-2'>

            {/* Search Input */}
            <span className='flex flex-1 min-w-[250px] text-[#686868] gap-4 items-center px-4  rounded-lg'>
                <img src={searchIcon} alt='Search' />
                <input
                    onChange={handleSeach}
                    placeholder='Search By Job Title, Role'
                    type='text'
                    name='search'
                    className='outline-none w-full p-2'
                />
            </span>

            {/* Location Filter */}
            <span className='flex flex-1 min-w-[200px] text-[#686868] gap-4 items-center px-4  rounded-lg'>
                <img src={locationIcon} alt='Location' />
                <select
                    onChange={handleJobLoationFilter}
                    className='w-full outline-none p-2 bg-transparent'
                >
                    <option value="All">All</option>
                    {locations?.map((location, index) => (
                        <option key={index}>{location}</option>
                    ))}
                </select>
            </span>

            {/* Job Type Filter */}
            <span className='flex flex-1 min-w-[200px] text-[#686868] gap-4 items-center px-4  rounded-lg'>
                <img src={jobTypeIcon} alt='Job Type' />
                <select
                    onChange={handleJobTypeFilter}
                    className='w-full outline-none p-2 bg-transparent'
                >
                    <option selected disabled hidden>Job Type</option>
                    <option value="All">All</option>
                    {jobTypes?.map((type, index) => (
                        <option key={index}>{type}</option>
                    ))}
                </select>
            </span>

            {/* Salary Slider */}
            <div className='flex-1 '>
                <SalarySlider />
            </div>
        </div>
    );
};

export default Filterbar;
