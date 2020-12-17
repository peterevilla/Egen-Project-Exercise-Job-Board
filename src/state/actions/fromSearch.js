import axios from 'axios'
export const GET_JOBS_START = 'GET_JOBS_START';
export const GET_JOBS_SUCCESS = 'GET_JOBS_SUCCESS';
export const GET_JOBS_ERROR = 'GET_JOBS_ERROR';
export const GET_JOBS_SUCCESS_SEARCH = 'GET_JOBS_SUCCESS_SEARCH';


const getJobsSearch = (params) => dispatch => {

  
  
    dispatch({ type: GET_JOBS_START });
  
    setTimeout(() => {

        axios
        .get(
            `https://jobs.github.com/positions.json?page=${params.page}&description=${params.description}&location=${params.location}&lat=&long=&search=code`
        )
          .then(response => {
           
            dispatch({ type: GET_JOBS_SUCCESS_SEARCH, payload: response.data });
          })
          .catch(err => {
            dispatch({ type: GET_JOBS_ERROR, payload: err });
          });

        
    },1000)
  
  };

  export default getJobsSearch;