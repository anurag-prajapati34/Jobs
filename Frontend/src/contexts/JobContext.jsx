import { createContext, useEffect, useState } from "react";

const JobContext = createContext();

const JobContextProvider = ({ children }) => {
    const SERVER_URL = import.meta.env.VITE_SERVER_URL;
    const [isJobListingPage, setIsJobListingPage] = useState(false);
    const [jobs, setJobs] = useState([]);
    const [filteredJobs, setFilteredJobs] = useState([]);
    const [isSidBarOpen, setIsSideBarOpen] = useState(false);

    //Toggles the Job listing form
    const handleApplyJobBtnClick = (e) => {
        if (e.target === e.currentTarget) {
            setIsJobListingPage(!isJobListingPage);
        }


    }
    //Fetch all jobs from server
    const getJobs = async () => {


        try {
            const respones = await fetch(`${SERVER_URL}/api/jobs`);
            const responseData = await respones.json();
            console.log("response data :", responseData);
            setJobs(responseData.jobs);
        } catch (err) {
            console.log("Error", err);
        }

    }


    //Add new jobs 
    const addJobs = async (jobDetails) => {
        console.log({ ...jobDetails })
        try {

            const response = await fetch(`${SERVER_URL}/api/jobs`, {
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },

                body: JSON.stringify({
                    ...jobDetails
                })

            })

            if ((await response).ok) {
                alert("Successfully Added")            }

        } catch (err) {
            console.log("Error:", err);
        }

    }



    //Handles Job Search
    const handleSeach = (e) => {

        const searchQuery = e.target.value.toLowerCase();

        const searchResult = jobs?.filter((job) => job?.title.toLowerCase().includes(searchQuery) || job?.company.toLowerCase().includes(searchQuery) || job?.location.toLowerCase().includes(searchQuery));

        setFilteredJobs(searchResult);

    }

    //Handls Location Filter

    const handleJobLoationFilter = (e) => {
        const preferedLocation = e.target.value.toLowerCase();

        if (preferedLocation === "all") {
            setFilteredJobs(jobs);
        } else {
            const result = jobs?.filter((job) => job?.location?.toLowerCase().includes(preferedLocation))
            setFilteredJobs(result);
        }
    }

    ///Handles Job Types Filter
    const handleJobTypeFilter = (e) => {
        const preferedJobType = e.target.value.toLowerCase();

        if (preferedJobType === "all") {
            setFilteredJobs(jobs);
        } else {
            const result = jobs?.filter((job) => job?.jobType?.toLowerCase().includes(preferedJobType))
            setFilteredJobs(result);
        }
    }

    ///Handles Salary Range selection
    const handleFilterBySalary = (minimum, maximum) => {

        const results = jobs.filter((job) => (job?.salary.max) / 12 > minimum && (job.salary.max) / 12 < maximum);
        setFilteredJobs(results)
    }

    //Toggles Sidebar
    const sidebarToggle = (e) => {
        if (e.target === e.currentTarget) {
            setIsSideBarOpen(!isSidBarOpen);
        }
    }

    useEffect(() => {
        getJobs();
    }, []);

    useEffect(() => {
        setFilteredJobs(jobs);
    }, [jobs])
    return <JobContext.Provider value={{

        handleApplyJobBtnClick,
        isJobListingPage,
        addJobs,
        jobs,
        filteredJobs,
        handleSeach,
        handleJobLoationFilter,
        handleJobTypeFilter,
        handleFilterBySalary,
        sidebarToggle,
        isSidBarOpen
    }}>
        {children}
    </JobContext.Provider>


}

export { JobContext, JobContextProvider }