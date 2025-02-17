import React, { useContext } from 'react'
import JobCard from '../components/JobCard.jsx'


import { JobContext } from '../contexts/JobContext.jsx'

const AllJobs = () => {




    const { jobs, filteredJobs } = useContext(JobContext);

    return (
        <div className='flex gap-4 flex-wrap py-[51px] w-full max-w-[1321px] m-auto justify-center z-0'>
            {
                filteredJobs?.map((job) => <JobCard job={job} />


                )
            }



        </div>
    )
}

export default AllJobs