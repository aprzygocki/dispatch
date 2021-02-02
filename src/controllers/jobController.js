const db = require('../model/Jobs.js')
const mongoDb = require('mongodb')

const createJob = async (req, res) => {
  const {quantity, position, qualifications, duration, location}=req.body
  const result = await db.Jobs.create( {quantity, position, qualifications, duration, location})
  
  res.json(result);
};

const getAllJobs = async (req, res) => {
  console.log(req.body);
  const result = await db.Jobs.find({})
  res.json(result);
}

module.exports = {
  createJob,
  getAllJobs,
};