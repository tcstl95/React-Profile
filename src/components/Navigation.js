import React from "react";
import {NavLink} from "react-router-dom";
const Navigation = () => {
    return (
        <div className="navigation section" id="navigation">
                <NavLink to="/about">About Me</NavLink>
                <NavLink to="/project">Project</NavLink>
                <NavLink to="/contact">Contact</NavLink>
        </div>
        
    );
}

export default Navigation