import React, { useEffect, useState, useRef } from "react";
import { connect } from "react-redux";
import getJobs from "../../state/actions/getJobs";
import JobCard from "../jobCard/JobCard";
import { Link, Route } from "react-router-dom";
import "../../styles.scss";

const MainPage = ({ status, jobs, getJobs }) => {
  const [isBottom, setIsBottom] = useState(false);
  const pageNumber = useRef(1);
 
  //FETCHING DATA ONCE PAGE RENDERS
  useEffect(() => {
    getJobs({
      page: pageNumber.current,
      description: "",
      location: "",
      type: "true",
    });
  }, []);

  //FUNCTION TO HANDLE SCROLLING EVENT ONCE PAGE HITS BOTTOM
  function handleScroll() {
    const scrollTop =
      (document.documentElement && document.documentElement.scrollTop) ||
      document.body.scrollTop;
    const scrollHeight =
      (document.documentElement && document.documentElement.scrollHeight) ||
      document.body.scrollHeight;
    if (scrollTop + window.innerHeight + 50 >= scrollHeight) {
      setIsBottom(true);
      pageNumber.current = pageNumber.current + 1;
    }
  }
  //FETCHING DATA ONCE THE PAGE HITS BOTTOM
  const addJobs = () => {
    if (jobs.length !== 0) {
      getJobs({
        page: pageNumber.current,
        description: "",
        location: "",
        type: "true",
      });

      setIsBottom(false);
    }
  };
  useEffect(() => {
    if (isBottom) {
      addJobs();
    }
  }, [isBottom]);

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div>
      <div className="main">
        {jobs.map((job) => (
          <Link style={{ textDecoration: "none" }} to={`/${job.id}`}>
            <JobCard key={job.id} job={job} />
          </Link>
        ))}
      </div>
      {status === "loading" && <p>loading jobs...</p>}
      {jobs.length === 0 && status !== "loading" && <p>No jobs found</p>}
    </div>
  );
};

const mapStateToProps = (state) => ({
  jobs: state.jobs.jobs,
  status: state.jobs.getJobsStatus,
});

export default connect(mapStateToProps, { getJobs })(MainPage);
