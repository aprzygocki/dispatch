const db = require('../model/Jobs.js')
const mongoDb = require('mongodb')

const createJob = async (req, res) => {
  const {quantity, position, qualifications, duration, location}=req.body
  const result = await db.Jobs.create( {quantity, position, qualifications, duration, location})
  // await db.User.findByIdAndUpdate(req.user._id, { $push: { jobs: result._id }})
  // const jobResult = await db.Jobs.findById(result._id).populate('author', 'username')
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