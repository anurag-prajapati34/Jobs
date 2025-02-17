import React from 'react'
import person from '../assets/icons/person.svg'
import layer from '../assets/icons/layer.svg'
import bulding from '../assets/icons/building.svg'


const JobCard = ({ job }) => {


    const COMPANY_LOGO_API = import.meta.env.VITE_COMPANY_LOGO_API;


    const getTimeAgo = (date) => {
        const now = new Date();
        const jobDate = new Date(date);
        const diffMs = now - jobDate;
        const diffMinutes = Math.floor(diffMs / (1000 * 60));
        const diffHours = Math.floor(diffMinutes / 60);
        const diffDays = Math.floor(diffHours / 24);

        if (diffMinutes < 60) {
            return "Few minutes ago";
        } else if (diffHours < 3) {
            return "Few hours ago";
        } else if (diffHours < 24) {
            return `${diffHours}h Ago`;
        } else if (diffDays === 1) {
            return "Yesterday";
        } else {
            return `${diffDays}d Ago`;
        }
    };



    return (


        <div className='flex-1 min-w-[300px] max-w-[316px] h-[360px] bg-white drop-shadow-sm p-4 rounded-[12px]  '>

            <div className='flex items-start justify-between'>

                <div className='w-[82px] aspect-square rounded-[13.2px] bg-gradient-to-t from-[#F1F1F1] to-[#FEFEFD] drop-shadow-sm flex items-center justify-center '>
                    <img className='rounded-full' src={`${COMPANY_LOGO_API}/${job?.company.toLowerCase()}.com`} />

                </div>
                <span className='text-sm px-[10px] py-[7px] rounded-[10px] text-black bg-[#B0D9FF] font-semibold'>
                    {getTimeAgo(job?.createdAt)}
                </span>
            </div>

            <h1 className='text-xl font-bold mt-[19px] text-start'>
                {job?.title}
            </h1>
            <div className='w-full flex items-center justify-between mt-4'>
                <span className='flex gap-1 text-[#5A5A5A] font-medium'>
                    <img src={person} />
                    <p>{`${job?.experience.min}-${job?.experience?.max} Yr Exp`}</p>

                </span>
                <span className='flex gap-1 text-[#5A5A5A] font-medium'>
                    <img src={bulding} />
                    <p>{job?.location}</p>

                </span>
                <span className='flex gap-1 text-[#5A5A5A] font-medium'>
                    <img src={layer} />
                    <p>{job.salary.max / 100000}LPA</p>

                </span>

            </div>


            <ul className='text-start mt-5 list-disc list-inside line-clamp-4'>
                <li>
                    {
                        job?.jobDescription
                    }
                </li>

            </ul>

            <button className='w-full mt-5 bg-[#00AAFF] py-3 px-[10px] rounded-[10px] text-white text-xl font-semibold '>
                Apply Now
            </button>
        </div>


    )
}

export default JobCard