import React, {useState, useEffect} from 'react'
import { Link } from "react-router-dom";
import '../../styles.scss';
import { faMoon, faSun } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const NavBar = () => {
    const [themeState, setThemeState] = useState(false);

    const handleChange = () => {
        setThemeState(!themeState);
        if (themeState) {
          localStorage.setItem('Theme', 'dark');
          document.body.classList.add('dark-mode');
        } else {
          localStorage.setItem('Theme', 'light');
          document.body.classList.remove('dark-mode');
        }
      }
      useEffect(() => {
        const getTheme = localStorage.getItem('Theme');
        if (getTheme === 'dark') return  document.body.classList.add('dark-mode');
      })



    return (
        <div className="nav-bar">
            <Link style={{ textDecoration: 'none' }} to="/"><h1 >devJobs</h1></Link>
            <p onClick={handleChange} className="dark-mode">
                {themeState ? (<FontAwesomeIcon icon={faMoon} />) : (<FontAwesomeIcon icon={faSun} />)}
                
            </p>
        </div>
    )
}

export default NavBar;
