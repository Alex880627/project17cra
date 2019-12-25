import React from "react";
import "./scroll-down-icon.css";
const Scroll = require("react-scroll");
const scroller = Scroll.scroller;

const ScrollDown = () => {
  const link = element => {
    scroller.scrollTo(element, {
      duration: 700,
      smooth: "easeInOutExpo",
      offset: 0
    });
  };
  return (
    <a
      class="scroll-down"
      onClick={() => {
        link("treatments");
      }}
    >
      <div className="chevron"></div>
      <div className="chevron"></div>
      <div className="chevron"></div>
    </a>
  );
};

export default ScrollDown;
