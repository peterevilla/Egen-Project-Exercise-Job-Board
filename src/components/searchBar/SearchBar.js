import React, {useState} from 'react'
import { connect } from 'react-redux';
import getJobs from '../../state/actions/getJobs'

const SearchBar = ({getJobs, status}) => {
    const [ params, setParams] = useState({page: 0, description: "", location: "", type: "true"})

    const searchHandle = e => {
        setParams({ ...params, [e.target.name]: e.target.value});
        
      };
      const submitHandler = (e) => {
          e.preventDefault()
          getJobs(params)
        
      };
    return (
        <form  onSubmit={submitHandler}> 
            <input
            type="text"
            name="description"
            value={params.description}
            placeholder="Filter by title, companies, description..."
            onChange={searchHandle} 

            ></input>
            <input
            type="text"
             name="location"
             value={params.location}
             placeholder="Location"
             onChange={searchHandle} 
            ></input>
            {/* <input type="radio"
            checked={params.type.value === "true"}
            value={params.type}
            placeholder="Full time only"
            onChange={searchHandle}
            ></input> */}
            <button type="submit" >Search</button>
            
        </form>
    )
}

const mapStateToProps = state => ({
    status: state.jobs.getJobsStatus, 
  });
  
  export default connect(mapStateToProps, { getJobs})(SearchBar);
