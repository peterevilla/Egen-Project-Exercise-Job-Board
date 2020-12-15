import React from 'react'
import './App.scss';
import MainPage from './components/mainPage/MainPage';
import NavBar from './components/navBar/NavBar'
import {

  Switch,
  Route,

} from "react-router-dom";
import SearchBar from './components/searchBar/SearchBar';
function App() {
  return (
    <div className="App">
      <NavBar />
      <SearchBar/>
      <Switch>
        <Route path="/">
          <MainPage />
        </Route>
       
      </Switch>

    </div>
  );
}

export default App;
