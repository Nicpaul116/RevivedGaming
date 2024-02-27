import React, { useState } from "react";
import "./News.css";
import Navbar from "../../components/navbar/Navbar";
import Links from "../../components/links/Links";
import { newscontent1, newscontent2, newscontent3 } from "./newscontent";
import Category from "../../components/Category/Category";
import arrow2 from "../../assets/double-arrow.png";
import Trending from "../../components/Trending/Trending";

const News = () => {
  const [content, setcontent] = useState(newscontent1);
  const [activebutton, setactivebutton] = useState(1);

  const buttonClick = (buttonid) => {
    setactivebutton(buttonid);
  };

  const button1 = () => {
    setcontent(newscontent2);
  };

  const button2 = () => {
    setcontent(newscontent3);
  };

  const button3 = () => {
    setcontent(newscontent1);
  };

  return (
    <div>
      <div className="News_wrap">
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
      <div className="news_wrap-content">
        <div className="section1_all">
          <div className="news_section1">
            <div className="section1_buttons">
              <button
                className={activebutton === 1 ? "button active " : "button"}
                onClick={() => {
                  button3();
                  buttonClick(1);
                }}
              >
                Latest
              </button>
              <button
                className={activebutton === 2 ? "button active " : "button"}
                onClick={() => {
                  button2();
                  buttonClick(2);
                }}
              >
                Online
              </button>
              <button
                className={activebutton === 3 ? "button active " : "button"}
                onClick={() => {
                  button1();
                  buttonClick(3);
                }}
              >
                VR
              </button>
            </div>
          </div>
          <div className="news_section2">
            {content.map((news, index) => {
              return (
                <div key={index} className="newscontent_wrap">
                  <div className="news_image">
                    <img src={news.image} alt={news.name} />
                  </div>
                  <div className="news_info">
                    <h2>{news.topic}</h2>
                    <p>
                      Lorem ipsum dolor sit amet consectetur adipiscing elit,
                      sed do eiusmod tempor incididunt ut labore et dolore magna
                      aliqua. Quis ipsum suspendisse ultrices gravida. Lorem
                      ipsum dolor sit amet, consectetur adipiscing elit, sed do
                      eiusmod tempor incididunt ut labore et dolore magna
                      aliqua.....
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
        <div className="section2_all">
          <div className="section1_search">
            <form action="">
              <input type="text" placeholder="Search" />
            </form>
          </div>
          <Category />
          <Trending />
          <div className="game_content2">
            <h2>
              <em>PlatForm</em>
            </h2>
            <div className="info2_links">
              <a href="#1">
                <p>Play Station</p>
              </a>
              <a href="#1">
                <p>Xbox series</p>
              </a>
              <a href="#1">
                <p>Nintendo switch</p>
              </a>
              <a href="#1">
                <p>Steam</p>
              </a>
            </div>
          </div>
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
            <img src={arrow2} alt="#" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default News;
