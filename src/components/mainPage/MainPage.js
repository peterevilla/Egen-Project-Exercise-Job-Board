import React, {useEffect} from 'react'
import { connect } from 'react-redux';
import getJobs from '../../state/actions/getJobs'
import JobCard from '../jobCard/JobCard'
import {

    Link,
    Route,
  
  } from "react-router-dom";
  import JobPage from '../jobPage/JobPage'

const MainPage = ({status, jobs, getJobs}) => {

    useEffect(() => {
        getJobs(1, {description: "", location: "", type: "true"})
    },[])
    console.log(jobs)

    if(status === "loading") {
        return (
            <p>loading...</p>
        )
    }
    return (
        <div>
            {jobs.map(job => (
                <Link to={`/${job.id}`}><JobCard key={job.id} job={job}/></Link>
            ))}
             <Route
            path="/:id"
            render={(routeProps) => {
              return <JobPage match={routeProps.match} jobs={jobs} />;
            }}
          />
        </div>
    )
}

const mapStateToProps = state => ({
    jobs: state.jobs.jobs,
    status: state.jobs.getJobsStatus, 
  });
  
  export default connect(mapStateToProps, { getJobs})(MainPage);
