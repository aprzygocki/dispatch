import axios from "axios";

export async function getJobs() {
  const result = await axios.get("/api/jobboardpage");
  return {jobs: result.data}
}

export async function setJob(quantity, position, qualifications, duration, location) {
  const result = await axios.post("/api/supervisorpage", {
    quantity, position, qualifications, duration, location
  });
  return {job: result.data}
}
