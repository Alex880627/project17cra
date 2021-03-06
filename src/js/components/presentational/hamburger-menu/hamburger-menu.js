import React from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  openSideBarAction,
  closeSideBarAction
} from "../../../actions/toogle-side-bar-action";
import "./hamburger-menu.css";
import logo from "../../../../data/images/icons/logo-small.png";

const HamburgerMenu = () => {
  const sideBar = useSelector(state => state.toogleSideBar.sideBar);
  const dispatch = useDispatch();
  const toogleNavbar = () => {
    if (sideBar === true) {
      dispatch(closeSideBarAction());
    } else {
      dispatch(openSideBarAction());
    }
  };
  return window.innerWidth > 1000 ? (
    <img
      src={logo}
      className="header-logo"
      onClick={() => window.location.reload()}
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
