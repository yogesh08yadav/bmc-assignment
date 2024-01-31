import React from "react";
import "./featuredCard.scss";
import { SlArrowRight } from "react-icons/sl";

const FeaturedCard = () => {
  return (
    <div className="featured-card">
      <div className="left">
        <div className="card-header">
          <h3>CUSTOMER STORY</h3>
        </div>
        <div className="card-content">
          <hr />
          <h1>Tech Mahindra</h1>
          <p>
            Tech Mahindra Uses Containerized BMC Helix to Help European Telco
            Scale
          </p>
        </div>
        <hr />
      </div>
      <div className="right">
        <div className="image">
          <img
            src="https://www.bmc.com/content/dam/bmc/logos/third-party/logo-tech-mahindra-white.png"
            alt="company-logo"
            height={"50%"}
            width={"70%"}
          />
        </div>
        <hr />
        <div className="footer">
          <h1>VIEW</h1>
          <SlArrowRight fontSize={25} fontWeight={700} />
        </div>
      </div>
    </div>
  );
};

export default FeaturedCard;
