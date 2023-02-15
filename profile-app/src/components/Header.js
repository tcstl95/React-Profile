import React, {Component}from "react";
import {Route, HashRouter, Routes} from "react-router-dom";
import Navigation from "./Navigation";
import About from "./About";
import Project from "./Project";
import Contact from "./Contact";



class Header extends Component {
    render (){
        return (
        <HashRouter>
        <header>
        <h1>Tom Carlson</h1>
            <div className="navigation section" id="navigation">
                <Navigation />
            </div>
            
        <div className="header section" id="header">
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