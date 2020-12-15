import React from 'react'
import { Link} from "react-router-dom";
import '../../styles.scss';

const NavBar = () => {
    return (
        <div className="nav-bar">
            <Link style={{ textDecoration: 'none' }} to="/"><h1 >devJobs</h1></Link>
            <p>toggle</p>
        </div>
    )
}

export default NavBar;
