import axios from 'axios'
export const GET_JOBS_START = 'GET_JOBS_START';
export const GET_JOBS_SUCCESS = 'GET_JOBS_SUCCESS';
export const GET_JOBS_ERROR = 'GET_JOBS_ERROR';


const getJobs = ({page}) => dispatch => {
  
    dispatch({ type: GET_JOBS_START });
    //I am using a random API (actually mine) to test the action and see if I am able to connect redux to components
    setTimeout(() => {

        axios
        .get(
            `https://jobs.github.com/positions.json?page=${page}&description=&search=code`
        )
          .then(response => {
           
            dispatch({ type: GET_JOBS_SUCCESS, payload: response.data });
          })
          .catch(err => {
            dispatch({ type: GET_JOBS_ERROR, payload: err });
          });

        
    },1000)
  
  };

  export default getJobs;