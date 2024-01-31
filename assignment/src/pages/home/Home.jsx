import React, { useEffect, useState } from "react";
import "./home.scss";
import homeImage from "../../images/bmc-home-page.png";
import homeImageRight from "../../images/bmc-home-page-right.png";
import axios from "axios";
import FeaturedCard from "../../components/featuredCard/FeaturedCard";
import CustomerCard from "../../components/customerCard/CustomerCard";

const Home = () => {
  const [isMobile, setIsMobile] = useState(window.innerWidth);
  const [loading, setLoading] = useState(false);
  const [showFilter, setShowFilter] = useState(false);
  const fetchData = async () => {
    setLoading(true);
    await fetch("/api/content")
      .then((res) => console.log("res1", res))
      // .then((res) => console.log("res", res))
      .catch((err) => console.log("err", err))
      .finally(() => setLoading(false));
  };

  useEffect(() => {
    let resize = window.addEventListener("resize", () => {
      setIsMobile(window.innerWidth);
    });

    return () => {
      window.removeEventListener("resize", resize);
    };
  }, []);

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <div class="content">
      <div className="header">
        <img
          src={isMobile < "960" ? homeImageRight : homeImage}
          width={"100%"}
          height={"100%"}
          alt=""
        />
      </div>

      <div className="stories">
        <div className="filters">
          <div className="size-filter">
            <h4>COMPANY SIZE</h4>
            <h4 onClick={() => setShowFilter(!showFilter)}>+</h4>
          </div>
          <div className={showFilter ? "size-filters show" : "size-filters"}>
            <h5>5000+</h5>
          </div>
          <div className={showFilter ? "size-filters show" : "size-filters"}>
            <h5>1000-4999</h5>
          </div>
          <div className={showFilter ? "size-filters show" : "size-filters"}>
            <h5>1-999</h5>
          </div>
        </div>
        <div className="story">
          <div className="selected-filter">Select your filter on the left</div>
          <div className="featured-story">
            <h2>Featured Stories</h2>
            <FeaturedCard />
          </div>
          <div className="customer-story">
            <h2>All customer stories</h2>
            <div className="customer-cards">
              <CustomerCard />
              <CustomerCard />
              <CustomerCard />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
