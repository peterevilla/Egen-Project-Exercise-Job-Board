import { requestStatus } from '../types/index';
import {
  GET_JOBS_START,
  GET_JOBS_SUCCESS,
  GET_JOBS_ERROR,
} from '../actions/getJobs';

const initialState = {
  jobs: [],
  getJobsStatus: requestStatus.ready,
};

const jobsReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_JOBS_START:
      return { ...state, getJobsStatus: requestStatus.loading };
    case GET_JOBS_SUCCESS:
      const newState = action.payload;
      return { jobs: newState, getJobsStatus: requestStatus.success };
    case GET_JOBS_ERROR:
      return { ...state, getJobsStatus: requestStatus.error };

    default:
      return state;
  }
};

export default jobsReducer;