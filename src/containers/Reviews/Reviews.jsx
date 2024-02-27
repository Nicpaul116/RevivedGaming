import React, { useState } from "react";
import "./Reviews.css";
import Navbar from "../../components/navbar/Navbar";
import Links from "../../components/links/Links";
import { AllReviews } from "./allReviews";
import icon from "../../assets/double-arrow.png";

const Reviews = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const recordsPerPage = 5;
  const lastIndex = currentPage * recordsPerPage;
  const firstIndex = lastIndex - recordsPerPage;
  const records = AllReviews.slice(firstIndex, lastIndex);
  const npage = Math.ceil(AllReviews.length / recordsPerPage);
  const numbers = [...Array(npage + 1).keys()].slice(1);

  const prev = () => {
    if (currentPage !== 1) {
      setCurrentPage(currentPage - 1);
    }
  };

  const changeCPage = (id) => {
    setCurrentPage(id);
  };

  const nextPage = () => {
    if (currentPage !== npage) {
      setCurrentPage(currentPage + 1);
    }
  };
  return (
    <div>
      <div className="review_wrap">
        <div className="header_nav">
          <Links />
          <Navbar />
        </div>
        <div className="header_head">
          <h1>
            <em>Reviews</em>
          </h1>
          <h5>
            Home / <span>Reviews</span>
          </h5>
        </div>
      </div>
      <div className="review_section">
        <div className="allreviews_wrap">
          {records.map((reviews, index) => {
            return (
              <div className="reviews_wrap" key={index}>
                <img src={reviews.image} alt={reviews.name} />
                <div className="reviews_head">
                  <div className="head_reviewhead">
                    <h4>
                      <span>{reviews.name}</span> in Games
                    </h4>
                    <div className="review_rate">
                      <p>Rating</p>
                      <h1>
                        <span>{reviews.rate}</span>/10
                      </h1>
                    </div>
                  </div>
                  <h2>{reviews.user}</h2>
                  <p>{reviews.desc}</p>
                  <div className="review_read">
                    <h3>
                      <em>{reviews.button}</em>
                      <img src={reviews.icon} alt="#" />
                    </h3>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
        <div className="pagination">
          <button onClick={prev} className="button">
            prev
          </button>
          <div className="pagination_items">
            {numbers.map((n, i) => (
              <p
                onClick={() => changeCPage(n)}
                key={i}
                className={`page_item ${
                  currentPage === n ? "active_page" : ""
                }`}
              >
                {n}
              </p>
            ))}
          </div>

          <button className="button" onClick={nextPage}>
            next
          </button>
        </div>
      </div>
      <div className="extra3_news">
        <h1>
          <em>Subscribe to our NewsLetter</em>
        </h1>
        <div className="extra3_subcribe">
          <form action="">
            <input type="text" placeholder="Enter your E-mail" name="" id="" />
          </form>
          <button>
            <h6>
              <em>Read more</em>
            </h6>
            <img src={icon} alt="#" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default Reviews;
