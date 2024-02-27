import React from "react";
import "./gamedetail.css";
import Navbar from "../../../components/navbar/Navbar";
import Links from "../../../components/links/Links";
import {
  FaPinterest,
  FaFacebookF,
  FaTwitter,
  FaYoutube,
  FaLinkedin,
} from "react-icons/fa";
import pp from "../../../assets/pp.jpg";
import arrow2 from "../../../assets/double-arrow.png";

const Gamedetail = ({ clickedPart }) => {
  return (
    <div>
      <div className="gamedetail_wrap">
        <div className="header_nav">
          <Links />
          <Navbar />
        </div>
        <div className="header_head">
          <h1>
            <em>Game detail</em>
          </h1>
          <h5>
            Home / <span>Game Detail</span>
          </h5>
        </div>
      </div>
      <div className="gamedetail_info">
        <img src={clickedPart && clickedPart.image} alt="Choose A game" />
        <div className="detail_info">
          <div className="detail_game">
            <h2>{clickedPart && clickedPart.name}</h2>
            <h4>Gameplay</h4>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis
              ipsum suspendisse ultrices gravida. Ipsum dolor sit amet,
              consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
              labore et dolore magna aliquamet, consectetur adipiscing elit, sed
              do eiusmod tempor incididunt ut labore et dolore magna aliqua.
              Vestibulum posuere porttitor justo id pellentesque. Proin id lacus
              feugiat, posuere erat sit amet, commodo ipsum. Donec pellentesque
              vestibulum metus.
            </p>
            <h4>Conclusion</h4>
            <p>
              Nulla ut maximus mauris. Sed malesuada at sapien sed euismod.
              Vestibulum pharetra in sem id laoreet. Cras metus ex, placerat nec
              justo quis, luctus posuere ex. Vivamus volutpat nibh ac
              sollicitudin imperdiet. Donec scelerisque lorem sodales odio
              ultricies, nec rhoncus ex lobortis. Vivamus tincidunt sit amet sem
              id varius. Donec ele-mentum aliquet tortor. Curabitur justo mi,
              efficitur sed eros aliquet, dictum molestie eros. Nullam
              scelerisque convallis gravida. Morbi id lorem accumsan,
              scelerisque enim laoreet, sollicitudin neque. Vivamus volutpat
              nibh ac sollicitudin imperdiet. Donec scelerisque lorem sodales
              odio ultricies, nec rhoncus ex lobortis. Vivamus tincidunt sit
              amet sem id varius. Donec ele-mentum aliquet tortor. Curabitur
              justo mi, efficitur sed eros aliqueDonec vitae tellus sodales,
              congue augue at, biben-dum justo. Pellentesque non dolor et magna
              volutpat pharetra eget vel ligula. Maecenas facilisis vestibulum
              mattis. Sed sagittis gravida urna. Cras nec mi risus.
            </p>
            <div className="gamedetails_links">
              <h6>Share: </h6>
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
          <div>
            <div className="rating_info">
              <h2>
                <em>Ratings</em>
              </h2>
              <div className="rating_links">
                <div className="rating_sub">
                  <h6>Price</h6>
                  <p>5/10</p>
                </div>
                <div className="rating_sub">
                  <h6>Graphics</h6>
                  <p>8/10</p>
                </div>
                <div className="rating_sub">
                  <h6>Dificulty</h6>
                  <p>10/10</p>
                </div>
                <div className="rating_sub">
                  <h6>Critics</h6>
                  <p>7/10</p>
                </div>
                <div className="rating_sub2">
                  <p>Rating</p>
                  <h1>
                    <span>9.5</span>/10
                  </h1>
                </div>
              </div>
            </div>
            <div className="test_info2">
              <h2>
                <em>Testimonials</em>
              </h2>
              <div className="test_links">
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolo re magna
                  aliqua. Quis ipsum suspend isse ultrices.
                </p>
                <div className="test_gamer">
                  <h6>Nicpaul Gacha,</h6>
                  <p>Gamer</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="writtenby">
        <div className="written_img">
          <img src={pp} alt="#" />
        </div>
        <div className="written_info">
          <h3>Written by: Nicpaul Gacha</h3>
          <p>
            Vivamus volutpat nibh ac sollicitudin imperdiet. Donec scelerisque
            lorem sodales odio ultricies, nec rhoncus ex lobortis. Vivamus
            tincid-unt sit amet sem id varius. Donec elementum aliquet tortor.
            Curabitur justo mi, efficitur sed eros alique.
          </p>
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

export default Gamedetail;
