import React from 'react';
import "./navbar.css";
import { Link } from "react-router-dom";
// import logo from "../../images/logo.png";

function Navbar() {
    return (
        <div className="navApp">
            <nav className="navbar">
                <div className="col-md-1"></div>
                <div className="col-md-3">
                    <span id="name" className="navbar-brand mb-0 h1 tyler">Tyler Gilbert</span>
                </div>
                <div className="col-md-3">

                </div>
                <div className="col-md-1">
                    <Link to="/Home">About Me</Link>
                </div>
                <div className="col-md-1">
                    <Link to="/Portfolio">Portfolio</Link>
                </div>
                <div className="col-md-1">
                    <Link to="/Contact">Contact</Link>
                </div>
                <div className="col-md-1"></div>
            </nav>

        </div>
    )
}
export default Navbar;



