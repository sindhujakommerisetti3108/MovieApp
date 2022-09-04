import React from "react";
import { useHistory } from "react-router-dom";
import { useDispatch, useSelector } from 'react-redux';
import { userLogout } from "../Redux/action"
import { HeartFill } from 'react-bootstrap-icons';
const Navbar = () => {
    let history = useHistory();
    let dispatch = useDispatch();
    let { isLoggedin, favoritemovies } = useSelector(state => state.data)
    const handleLogout = () => {
        dispatch(userLogout());
        history.push("/");
    }
    return (
        <div className="nav fixed-top">
            <div className="nav-title">
                <h3>Movie Application</h3>
            </div>
            <div className="nav-links">
                <a style={{ cursor: "pointer", textDecoration: "underline" }} href="/">
                    {isLoggedin ? "Logout" : ""}
                </a>
                {isLoggedin?
                <a style={{ marginRight: "10px", cursor: "pointer"}} onClick={() => history.push("/favorites")}>
                    Favorites <span className="fav-count">{favoritemovies.length}</span>
                </a>:""}
            </div>
        </div>
    )
}

export default Navbar;
