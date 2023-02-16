import React from "react";
import { NavLink } from "react-router-dom";
function Navigation (props)  {
    return (
        <div className="navigation-section" id="navigation">
                <NavLink to="/about">About Me</NavLink>

                <NavLink to="/project">Project</NavLink>

                <NavLink to="/contact">Contact</NavLink>
        </div>
        
    );
}

export default Navigation