import React from "react";
import {
  FaPinterest,
  FaFacebookF,
  FaTwitter,
  FaYoutube,
  FaLinkedin,
} from "react-icons/fa";

const Links = () => {
  return (
    <div>
      <div className="header_links">
        <h6>Follow Us: </h6>
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
  );
};

export default Links;
