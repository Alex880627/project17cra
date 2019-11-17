import React from "react";
import './hamburger-menu.css'

const HamburgerMenu = ({ openSideBar, closeSideBar, sideBar }) => {
  const toogleNavbar = () => {
    if (sideBar === "open") {
      closeSideBar();
    } else {
      openSideBar();
    }
  };
  return (
    <div id="nav-icon1" className={sideBar} onClick={toogleNavbar}>
      <span />
      <span />
      <span />
    </div>
  );
};

export default HamburgerMenu;
