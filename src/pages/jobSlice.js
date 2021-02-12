import { createSlice } from "@reduxjs/toolkit";
import { getJobs, setJob } from "../api/dispatchApi";

const initialState = {
  jobs: [],
  isLoading: false,
  error: null,
  isSaving: false,
};

const jobs = createSlice({
  name: "jobs",
  initialState: initialState,
  reducers: {
    getJobsSuccess(state, action) {
      console.log("action", action);
      state.jobs = action.payload.jobs;
      state.isLoading = false;
      state.error = null;
    },
    getJobsStart(state, action) {
      state.isLoading = true;
    },
    getJobsFailure(state, action) {
      state.isLoading = false;
      state.error = action.payload;
    },
    setJobUI(state, action) {
      state.jobs.push(action.payload);
    },
    setJobStart(state, action) {
      state.isSaving = true;
    },
    setJobFailure(state, action) {
      state.isSaving = false;
      state.error = action.payload;
    },
    setJobSuccess(state, action) {
      // state.jobs.push(action.payload.job)
      const array = state.jobs.map((job) => {
        if (job._id === "fakeID") {
          return action.payload.job;
        } else {
          return job;
        }
      });
      state.jobs = array;
      state.isSaving = false;
      state.error = null;
    },
    
  },
});

export const {
  getJobsStart,
  getJobsSuccess,
  getJobsFailure,
  setJobUI,
  setJobStart,
  setJobFailure,
  setJobSuccess,
} = jobs.actions;

export default jobs.reducer;

export const fetchJobs = () => async (dispatch) => {
  try {
    dispatch(getJobsStart());
    const jobs = await getJobs();
    dispatch(getJobsSuccess(jobs));
  } catch (error) {
    dispatch(getJobsFailure(error.toString()));
  }
};

export const saveJob = (
  quantity,
  position,
  qualifications,
  duration,
  location
) => async (dispatch) => {
  try {
    dispatch(setJobStart());
    dispatch(setJobSuccess(jobs));
  } catch (error) {
    dispatch(setJobFailure(error.toString()));
  }
};
