import React, { useEffect, useState, useRef } from "react";
import LanguagePicker from "../language-picker/language-picker";
import UpNavButton from "../up-button/up-button";
import NavigationLinks from "../navigation-links/navigation-links";
import EmailSending from "../email-sending/email-sending";
import HamburgerMenu from "../hamburger-menu/hamburger-menu";
import Loader from "../loader/loader";
import logoAndText from "../../../../data/images/icons/logo-small.png";
import CoverPic from "../cover-pic/cover-pic";
import useOnScreen from "../../../hooks/useScreen";
import "./navbar.css";

const NavBar = props => {
  const [innerWidth, setInnerWidth] = useState(window.innerWidth);
  const ref = useRef(null)
  const onScreen = useOnScreen(ref, 0.01);
  useEffect(() => {
    window.addEventListener("resize", () => {
      setInnerWidth(window.innerWidth);
    });
    return () => {
      window.removeEventListener("resize", () => {
        setInnerWidth(window.innerWidth);
      });
    };
  }, []);
  if (innerWidth > 1000) {
    props.closeSideBar();
  }
  return (
    <>
      <CoverPic {...props}/>
      <nav className={onScreen? "main-navbar-shrink":"main-navbar"}>
        <HamburgerMenu {...props} />
        {innerWidth > 1000 ? (
          <NavigationLinks {...props} />
        ) : (
          <img id="front-mobile-logo" src={innerWidth > 768? logoAndText:null} />
        )}

        <Loader {...props} />
        <UpNavButton />
        <EmailSending {...props} />
        <LanguagePicker {...props} />
      </nav>
      <div className="helperDiv" ref={ref}></div>
    </>
  );
};

export default NavBar;
