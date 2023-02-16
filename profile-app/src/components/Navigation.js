import React from "react";
import { NavLink } from "react-router-dom";

// Navigation component
// Currnetly trying to figure out how to get the navigation to work
function Navigation ()  {
    return (
        <div className="navigation-section" id="navigation">
                <NavLink to="/about">About Me</NavLink>

                <NavLink to="/project">Project</NavLink>

                <NavLink to="/contact">Contact</NavLink>
        </div>
        
    );
}

export default Navigation