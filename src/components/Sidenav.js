import React from 'react'
import { Link } from 'react-router-dom';
import './sidenav.css';
import {useLocation} from "react-router-dom";
function Sidenav() {
    const location = useLocation();
    const { pathname } = location;
    const splitLocation = pathname.split("/");
    return (

        <div className="sidebar">
            <Link to=""  className={splitLocation[1]=== "" ?"active":"" }>Home</Link>
            <Link to="/Create" className={splitLocation[1]==="Create" ? "active":""}>Add New User</Link>
        </div>

    )
}

export default Sidenav
