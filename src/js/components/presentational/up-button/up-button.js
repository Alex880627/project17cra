import React, { useState, useEffect } from "react";
import buttonUp from "../../../../data/images/icons/button-up-png.png";
const Scroll = require("react-scroll");
const scroller = Scroll.scroller;

const UpNavButton = () => {
  const link = element => {
    scroller.scrollTo(element, {
      duration: 500,
      smooth: "easeInOutExpo",
      offset: 0
    });
  };
  const [visibility, setVisibility] = useState("hidden");
  const onScroll = () => {
    if (window.pageYOffset > 400) {
      setVisibility("visible");
    } else if (window.pageYOffset < 400) {
      setVisibility("hidden");
    }
  };
  useEffect(() => {
    window.addEventListener("scroll", onScroll);
    return () => {
      window.removeEventListener("scroll", onScroll);
    };
  }, []);
  return (
    <nav className={`up-button ${visibility}`}>
      <img
        src={buttonUp}
        onClick={() => {
          link("page-up");
        }}
      />
    </nav>
  );
};

export default UpNavButton;
