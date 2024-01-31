import React from "react";
import "./customerCard.scss";

const CustomerCard = () => {
  return (
    <div className="customerCard">
      <div className="image">
        <img
          src="https://www.bmc.com/content/dam/bmc/logos/third-party/logo-evolution-color.png"
          alt="company-logo"
        />
      </div>
      <div className="left">
        <div className="card-header">
          <h3>CUSTOMER STORY</h3>
        </div>
        <div className="card-content">
          <hr />
          {/* <h1>Tech Mahindra</h1> */}
          <p>
            Hermes Streamlines Asset Management and Automates Business Processes
            with BMC Helix Solutions
          </p>
        </div>
        <hr style={{ backgroundColor: "#0058ac" }} />
      </div>
    </div>
  );
};

export default CustomerCard;
