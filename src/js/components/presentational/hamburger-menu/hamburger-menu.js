import React from "react";
import "./hamburger-menu.css";
import logo from "../../../../data/images/icons/logo-small.png";

const HamburgerMenu = ({ openSideBar, closeSideBar, sideBar }) => {
  const toogleNavbar = () => {
    if (sideBar === true) {
      closeSideBar();
    } else {
      openSideBar();
    }
  };
  return window.innerWidth > 1000 ? (
    <img
      src={logo}
      className="header-logo"
      onClick={()=>window.location.reload()}
    />
  ) : (
    <div id="nav-icon1" onClick={toogleNavbar}>
      <span />
      <span />
      <span />
    </div>
  );
};

export default HamburgerMenu;
