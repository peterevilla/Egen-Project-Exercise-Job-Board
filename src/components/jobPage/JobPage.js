import React from 'react'
import '../../styles.scss';


const JobPage = (props) => {
    const paramJobId = props.match.params.id;

    const job = props.jobs.find((job) => {
      return job.id === paramJobId;
    });
    return (
        <div className="job-page">
            <div className="head-container">
            <div className="image"><img src={`${job.company_logo}`}></img></div>
            <div className="company-name">{job.company}</div>
            <a style={{ textDecoration: 'none' }} href={`${job.company_url}`} className="company-site">Company site</a>
            </div>

            <div className="description-container">
            <div dangerouslySetInnerHTML={{__html: `${job.description}`}} />
            <div dangerouslySetInnerHTML={{__html: `${job.how_to_apply}`}} />
            </div>
        </div>
    )
}

export default JobPage;
