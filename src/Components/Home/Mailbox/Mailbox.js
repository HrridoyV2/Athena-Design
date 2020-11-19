import React from 'react';
import "./Mailbox.css";

const Mailbox = () => {
    return (
        
            // <div className="mailboxsection d-flex align-items-center">
                <div className="mailbox container">
                    <div className="row justify-content-center my-5">
                        <h1>Get your design right, right now</h1>
                        </div>
                        <div className="col-md-12">
                        <p> Be the first know our latest offers and updates!</p>
                        </div>
                        
                        <div className="col-md-8 my-5">
                            <input className="form-control" type="text" placeholder="Enter your email address"></input>
                        
                        <div className="col-md-4 text-md-right text-center my-5 mb-10">
                              <button className="get-started-btn text-white">Get Started</button>
                        </div>
                        </div>
                        </div>
                        
        // </div>
    );
};

export default Mailbox;