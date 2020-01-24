import React from "react";
import buttonUp from "../../../../data/images/icons/button-up-png.png";
import "./up-button.css";
const Scroll = require("react-scroll");
const scroller = Scroll.scroller;

const UpNavButton = React.memo(({ onScreen }) => {
  const link = element => {
    scroller.scrollTo(element, {
      duration: 500,
      smooth: "easeInOutExpo",
      offset: 0
    });
  };
  return (
    <nav className={`up-button ${onScreen? "visible":"hidden"}`}>
      <img
        src={buttonUp}
        onClick={() => {
          link("page-up");
        }}
      />
    </nav>
  );
});

export default UpNavButton;
