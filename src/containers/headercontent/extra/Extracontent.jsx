import React from "react";
import "./extra.css";
import cup from "../../../assets/Cuphead Launch Trailer.mp4";
import arrow2 from "../../../assets/double-arrow.png";
import arrow from "../../../assets/solid-right-arrow.png";
import image1 from "../../../assets/wo.png";
import image2 from "../../../assets/ACO.png";
import {
  FaPinterest,
  FaFacebookF,
  FaTwitter,
  FaYoutube,
  FaLinkedin,
} from "react-icons/fa";

const Extracontent = () => {
  return (
    <div>
      <div className="extra_wrap">
        <div className="overlay"></div>
        <video src={cup} autoPlay loop muted />
        <div className="extra1_wrap">
          <img src={arrow} alt="#" />
          <div className="extra1_content">
            <h1>
              Promo Video of <span>Cuphead</span>
            </h1>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt.
            </p>
          </div>
        </div>
      </div>
      <div className="extra2_wrap">
        <div className="extra2_img"></div>
        <div className="extra2_info">
          <h5>
            <span> Alan Wake</span> in Games
          </h5>
          <h1>The Game you've been waiting for is out now</h1>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis
            ipsum suspendisse ultrices gravida. Ipsum dolor sit amet,
            consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
            labore et dolore magna aliquamet, consectetur adipiscing elit, sed
            do eiusmod tempor incididunt ut labore et dolore magna aliqua.
            Vestibulum posuere porttitor justo id pellentesque. Proin id lacus
            feugiat, posuere erat sit amet, commodo ipsum. Donec pellentesque
            vestibulum metus...
          </p>
          <button>
            <h6>
              <em>Read more</em>
            </h6>
            <img src={arrow2} alt="#" />
          </button>
        </div>
      </div>
      <div className="extra3_wrap">
        <div className="extra3_news">
          <h1>
            <em>Subscribe to our NewsLetter</em>
          </h1>
          <div className="extra3_subcribe">
            <form action="">
              <input
                type="text"
                placeholder="Enter your E-mail"
                name=""
                id=""
              />
            </form>
            <button>
              <h6>
                <em>Read more</em>
              </h6>
              <img src={arrow2} alt="#" />
            </button>
          </div>
        </div>
        <div className="extra3_end">
          <img src={image1} alt="#" />
          <div className="end_links">
            <div className="extra3-end_links">
              <p>
                <a href="#1">Home</a>
              </p>
              <p>
                <a href="#1">Games</a>
              </p>
              <p>
                <a href="#1">Reviews</a>
              </p>
              <p>
                <a href="#1">News</a>
              </p>
              <p>
                <a href="#1">Contact</a>
              </p>
            </div>
            <div className="end_tags">
              <p>
                <a href="#1">
                  <i>
                    <FaPinterest />
                  </i>
                </a>
              </p>
              <p>
                <a href="#1">
                  <i>
                    <FaTwitter />
                  </i>
                </a>
              </p>
              <p>
                <a href="#1">
                  <i>
                    <FaYoutube />
                  </i>
                </a>
              </p>
              <p>
                <a href="#1">
                  <i>
                    <FaLinkedin />
                  </i>
                </a>
              </p>
              <p>
                <a href="#1">
                  <i>
                    <FaFacebookF />
                  </i>
                </a>
              </p>
            </div>
          </div>
          <img src={image2} alt="#" />
        </div>
      </div>
    </div>
  );
};

export default Extracontent;
