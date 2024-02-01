import React, { useEffect, useState } from "react";
import "./home.scss";
import homeImage from "../../images/bmc-home-page.png";
import homeImageRight from "../../images/bmc-home-page-right.png";
import FeaturedCard from "../../components/featuredCard/FeaturedCard";
import CustomerCard from "../../components/customerCard/CustomerCard";
import { IoIosArrowDown } from "react-icons/io";

const Home = () => {
  const [isMobile, setIsMobile] = useState(window.innerWidth);
  const [loading, setLoading] = useState(false);
  const [showFilter, setShowFilter] = useState(false);
  const [cardsData, setCardData] = useState([]);
  const [pageCount, setPageCount] = useState(1);
  let pageSize = 9;
  const fetchData = async () => {
    setLoading(true);
    await fetch("http://localhost:3001/api/content")
      .then((res) => res.json())
      .then((res) => setCardData(res.results))
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
            <h1>Featured Stories</h1>
            <FeaturedCard />
          </div>
          <div className="customer-story">
            <h1>All customer stories</h1>
            <div
              className={
                isMobile < "1200" ? "customer-cards-mobile" : "customer-cards"
              }
            >
              {cardsData.length > 0 &&
                cardsData
                  .slice(0, pageCount * pageSize)
                  .map((card, idx) => <CustomerCard card={card} />)}
            </div>
          </div>
        </div>
      </div>

      <div className="pagination-btn">
        <p>{`Showing ${
          pageCount * pageSize > 78 ? 78 : pageCount * pageSize
        } of 78`}</p>
        <button
          disabled={pageCount > cardsData.length / 9}
          onClick={() => setPageCount((prev) => prev + 1)}
        >
          Load more
          <IoIosArrowDown />
        </button>
      </div>
    </div>
  );
};

export default Home;
