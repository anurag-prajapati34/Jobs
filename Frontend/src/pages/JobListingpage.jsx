import React, { useContext, useState } from 'react'
import { JobContext } from '../contexts/JobContext.jsx'
import updown_arrow from '../assets/icons/updown_arrow.svg'
import calander from '../assets/icons/calander.svg'
import { locations } from '../assets/joblocations.js'
import { jobTypes } from '../assets/jobTypes.js'
const JobListingpage = () => {
    const { addJobs } = useContext(JobContext);
    const [jobDetails, setJobDetails] = useState({

        title: '',
        company: '',
        salary: {
            min: '',
            max: '',
        },
        location: '',
        jobType: '',
        jobDescription: '',
        deadline: '',
        experience:{
            min:'',
            max:''
        }


    })

    const handleJobDetails = (e) => {
        const { name, value } = e.target;
        console.log("job details :", jobDetails);
        if (name.includes('.')) {
            const [parent, child] = name.split('.');
            setJobDetails((prev) => ({
                ...prev, [parent]: {

                    ...prev[parent], [child]: value
                }
            }))
        } else {
            setJobDetails({ ...jobDetails, [name]: value });
        }


    }

    const handleSubmit = (e) => {
        e.preventDefault();
        const { title, company, salary, location, jobDescription, jobType, deadline ,experience} = jobDetails;
        if (title && company && salary && location && jobDescription && jobType && salary.min && salary.max && deadline&&experience.min&&experience.max) {
            addJobs(jobDetails);
        } else {
            alert("Please submit all fields");
        }

    }
    const { isJobListingPage, handleApplyJobBtnClick } = useContext(JobContext);
    return (
        <div onClick={handleApplyJobBtnClick} className={`bg-[#7e7e7f53] w-full fixed top-0 left-0 h-screen overflow-y-auto flex items-center justify-center p-4 ${isJobListingPage ? 'visible' : 'hidden'}`}>

         
            <div on className='md:w-[848px] w-[90vw] max-h-[90vh] overflow-y-auto rounded-[16px] drop-shadow-sm bg-white z-10 p-4 md:p-10'>

                <h1 className='font-bold text-2xl'>Create Job Opening</h1>
                <form onSubmit={handleSubmit} className='w-full flex flex-col gap-2 md:gap-4 mt-5'>
                    <div className='flex md:flex-nowrap flex-wrap w-full justify-between items-center gap-4'>
                        <div className='text-start w-full md:w-1/2'>
                            <label htmlFor='title ' className='text-xl font-semibold text-[#636363] mb-[6px]'>
                                Job Title
                            </label>
                            <input onChange={handleJobDetails} className='border-[1px] border-[#222222] rounded-[10px] p-[12px] w-full h-[58px] ' placeholder='Full Stack Developer , Frontend Developer' id='title' name='title' type='text' alt='job title' />
                        </div>
                        <div className='text-start  w-full md:w-1/2'>
                            <label htmlFor='company' className='text-xl font-semibold text-[#636363] mb-[6px]'>
                                Company Name
                            </label>
                            <input onChange={handleJobDetails} className='border-[1px] border-[#222222] rounded-[10px] p-[12px] w-full h-[58px]' placeholder='Amazon, Microsoft, Swiggy' id='company' name='company' type='text' alt='Company Name' />
                        </div>
                    </div>
                    <div className='flex flex-wrap md:flex-nowrap w-full justify-between items-center gap-4'>
                        <div className='text-start  w-full md:w-1/2'>
                            <label htmlFor='location' className='text-xl font-semibold text-[#636363] mb-[6px]'>
                                Location
                            </label>
                            <select onChange={handleJobDetails} className='border-[1px] border-[#222222] rounded-[10px] p-[12px] w-full h-[58px]' id='location' name='location' type='text' alt='job location' >
                                <option selected disabled hidden >Job Location</option>
                                {
                                    locations?.map((location) => <option>{location}</option>)
                                }
                            </select>
                        </div>
                        <div className='text-start w-full md:w-1/2'>
                            <label htmlFor='job-type' className='text-xl font-semibold text-[#636363] mb-[6px]'>
                                Job Type
                            </label>
                            <select onChange={handleJobDetails} className='border-[1px] border-[#222222] rounded-[10px] p-[12px] w-full h-[58px]' id='jobType' name='jobType' type='text' alt='job type' >

                                <option selected disabled hidden>Job Type</option>

                                {
                                    jobTypes.map((type) => <option>{type}</option>)
                                }
                            </select>
                        </div>
                    </div>

                    {/** */}
                    <div className='flex flex-wrap md:flex-nowrap w-full justify-between items-center gap-4'>
                        <div className='text-start  w-full md:w-1/2'>
                            <label htmlFor='salary' className='text-xl font-semibold text-[#636363] mb-[6px]'>
                                Salary Range
                            </label>
                            <span id='salary' className='w-full flex gap-2 items-center justify-between'>

                                <span className='flex felx-1 gap-1 items-center border-[1px] border-[#222222] rounded-[10px] p-[12px]  h-[58px] overflow-hidden'>
                                    <img src={updown_arrow} />
                                    <input onChange={handleJobDetails} className='outline-none  h-full' placeholder={'₹12,00,000'} id='salary.min' name='salary.min' type='number' alt='salary-min' />
                                </span>


                                <span className='flex felx-1 gap-1 items-center border-[1px] border-[#222222] rounded-[10px] p-[12px]  h-[58px] overflow-hidden'>
                                    <img src={updown_arrow} />
                                    <input onChange={handleJobDetails} className='outline-none  h-full' placeholder={'₹12,00,000'} id='salary.max' name='salary.max' type='number' alt='salary-max' />
                                </span>


                            </span>
                        </div>
                        <div className='text-start  w-full md:w-1/2'>
                            <label htmlFor='deadline' className='text-xl font-semibold text-[#636363] mb-[6px]'>
                                Application Deadline
                            </label>
                            <input onChange={handleJobDetails} className='border-[1px] border-[#222222] rounded-[10px] p-[12px] w-full h-[58px]' placeholder='01-01-2025' id='deadline' name='deadline' type='date' alt='deadline' />
                        </div>
                    </div>
                    <div className='text-start  w-full '>
                            <label htmlFor='salary' className='text-xl font-semibold text-[#636363] mb-[6px]'>
                               Experience
                            </label>
                            <span id='experience' className='w-full flex gap-2 items-center justify-between '>

                                <span className='flex w-full md:w-1/2 gap-1 items-center border-[1px] border-[#222222] rounded-[10px] p-[12px]  h-[58px] overflow-hidden '>
                                    <img src={updown_arrow} />
                                    <input onChange={handleJobDetails} className='outline-none w-full h-full' placeholder={'3 '} id='experience.min' name='experience.min' type='number' alt='experience-min' />
                                </span>


                                <span className='flex w-full md:w-1/2 gap-1 items-center border-[1px] border-[#222222] rounded-[10px] p-[12px]  h-[58px] overflow-hidden'>
                                    <img src={updown_arrow} />
                                    <input onChange={handleJobDetails} className='outline-none  w-full h-full' placeholder={'6'} id='experience.max' name='experience.max' type='number' alt='experience-max' />
                                </span>


                            </span>
                        </div>

                    <div className='text-start w-full'>
                        <label htmlFor='company' className='text-xl font-semibold text-[#636363] mb-[6px]'>
                            Job Description
                        </label>
                        <textarea onChange={handleJobDetails} className='border-[1px] border-[#222222] rounded-[10px] p-[12px] w-full h-[100px] max-h-[100px]' placeholder='Please share a description to let the candidate know more about the job role' id='jobDescription' name='jobDescription' >

                        </textarea>
                    </div>

                    <div className='w-full flex flex-wrap  gap-2 justify-between items-center '>
                        <button type='button' className=' h-[59px] border-[1.5px] border-[#222222] rounded-[10px] min-w-[207px] py-[16px] text-xl font-semibold text-black flex-1 sm:flex-none'>
                            Save Draft
                        </button>
                        <button type='submit' className='h-[59px] bg-[#00AAFF] rounded-[10px] px-[60px]  min-w-[207px] text-xl font-semibold text-white flex-1 sm:flex-none'>
                            Publish
                        </button>
                    </div>
                </form>

            </div>


        </div>
    )
}

export default JobListingpage