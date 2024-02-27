import { useState } from "react";
import React from "react";
import arrow from "../../assets/solid-right-arrow.png";
import { SliderData } from "./Slider";
import "./Slider.css";

const Slider = ({ slides }) => {
  const [current, setcurrent] = useState(0);
  const length = slides.length;

  const nextslide = () => {
    setcurrent(current === length - 1 ? 0 : current + 1);
  };

  if (!Array.isArray(slides) || slides.length <= 0) {
    return null;
  }
  return (
    <div className="slider">
      <img src={arrow} alt="#1" className="right-arrow" onClick={nextslide} />
      <div className="header_info">
        <h1>Get Revived!</h1>
        <p>
          Fusce erat dui, venenatis et erat in, vulputate dignissim lacus. Donec
          vitae tempus dolor, sit amet elementum lorem. Ut cursus tempor turpis.
        </p>
        <button>Read More...</button>
      </div>
      {SliderData.map((slide, index) => {
        return (
          <div
            className={index === current ? "slide active" : "slide"}
            key={index}
          >
            {index === current && (
              <img src={slide.image} alt="#" className="image" />
            )}
          </div>
        );
      })}
    </div>
  );
};

export default Slider;
