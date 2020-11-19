import React from 'react';
import logo from "../../../image/images/logo.png";
import facebook from "../../../image/images/facebook.png";
import twitter from "../../../image/images/twitter.png";
import linkedin from "../../../image/images/linkedin.png";
import dribble from "../../../image/images/dribbble.png";
import dribble1 from "../../../image/images/dribbble.png";


import "./Footer.css";
const Footer = () => {
    return (
        <div className="container footer">
            <div className="row ">
                <div className="col-md-6 ">
                    <img style={{ height: "117px", width: "171px" }} src={logo} alt="" />
                    <div className="mt-4 mb-4  ">
                        <img className="mr-5" src={facebook} alt="" />
                        <img className="mr-5" src={twitter} alt="" />
                        <img className="mr-5" src={linkedin} alt="" />
                        <img className="mr-5" src={dribble} alt="" />
                        <img className="mr-5" src={dribble1} alt="" />
                    </div>
                </div>

                <div className="col-md-2 mt-4 text-center  ">
                    <p>Features</p>
                    <p>Enterprise</p>
                    <p>Pricing</p>
                </div>
                <div className="col-md-2 mt-4 text-center ">
                    <p>Blog</p>
                    <p>Help Center</p>
                    <p>Contact Us</p>
                    <p>Status</p>
                </div>
                <div className="col-md-2 mt-4 text-center ">
                    <p>About Us</p>
                    <p>Terms of Service</p>
                    <p>Security</p>
                    <p>Login</p>
                </div>
            </div>

        </div>
    );
};

export default Footer;