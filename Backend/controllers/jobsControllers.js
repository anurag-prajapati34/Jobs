const JobsModel = require("../models/jobsModel");

//handles adding jobs
const addJobs=async (req,res)=>{

    console.log("request to add job")
    console.log(req.body);
    try{
        const {title,company,salary,jobDescription,jobType,location,deadline,experience}=req.body;

        

        const newJob=new JobsModel({
            title,
            company,
            salary,
            jobDescription,
            deadline,
            location,
            jobType,
            experience
        })
        await newJob.save();

        console.log("Succesfully added",newJob)
      return res.status(201).json(newJob);
    }
    catch(error){

        console.log("Error adding job ->",error);

        res.status(5000).json("Error",error);
    }
    


}


//provide listed jobs
const getJobs=async (req,res)=>{


    try{

        const jobs=await JobsModel.find();

        return res.status(200).json({"jobs":jobs});
    }catch(error){
        console.log("Error geting job->",error);
        return res.status(500).json({"Error":error});
    }

}

module.exports={addJobs,getJobs}