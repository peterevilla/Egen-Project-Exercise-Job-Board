import React, {useState} from 'react'
import { connect } from 'react-redux';
import getJobsSearch from '../../state/actions/fromSearch';
import useGeoLocation from '../../hooks/useGeoLocation'
import getJobs from '../../state/actions/getJobs'
import { faLocationArrow } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import '../../styles.scss';

const SearchBar = ({getJobsSearch, status}) => {
    const [ params, setParams] = useState({page: 0, description: "", location: "", type: false})
    const location = useGeoLocation()
    console.log("location", location.coordinates)


    const searchHandle = e => {
        setParams({ ...params, [e.target.name]: e.target.value});
        
      };
      const submitHandler = (e) => {
          e.preventDefault()
          getJobsSearch(params)
        
      };

      const handleCheck = e => {
          setParams({...params, type: e.target.checked})
      }

      console.log(params)
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

            >
                
            </input>
    <div className="location-icon"><FontAwesomeIcon icon={faLocationArrow} /></div>
            
            <label className="check"  htmlFor="check">Full time only</label>
            <input type="checkbox"
            checked={params.type}
            id="check"
            onChange={handleCheck}
            className="check-box"
            ></input>
            <button className="search-btn"  type="submit" >Search</button>
            
        </form>
    )
}

const mapStateToProps = state => ({
    status: state.jobs.getJobsStatus, 
  });
  
  export default connect(mapStateToProps, { getJobsSearch})(SearchBar);
