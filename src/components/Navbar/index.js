import React from 'react'
import { Link, useLocation } from "react-router-dom";
import "./navbar.css";

function Navbar() {
    const location = useLocation();

    return (
        <>
            <nav className="navbar navbar-expand-sm navbar-dark">
                <i className="fa fa-superpowers"></i>
                <a className="navbar-brand" href="/React-Portfolio">Karryn Saw</a>
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse justify-content-end" id="navbarNav">
                    <ul className="navbar-nav">
                        <li className="nav-item active">
                        <Link to="/" className={location.pathname === "/" ? "nav-link active" : "nav-link"}>About</Link>
                        </li>
                        <li className="nav-item">
                        <Link to="/projects" className={location.pathname === "/projects" ? "nav-link active" : "nav-link"}>Projects</Link>
                        </li>
                        <li className="nav-item">
                        <Link to="/contact" className={location.pathname === "/contact" ? "nav-link active" : "nav-link"}>Contact</Link>
                        </li>
                    </ul>
                </div>
            </nav>
        </>
    )
}

export default Navbar;