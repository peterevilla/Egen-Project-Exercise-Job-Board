import React from 'react'
import './App.scss';
import MainPage from './components/mainPage/MainPage';
import NavBar from './components/navBar/NavBar'
function App() {
  return (
    <div className="App">
      <NavBar/>
      <MainPage/>
    </div>
  );
}

export default App;
