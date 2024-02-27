import React from "react";
import Headercontent from "../../containers/headercontent/Headercontent";
import Navbar from "../navbar/Navbar";
import { SliderData } from "./Slider";
import Links from "../links/Links";
import Slider from "./Sliders";
import "./Header.css";

const Header = () => {
  return (
    <div>
      <div className="header_wrap">
        <div className="header_slide">
          <Slider slides={SliderData} />
        </div>
        <div className="header_nav">
          <Links />
          <Navbar />
        </div>
      </div>
      <Headercontent />
    </div>
  );
};

export default Header;
