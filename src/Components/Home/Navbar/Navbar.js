import React from 'react';

import logo from "../../../image/images/logo.png";
import "./Navbar.css";
const Navbar = () => {
    return (
        <nav className="navbar navbar-expand-lg navbar-light py-3">
            <div className="container">
                <a href="#" className="navbar-brand">
                    <img style={{ width: '100px' }} src={logo} alt="" />
                </a>
                <button className="navbar-toggler" to="/" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav ml-auto">
                        <li className="nav-item active">
                            <a href="#home" className="nav-link mr-5 ">Home</a>
                        </li>
                        <li className="nav-item active">
                            <a href="#about" className="nav-link mr-5 ">About</a>
                        </li>
                        <li className="nav-item active">
                            <a href="#services" className="nav-link mr-5 ">Services</a>
                        </li>
                        <li className="nav-item active">
                            <a href="#ourteam" className="nav-link mr-5 ">Our Team</a>
                        </li>
                        <li className="nav-item active">
                            <a href="#contact" className="nav-link mr-5 contact ">
                                {/* <button className="btn text-white">Contact Us
                                    </button>  */}
                                    Contact Us
                                    </a>
                        </li>

                    </ul>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;