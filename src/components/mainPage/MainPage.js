import React, { useEffect, useState } from "react";
import { connect } from "react-redux";
import getJobs from "../../state/actions/getJobs";
import JobCard from "../jobCard/JobCard";
import { Link, Route } from "react-router-dom";
import '../../styles.scss';

const MainPage = ({ status, jobs, getJobs }) => {
  const [isBottom, setIsBottom] = useState(false);
  const [pageNumber, setPageNumber] = useState(1)

  useEffect(() => {
    getJobs({ page: pageNumber, description: "", location: "", type: "true" });
    setPageNumber(pageNumber + 1)
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
    
      getJobs({ page: pageNumber, description: "", location: "", type: "true" });
      
    }
  }, [isBottom]);

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

console.log(pageNumber)
  return (
    <div>
        <div className="main">
      {jobs.map((job) => (
          
        <Link style={{ textDecoration: 'none' }} to={`/${job.id}`}>
          <JobCard key={job.id} job={job} />
        </Link>
      ))}
      </div>
      {status === "loading" && <p>loading jobs...</p>}
     
    </div>
  );
};

const mapStateToProps = (state) => ({
  jobs: state.jobs.jobs,
  status: state.jobs.getJobsStatus,
});

export default connect(mapStateToProps, { getJobs })(MainPage);
