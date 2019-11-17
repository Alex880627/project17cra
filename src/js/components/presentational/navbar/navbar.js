import React, { useEffect, useState } from "react";
import LanguagePicker from "../language-picker/language-picker";
import UpNavButton from "../up-button/up-button";
import NavigationLinks from "../navigation-links/navigation-links";
import EmailSending from "../email-sending/email-sending";
import HamburgerMenu from "../hamburger-menu/hamburger-menu";
import Loader from "../loader/loader";
import CoverPic from "../cover-pic/cover-pic";
import './navbar.css';

const NavBar = props => {
  const [innerWidth, setInnerWidth] = useState(window.innerWidth);
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
  if (innerWidth > 768) {
    props.closeSideBar();
  }
  return (
    <>
      <CoverPic {...props} />
      <nav className="main-navbar">
        <HamburgerMenu {...props} />
        <div />
        {innerWidth > 768 ? <NavigationLinks {...props} /> : null}
        <Loader {...props}/>
        <UpNavButton />
        <EmailSending {...props} />
        <LanguagePicker {...props} />
      </nav>
    </>
  );
};

export default NavBar;
