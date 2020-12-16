import React, {useState} from 'react'
import { connect } from 'react-redux';
import getJobsSearch from '../../state/actions/fromSearch';
import getJobs from '../../state/actions/getJobs'
import '../../styles.scss';

const SearchBar = ({getJobsSearch, status}) => {
    const [ params, setParams] = useState({page: 0, description: "", location: "", type: "true"})


    const searchHandle = e => {
        setParams({ ...params, [e.target.name]: e.target.value});
        
      };
      const submitHandler = (e) => {
          e.preventDefault()
          getJobsSearch(params)
        
      };
    return (
        <form className="form-container"  onSubmit={submitHandler}> 
            <input
            type="text"
            name="description"
            value={params.description}
            placeholder="Filter by title, companies, description..."
            onChange={searchHandle}
            className="form"
          

            ></input>
            <input
            type="text"
             name="location"
             value={params.location}
             placeholder="Location"
             onChange={searchHandle} 
             className="form" 

            ></input>
            {/* <input type="radio"
            checked={params.type.value === "true"}
            value={params.type}
            placeholder="Full time only"
            onChange={searchHandle}
            ></input> */}
            <button className="search-btn"  type="submit" >Search</button>
            
        </form>
    )
}

const mapStateToProps = state => ({
    status: state.jobs.getJobsStatus, 
  });
  
  export default connect(mapStateToProps, { getJobsSearch})(SearchBar);
