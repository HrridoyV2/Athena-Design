import React from 'react'
import './DedicatedTeam.css';
function DedicatedTeam() {
    const teams = [
      {
        price: 199,
        title: "Basic",
        page: "No",
        day: 10,
      },
      {
        price: 399,
        title: "Preferred",
        page: "4",
        day: 20,
      },
      {
        price: 599,
        title: "Elite",
        page: "8",
        day: 30,
      }
    ];
    return (
      <div>
        <h2 className="mb-5 team-title">Choose Your Dedicated Team</h2>

        <div className="row">
          {
          teams.map((t) => (
            <div className="col-md-4 team-text">
              <h3>${t.price}</h3>
              <small className="title">For {t.title}</small>
              <p>Homepage</p>
              <p>No Inner Page</p>
              <p>Asset file</p>
              <p>Source file</p>
              <p>Free Stock Photos</p>
              <p>{t.day} Days Free support</p>
              <p>24/7 support</p>
            </div>
          ))}
        </div>
      </div>
    );
}

export default DedicatedTeam
