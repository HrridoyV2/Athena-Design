import React from 'react';
import experience from "../../../image/images/experience.png";
import interface1 from "../../../image/images/interface.png";
import prototyping from "../../../image/images/prototyping.png";
import illustration from "../../../image/images/illustration.png";
import "./Service.css";
const Service = () => {
    return (
        <div className="container service my-5">
            <div className="service-title text-center my-5">
                <h3>What we do</h3>
                <p>Our main focus is to make the User Experience very <br /> simple and easy. Simplicity is our Strength.</p>
            </div>
            <div className="row text-center">
                <div className="col-md-3">
                    <img className="img-fluid" src={experience} alt="" />
                    <h4 className="mt-4 mb-3">Experience Design</h4>
                    <p>The point of using Lorem Ipsum is that it has a more-or-less normal.</p>
                </div>
                <div className="col-md-3">
                    <img className="img-fluid" src={interface1} alt="" />
                    <h4 className="mt-4 mb-3">Experience Design</h4>
                    <p>The point of using Lorem Ipsum is that it has a more-or-less normal.</p>
                </div>
                <div className="col-md-3">
                    <img className="img-fluid" src={prototyping} alt="" />
                    <h4 className="mt-4 mb-3">Experience Design</h4>
                    <p>The point of using Lorem Ipsum is that it has a more-or-less normal.</p>
                </div>
                <div className="col-md-3">
                    <img className="img-fluid" src={illustration} alt="" />
                    <h4 className="mt-4 mb-3">Experience Design</h4>
                    <p>The point of using Lorem Ipsum is that it has a more-or-less normal.</p>
                </div>
            </div>
        </div>
    );
};

export default Service;