import React from "react";
import buttonUp from "../../../../data/images/icons/button-up-png.png";
const Scroll = require("react-scroll");
const scroller = Scroll.scroller;

if (process.env.NODE_ENV !== "production") {
  const whyDidYouRender = require("@welldone-software/why-did-you-render");
  whyDidYouRender(React);
}

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

UpNavButton.whyDidYouRender = true;
export default UpNavButton;
