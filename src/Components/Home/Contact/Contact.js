import React from 'react';
import contact from "../../../image/images/contact.png";
const Contact = () => {
    return (
        <div className=" container my-5 py-5">
            <div className="row ">
                <div className="col-md-6">
                    <img className="img-fluid" src={contact} alt="" />
                </div>
                <div className="col-md-6 my-5">
                    <h2>STAY RUNNING & Project</h2>
                    <p className="mt-4 mb-5">It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letter.</p>
                    <a href="#" className="btn text-center">Contact Us</a>
                </div>
            </div>
        </div>
    );
};

export default Contact;