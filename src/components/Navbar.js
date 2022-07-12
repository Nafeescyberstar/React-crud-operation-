import React from 'react'

function Navbar(props) {
    return (
        <div>
            <nav className="navbar navbar-inverse">
                <div className="container-fluid">
                    <div className="navbar-header">
                        <a className="navbar-brand" href="#">Admin Control</a>
                    </div>

                    <ul className="nav navbar-nav navbar-right">
                        <li ><a href="#" ><span ></span>{props.name}</a></li>
                        <li><a href="#"><span className="glyphicon glyphicon-user"></span> Sign Up</a></li>

                    </ul>
                </div>
            </nav>

        </div>
    )
}

export default Navbar
