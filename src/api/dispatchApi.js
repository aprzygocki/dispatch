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

// export async function deletePost (token, _id) {
//   const result = await axios.delete(`/api/post/${_id}`, {
//     headers: {
//       authorization: token
//     }
//   });
//   return {result: result.data}
// }



// export async function deleteComment(token, postId, commentId) {
//   const result = await axios.put(`/api/comment/${postId}/${commentId}`, {
//     headers: {
//       authorization: token
//     }
//   });
//   return {result: result.data}
// }