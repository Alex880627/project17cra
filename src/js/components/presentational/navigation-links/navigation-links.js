import React from "react";
import treatmentsIcon from "../../../../data/images/icons/treatments-icon-white.png";
import contactsIcon from "../../../../data/images/icons/contactsIcon-white.png";
import therapists from "../../../../data/images/icons/therapists.png";
import walletIcon from "../../../../data/images/icons/wallet-icon-white.png";
import groupIcon from "../../../../data/images/icons/group-icon.png";
import mail from "../../../../data/images/icons/mail-icon-white.png";

if (process.env.NODE_ENV !== 'production') {
  const whyDidYouRender = require('@welldone-software/why-did-you-render');
  whyDidYouRender(React);
}

const Scroll = require("react-scroll");
const scroller = Scroll.scroller;

const NavigationLinks = React.memo(props => {
  let navbar = props.language.navbar;
  const link = element => {
    scroller.scrollTo(element, {
      duration: 0,
      smooth: "easeInOutExpo",
      offset: -53
    });
  };
  return (
    <div
      className="navigation"
      onMouseEnter={() => {
        props.setBlur();
      }}
      onMouseLeave={() => {
        props.unsetBlur();
      }}
    >
      <a
        className={props.header === "treatments" ? "underline" : ""}
        onClick={() => {
          link("treatments");
        }}
      >
        <img src={treatmentsIcon} />
        <span>
          {navbar["treatments"]}
          <span className="double-arrow">{" »"}</span>
        </span>
      </a>
      <a
        className={props.header === "colleagues" ? "underline" : ""}
        onClick={() => {
          link("colleagues");
        }}
      >
        <img src={therapists} />
        <span>
          {navbar.colleagues}
          <span className="double-arrow">{" »"}</span>
        </span>
      </a>
      <a
        className={props.header === "prices" ? "underline" : ""}
        onClick={() => {
          link("prices");
        }}
      >
        <img src={walletIcon} />
        <span>
          {navbar.prices}
          <span className="double-arrow">{" »"}</span>
        </span>
      </a>
      <a
        className={props.header === "group sessions" ? "underline" : ""}
        onClick={() => {
          link("group sessions");
        }}
      >
        <img src={groupIcon} />
        <span>
          {" "}
          {navbar["group sessions"]}
          <span className="double-arrow">{" »"}</span>
        </span>
      </a>
      <a
        className={props.header === "contacts" ? "underline" : ""}
        onClick={() => {
          link("contacts");
        }}
      >
        <img src={contactsIcon} />
        <span>
          {" "}
          {navbar.contacts}
          <span className="double-arrow">{" »"}</span>
        </span>
      </a>
      <a onClick={props.showEmail}>
        <img src={mail} />
        <span>
          {" "}
          {navbar.contactUs}
          <span className="double-arrow">{" »"}</span>
        </span>
      </a>
    </div>
  );
});

NavigationLinks.whyDidYouRender = true

export default NavigationLinks;
