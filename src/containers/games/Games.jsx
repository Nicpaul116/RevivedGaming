import React, { useState } from "react";
import "./Games.css";
import { Link } from "react-router-dom";
import Navbar from "../../components/navbar/Navbar";
import Links from "../../components/links/Links";
import { AllGames } from "./allGames";
import { FaPlaystation, FaXbox, FaSteam } from "react-icons/fa";
import { SiNintendoswitch } from "react-icons/si";
import arrow2 from "../../assets/double-arrow.png";
import Category from "../../components/Category/Category";

const Games = ({ onDivClick }) => {
  const [currentPage, setCurrentPage] = useState(1);
  const recordsPerPage = 6;
  const lastIndex = currentPage * recordsPerPage;
  const firstIndex = lastIndex - recordsPerPage;
  const records = AllGames.slice(firstIndex, lastIndex);
  const npage = Math.ceil(AllGames.length / recordsPerPage);
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
      <div className="game_wrap">
        <div className="header_nav">
          <Links />
          <Navbar />
        </div>
        <div className="header_head">
          <h1>
            <em>Games</em>
          </h1>
          <h5>
            Home / <span>Games</span>
          </h5>
        </div>
      </div>
      <div className="game_list">
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
        <div className="game_page">
          <div className="allgames_wrap">
            {records.map((games, index) => {
              return (
                <div className="games_wrap" key={index}>
                  <img src={games.image} alt={games.name} />
                  <div className="games_genre">
                    <p>{games.genre}</p>
                    <p>{games.genre2}</p>
                  </div>
                  <h3>{games.name}</h3>
                  <div className="games_icons">
                    <h4
                      onClick={() =>
                        onDivClick({ image: games.image, name: games.name })
                      }
                    >
                      <Link to="/Gamedetail">
                        <FaPlaystation />
                      </Link>
                    </h4>
                    <h4
                      onClick={() =>
                        onDivClick({ image: games.image, name: games.name })
                      }
                    >
                      <Link to="/Gamedetail">
                        <FaSteam />
                      </Link>
                    </h4>
                    <h4
                      onClick={() =>
                        onDivClick({ image: games.image, name: games.name })
                      }
                    >
                      <Link to="/Gamedetail">
                        <FaXbox />
                      </Link>
                    </h4>
                    <h4
                      onClick={() =>
                        onDivClick({ image: games.image, name: games.name })
                      }
                    >
                      <Link to="/Gamedetail">
                        <SiNintendoswitch />
                      </Link>
                    </h4>
                  </div>
                </div>
              );
            })}
          </div>
          <div className="game_content">
            <Category />
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
      </div>
      <div className="gamecontent_wrap">
        <div className="gamecontent_img"></div>
        <div className="gamecontent_info">
          <h5>
            <span>DESTINY 2: THE FINAL SHAPE</span> in Games
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

export default Games;
