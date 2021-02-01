const { Schema, model } = require('mongoose');
const JobSchema = new Schema(
  {
    quantity: {
      type: String,
      required: true,
    },
    position: {
      type: String,
	    required: true,
    },
    qualifications: {
      type: String, 
      required: true,
    },
    duration: {
      type: String, 
      required: true,
    },
    location: {
      type: String, 
      required: true,
    },
  },  
);

const Job = model("Job", JobSchema);
module.exports = Job;