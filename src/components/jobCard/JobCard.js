import React from 'react'
import '../../styles.scss';

const JobCard = ({job}) => {
    return (
        <div className="card">
            <div className="img-container"><img src={`${job.company_logo}`}></img></div>
            
            <div className="job-type">{job.type}</div>
            <div className="job-title">{job.title}</div>
            <div className="job-location">{job.location}</div>


        </div>
    )
}

export default JobCard;
