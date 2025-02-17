const mongoose = require("mongoose");
//Schema for jobs
const jobSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
  },
  company: {
    type: String,
    required: true,
  },
  location: {
    type: String,
    required: true,
  },
  jobType: {
    type: String,
    required: true,
  },
  salary: {
    min: {
      type: Number,
    },
    max: {
      type: Number,
    },
  },
  jobDescription: {
    type: String,
  },
  deadline:{
    type:Date
  },
  experience:{
    min:{
      type:Number,

    },
    max:{
      type:Number
    }
  }
},
{
    timestamps:true
}


);


const JobsModel=mongoose.model('jobs',jobSchema);
module.exports=JobsModel;
