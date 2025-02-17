
const express =require('express');
const { getJobs, addJobs } = require("../controllers/jobsControllers");

const router =express.Router();

router.get('/',getJobs);
router.post('/',addJobs);


module.exports=router;