import React, { useEffect, useState } from "react";
import { connect } from "react-redux";
import getJobs from "../../state/actions/getJobs";
import JobCard from "../jobCard/JobCard";
import { Link, Route } from "react-router-dom";
import '../../styles.scss';

const MainPage = ({ status, jobs, getJobs }) => {
  const [isBottom, setIsBottom] = useState(false);
  const [allJobs, setAlljobs] = useState(jobs)

  useEffect(() => {
    getJobs({ page: 0, description: "", location: "", type: "true" });
    setAlljobs(jobs)
    setIsBottom(false);
  }, []);
  
  function handleScroll() {
    const scrollTop =
      (document.documentElement && document.documentElement.scrollTop) ||
      document.body.scrollTop;
    const scrollHeight =
      (document.documentElement && document.documentElement.scrollHeight) ||
      document.body.scrollHeight;
    if (scrollTop + window.innerHeight + 50 >= scrollHeight) {
      setIsBottom(true);
    }
  }

  useEffect(() => {
    if (isBottom) {
      getJobs({ page: 2, description: "", location: "", type: "true" });
      
    }
    setAlljobs(allJobs.concat(jobs))
    // setIsBottom(false);
  }, [isBottom]);

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

console.log(jobs)
  return (
    <div>
        <div className="main">
      {jobs.map((job) => (
          
        <Link style={{ textDecoration: 'none' }} to={`/${job.id}`}>
          <JobCard key={job.id} job={job} />
        </Link>
      ))}
      </div>
      {status === "loading" && <p>loading more jobs...</p>}
     
    </div>
  );
};

const mapStateToProps = (state) => ({
  jobs: state.jobs.jobs,
  status: state.jobs.getJobsStatus,
});

export default connect(mapStateToProps, { getJobs })(MainPage);
