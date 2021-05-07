import React from 'react';
import "./style.css";
import { Link } from "react-router-dom";

function Header() {

<nav className="nav">
    <div className="container">
        <div className="logo">
            <a href="#">YourLogo</a>
        </div>
        <div className="main_list" id="mainListDiv">
            <ul>
                <li><a href="#">Home</a></li>
                <li><a href="#">About</a></li>
                <li><a href="#">my work</a></li>
                <li><a href="#">disegn</a></li>
                <li><a href="#">dcontact</a></li>
            </ul>
        </div>
        <div className="media_button">
            <button className="main_media_button" id="mediaButton">
                <span></span>
                <span></span>
                <span></span>
            </button>
        </div>
    </div>
</nav>
    
<section className="home"></section>


}



var mainListDiv = document.getElementById("mainListDiv"),
    mediaButton = document.getElementById("mediaButton");

mediaButton.onclick = function () {
    
    "use strict";
    
    mainListDiv.classList.toggle("show_list");
    mediaButton.classList.toggle("active");
    
};