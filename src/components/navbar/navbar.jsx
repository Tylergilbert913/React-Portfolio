import React from 'react';
import "./navbar.css";
import { Link } from "react-router-dom";
import logo from "./logo.png";

function Header() {
    return (
        <div className="navApp">
            <nav className="navbar">
                <div className="col-md-1"></div>
                <div className="col-md-3">
                    <span id="name" className="navbar-brand mb-0 h1">{logo}</span>
                </div>
                <div className="col-md-3">

                </div>
                <div className="col-md-1">
                    <Link to="/About">About Me</Link>
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
export default Header;



