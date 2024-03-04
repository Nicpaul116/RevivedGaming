import React, { useState } from "react";
import "./Headercontent.css";
import { Link } from "react-router-dom";
import arrow from "../../assets/double-arrow.png";
import Extracontent from "./extra/Extracontent";
import { content1, online, fighting, racing } from "./content";
import Trending from "../../components/Trending/Trending";
import Category from "../../components/Category/Category";

const Headercontent = () => {
  const [content, setcontent] = useState(content1);
  const [activebutton, setactivebutton] = useState(3);

  const buttonClick = (buttonid) => {
    setactivebutton(buttonid);
  };

  const showcontent1 = () => {
    setcontent(fighting);
  };

  const showcontent2 = () => {
    setcontent(racing);
  };

  const showcontent3 = () => {
    setcontent(content1);
  };

  const showcontent4 = () => {
    setcontent(online);
  };

  return (
    <div>
      <div className="content_wrap">
        <div className="content_info1">
          <h5>
            Apex in <span>Games</span>
          </h5>
          <h3>The best online game is out now!</h3>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis
            ipsum suspendisse ultrices gravida....
          </p>
          <Link to="/Games">
            <h6>
              <em>Read more</em>
            </h6>
            <img src={arrow} alt="#" />
          </Link>
        </div>
        <div className="content_info2">
          <h5>
            Top Games in <span>Steam</span>
          </h5>
          <h3>Top 5 best games in February</h3>
          <p>
            Ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
            tempor incididunt ut labore et dolore magna aliqua. Quis ipsum
            labore suspendisse ultrices gravida....
          </p>
          <Link to="/News">
            <h6>
              <em>Read more</em>
            </h6>
            <img src={arrow} alt="#" />
          </Link>
        </div>
        <div className="content_info3">
          <h5>
            Leornado in <span>Reviews</span>
          </h5>
          <h3>Get this game at a promo price</h3>
          <p>
            Sit amet, consectetur adipiscing elit, sed do eiusmod tempor
            incididunt ut labore et dolore magna aliqua. Quis ipsum suspendisse
            ultrices gravida ncididunt ut labore ....
          </p>
          <Link to="/Games">
            <h6>
              <em>Read more</em>
            </h6>
            <img src={arrow} alt="#" />
          </Link>
        </div>
      </div>
      <div className="content_wrap2">
        <div className="content1">
          <h2>
            <em>Latest News</em>
          </h2>
          <div className="content_buttons">
            <button
              className={activebutton === 1 ? "button active " : "button"}
              onClick={() => {
                showcontent1();
                buttonClick(1);
              }}
            >
              Racing
            </button>
            <button
              className={activebutton === 2 ? "button active" : "button"}
              onClick={() => {
                showcontent2();
                buttonClick(2);
              }}
            >
              Fighting
            </button>
            <button
              className={activebutton === 3 ? "button active" : "button"}
              onClick={() => {
                showcontent3();
                buttonClick(3);
              }}
            >
              Strategy
            </button>
            <button
              className={activebutton === 4 ? "button active" : "button"}
              onClick={() => {
                showcontent4();
                buttonClick(4);
              }}
            >
              Online
            </button>
          </div>
          <div className="content_news">
            {content.map((Content, index) => {
              return (
                <div className="news_wrap" key={index}>
                  <img src={Content.image} alt="#" />
                  <div className="news_topic">
                    <h5>{Content.heading}</h5>
                    <h3>{Content.topic}</h3>
                    <p>{Content.desc}</p>
                    <div className="news_link">
                      <a href="#1">
                        <h6>
                          <em>{Content.link}</em>
                        </h6>
                        <img src={Content.icon} alt="#" />
                      </a>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
        <div className="content_wrap3">
          <Trending />
          <Category />
          <div className="content3_info3">
            <h4>Be a Pro Today!</h4>
            <h5>Subscribe now</h5>
          </div>
        </div>
      </div>
      <Extracontent />
    </div>
  );
};

export default Headercontent;
