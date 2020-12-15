import React from 'react'


const JobPage = (props) => {
    const paramJobId = props.match.params.id;

    const job = props.jobs.find((job) => {
      return job.id === paramJobId;
    });
    return (
        <div>
            {job.description}
        </div>
    )
}

export default JobPage;
