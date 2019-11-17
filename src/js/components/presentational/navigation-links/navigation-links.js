import React from "react";
import treatmentsIcon from "../../../../data/images/icons/treatments-icon-white.png";
import contactsIcon from "../../../../data/images/icons/contactsIcon-white.png";
import therapists from "../../../../data/images/icons/therapists.png";
import walletIcon from "../../../../data/images/icons/wallet-icon-white.png";
import groupIcon from "../../../../data/images/icons/group-icon.png";
import mail from "../../../../data/images/icons/mail-icon-white.png";

const Scroll = require("react-scroll");
const scroller = Scroll.scroller;

const NavigationLinks = (props) => {
  let navbar = props.language.navbar;
  const link = element => {
    scroller.scrollTo(element, {
      duration: 400,
      smooth: "easeInOutExpo",
      offset: 0
    });
  };
  return (
    <div
      className="navigation"
      onMouseEnter={() => {
        console.log(props);
        props.setBlur();
      }}
      onMouseLeave={() => {
        props.unsetBlur();
      }}
    >
      <a
        onClick={() => {
          link("colleagues");
        }}
      >
        <img src={therapists}/>
        {navbar.colleagues}
      </a>
      <a
        onClick={() => {
          link("treatments");
        }}
      ><img src={treatmentsIcon}/>
        {navbar["treatments"]}
      </a>
      <a
        onClick={() => {
          link("prices");
        }}
      ><img src={walletIcon}/>
        {navbar.prices}
      </a>
      <a
        onClick={() => {
          link("group sessions");
        }}
      ><img src={groupIcon}/>
        {navbar["group sessions"]}
      </a>
      <a
        onClick={() => {
          link("contacts");
        }}
      ><img src={contactsIcon}/>
        {navbar.contacts}
      </a>
      <a onClick={props.showEmail}>
      <img src={mail}/>
      {navbar.contactUs}</a>
    </div>
  );
};

export default NavigationLinks;
