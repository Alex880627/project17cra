import React from "react";
import { useSelector, useDispatch } from "react-redux";
import treatmentsIcon from "../../../../data/images/icons/treatments-icon-white.png";
import contactsIcon from "../../../../data/images/icons/contactsIcon-white.png";
import therapists from "../../../../data/images/icons/therapists.png";
import walletIcon from "../../../../data/images/icons/wallet-icon-white.png";
import groupIcon from "../../../../data/images/icons/group-icon.png";
import mail from "../../../../data/images/icons/mail-icon-white.png";
import {
  setBlurAction,
  unsetBlurAction
} from "../../../actions/set-blur-action";
import { showEmailAction } from "../../../actions/email-action";

const Scroll = require("react-scroll");
const scroller = Scroll.scroller;

const NavigationLinks = () => {
  const dispatch = useDispatch();
  const navbar = useSelector(state => state.changeLanguage.language.navbar);
  const header = useSelector(state => state.headerReducer.header);
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
        dispatch(setBlurAction());
      }}
      onMouseLeave={() => {
        dispatch(unsetBlurAction());
      }}
    >
      <a
        className={header === "treatments" ? "underline" : ""}
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
        className={header === "colleagues" ? "underline" : ""}
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
        className={header === "prices" ? "underline" : ""}
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
        className={header === "group sessions" ? "underline" : ""}
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
        className={header === "contacts" ? "underline" : ""}
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
      <a
        onClick={() => {
          dispatch(showEmailAction());
        }}
      >
        <img src={mail} />
        <span>
          {" "}
          {navbar.contactUs}
          <span className="double-arrow">{" »"}</span>
        </span>
      </a>
    </div>
  );
};

export default NavigationLinks;
