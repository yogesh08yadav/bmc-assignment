import React from "react";
import "./customerCard.scss";
import { SlArrowRight } from "react-icons/sl";

const CustomerCard = ({ card }) => {
  return (
    <a href={card.assetLink} style={{ textDecoration: "none" }}>
      <div className="customerCard">
        <div className="image">
          <img
            height={"100%"}
            width={"75%"}
            src={`https://www.bmc.com${card.headerImage}`}
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
            <p>{card.description}</p>
          </div>
        </div>

        <div className="footer">
          <hr style={{ background: "#0058ac" }} />
          <div className="icons">
            <h2>VIEW</h2>
            <SlArrowRight fontSize={20} fontWeight={700} />
          </div>
        </div>
      </div>
    </a>
  );
};

export default CustomerCard;
