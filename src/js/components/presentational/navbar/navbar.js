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

if (process.env.NODE_ENV !== 'production') {
  const whyDidYouRender = require('@welldone-software/why-did-you-render');
  whyDidYouRender(React);
}

const NavBar = React.memo(() => {
  const [innerWidth, setInnerWidth] = useState(window.innerWidth);
  const ref = useRef(null);
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
  return (
    <>
      <CoverPic />
      <nav className={onScreen ? "main-navbar-shrink" : "main-navbar"}>
        <HamburgerMenu />
        {innerWidth > 1000 ? (
          <NavigationLinks />
        ) : innerWidth > 768 ? (
          <img id="front-mobile-logo" src={logoAndText} alt="studio17 logo" />
        ) : null}

        <Loader />
        <UpNavButton onScreen={onScreen}/>
        <EmailSending />
        <LanguagePicker />
      </nav>
      <div className="helperDiv" ref={ref}></div>
    </>
  );
});

NavBar.whyDidYouRender= true;

export default NavBar;
