import React, {Component}from "react";
import {Route, HashRouter, Routes} from "react-router-dom";
import Navigation from "./Navigation";
import About from "./About";
import Project from "./Project";
import Contact from "./Contact";


// Header component

class Header extends Component {
    render (){
        return (
        <HashRouter>
        <header>
        <h1>Thomas Fredrick Carlson</h1>
        <img src="https://avatars.githubusercontent.com/u/107820740?s=400&u=94dab4585e3c67b6bc39e213d29eebcd7d3b5845&v=4" alt="Header-pic" className="Header-pic"></img>
            <div className="navigation-area" id="navigation">
                <Navigation />
            </div>
            
        <div className="header-section" id="header">
            <Routes>
            
                    <Route path="/about" component={About} />
                    <Route path="/project" component={Project} />
                    <Route path="/contact" component={Contact} />
            </Routes>
            
            
        </div>
        </header>
        </HashRouter>
    
                
        )
    }



}


export default Header