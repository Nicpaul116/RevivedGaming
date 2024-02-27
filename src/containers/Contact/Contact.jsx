import React from "react";
import "./Contact.css";
import Navbar from "../../components/navbar/Navbar";
import Links from "../../components/links/Links";
import arrow2 from "../../assets/double-arrow.png";
import phone from "../../assets/phone.png";
import location from "../../assets/location.png";
import email from "../../assets/mail.png";
import image1 from "../../assets/wo.png";
import image2 from "../../assets/ACO.png";

import {
  FaPinterest,
  FaFacebookF,
  FaTwitter,
  FaYoutube,
  FaLinkedin,
} from "react-icons/fa";

const Contact = () => {
  return (
    <div>
      <div className="contact_wrap">
        <div className="header_nav">
          <Links />
          <Navbar />
        </div>
        <div className="header_head">
          <h1>
            <em>Contact</em>
          </h1>
          <h5>
            Home / <span>Contact</span>
          </h5>
        </div>
      </div>
      <div className="contact_all">
        <div className="contact_map">
          <iframe
            title="map"
            src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d19155.527970368727!2d17.9912063!3d53.1202288!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sen!2spl!4v1708962483425!5m2!1sen!2spl"
            allowfullscreen=""
            loading="lazy"
            referrerpolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>
        <div className="contact_info">
          <div className="contact_info1">
            <form action="">
              <input type="text" placeholder="YOUR NAME" />
              <input type="text" placeholder="YOUR E-MAIL" />
              <input type="text" placeholder="SUBJECT" />
              <textarea
                name="Message"
                id="Message"
                placeholder="MESSAGE"
              ></textarea>
            </form>
            <div className="contact_button">
              <button>
                <h6>
                  <em> Message</em>
                </h6>
                <img src={arrow2} alt="#" />
              </button>
            </div>
          </div>
          <div className="contact_info2">
            <h2>Hello there!</h2>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis
              ipsum suspendisse ultrices gravida. Lorem ipsum dolor sit amet,
              consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
              labore et dolore magna aliqua.....
            </p>
            <div className="icons">
              <div className="icon1">
                <img src={location} alt="#" />
                <h5>Old Town</h5>
              </div>
              <div className="icon2">
                <img src={phone} alt="#" />
                <h5>+264 677 588 909</h5>
              </div>
              <div className="icon3">
                <img src={email} alt="#" />
                <h5>Nick@contact.com</h5>
              </div>
            </div>
          </div>
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

export default Contact;
