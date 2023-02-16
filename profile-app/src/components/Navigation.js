import React from "react";
import {NavLink} from "react-router-dom";
function Navigation ()  {
    return (
        <div className="navigation-section" id="navigation">
                <NavLink to="/about-section">About Me</NavLink>

                <NavLink to="/project-section">Project</NavLink>

                <NavLink to="/contact-section">Contact</NavLink>
        </div>
        
    );
}

export default Navigation