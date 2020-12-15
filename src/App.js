import React, {} from 'react'
import MainPage from './components/mainPage/MainPage';
import NavBar from './components/navBar/NavBar'
import {

  Switch,
  Route,

} from "react-router-dom";
import SearchBar from './components/searchBar/SearchBar';
import { connect } from "react-redux";
import JobPage from './components/jobPage/JobPage';
import './styles.scss';
function App({jobs}) {

  // useEffect(() => {
  //   document.body.classList.add('dark-mode');
  // },[])
  return (
    <div className="App">
      <NavBar />
      <SearchBar/>
      <Switch>
        <Route exact path="/">
          <MainPage />
        </Route>
        <Route
    
        path="/:id"
        render={(routeProps) => {
          return <JobPage match={routeProps.match} jobs={jobs} />;
        }}
      />
      </Switch>

    </div>
  );
}

const mapStateToProps = (state) => ({
  jobs: state.jobs.jobs,
});

export default connect(mapStateToProps, {  })(App);
