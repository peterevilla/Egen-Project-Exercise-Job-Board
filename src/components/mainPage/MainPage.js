import React, {useEffect} from 'react'
import { connect } from 'react-redux';
import getJobs from '../../state/actions/getJobs'

const MainPage = ({status, jobs, getJobs}) => {

    useEffect(() => {
        getJobs()
    },[])
    console.log(jobs)
    return (
        <div>
            
        </div>
    )
}

const mapStateToProps = state => ({
    jobs: state.jobs.jobs,
    status: state.jobs.getJobsStatus, 
  });
  
  export default connect(mapStateToProps, { getJobs})(MainPage);
