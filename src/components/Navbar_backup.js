import React from "react";
import {useHistory } from "react-router-dom";
const Navbar = () => {
    let history=useHistory();
    return (
        <div className="nav">
            <div className="nav-title">
            <h3>Movie Application</h3>
            </div>
            <div className="nav-links">
                <a href ="/" style={{textDecoration:"underline",cursor:"pointer"}}>Logout</a>
            </div>
        </div>
    )
}

export default Navbar;
