import React, { useState } from "react";
import { IoMdArrowDropdown } from "react-icons/io";
import { ImMenu } from "react-icons/im";
import { MdOutlineClose } from "react-icons/md";
import { NavLink } from "react-router-dom";

const Navbar = () => {
  const [toggleMenu, setToggleMenu] = useState(false);
  return (
    <div className="header_navbar">
      <div className="navbar_heading">
        <h2>
          <span>Revived</span>Gaming
        </h2>
      </div>
      <div className="navbar_links">
        <p>
          <NavLink to="/">
            Home
            <i>
              <IoMdArrowDropdown />
            </i>
          </NavLink>
        </p>
        <p className="game_p">
          <NavLink to="/Games">
            Games
            <i>
              <IoMdArrowDropdown />
            </i>
          </NavLink>
          <div className="games_detail">
            <NavLink to="/Gamedetail">
              <h4>Game</h4>
            </NavLink>
          </div>
        </p>
        <p>
          <NavLink to="/Reviews">
            Reviews
            <i>
              <IoMdArrowDropdown />
            </i>
          </NavLink>
        </p>
        <p>
          <NavLink to="/News">
            News
            <i>
              <IoMdArrowDropdown />
            </i>
          </NavLink>
        </p>
        <p>
          <NavLink to="/Contact">
            Contact
            <i>
              <IoMdArrowDropdown />
            </i>
          </NavLink>
        </p>
      </div>
      <div className="navbar_button">
        <button>Register</button>
      </div>
      <div>{toggleMenu}</div>
      <div className="menu-wrap">
        <div className="togglemenu">
          {toggleMenu ? (
            <MdOutlineClose
              size={30}
              color="#fff"
              onClick={() => setToggleMenu(false)}
            />
          ) : (
            <ImMenu
              size={30}
              color="#fff"
              onClick={() => setToggleMenu(true)}
            />
          )}
        </div>
        {toggleMenu && (
          <div className="navbar-menu">
            <div className="menu-links">
              <div className="links-ref2">
                <p>
                  <NavLink to="/">Home</NavLink>
                </p>
                <p>
                  <NavLink to="/Games">Games</NavLink>
                </p>
                <p>
                  <NavLink to="/Review">Reviews</NavLink>
                </p>
                <p>
                  <NavLink to="/News">News</NavLink>
                </p>
                <p>
                  <NavLink to="/Contact">Contact</NavLink>
                </p>
              </div>
              <div className="link_button">
                <button>Register</button>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Navbar;
