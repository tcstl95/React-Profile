import React from "react";
import {Routes} from "react-router-dom";
// import Navigation from "./Navigation";
import About from "./About";
import Project from "./Project";
import Contact from "./Contact";



const Header = () => {
    return (
        <header>
            <h1>Tom Carlson</h1>
        <div className="header section" id="header">
                    <Routes path="/about" element={<About/>} />
                    <Routes path="/project" element={<Project/>} />
                    <Routes path="/contact" element={<Contact/>} />
        </div>
        </header>
                
    )
}

export default Header