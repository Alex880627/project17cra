import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { showEmailAction } from "../../../actions/email-action";
import GoogleMapConfigured from "../google-maps/google-maps-configured";
import contactsIcon from "../../../../data/images/icons/contactsIcon.png";
import logo from "../../../../data/images/icons/logo-horizontal-big.svg";
import exercise from "../../../../data/images/icons/exercise.png";
import "./contacts.css";

const Contacts = () => {
  const contacts = useSelector(state => state.changeLanguage.language.contacts);
  const dispatch = useDispatch();
  return (
    <div className="contacts-wrapper">
      <div className="contacts-heading">
        <h3 style={{ animation: "fadeInRightDown 2s ease" }}>
          {contacts["contacts title"]}
        </h3>
        <img
          style={{ animation: "fadeInLeftDown 2s ease" }}
          src={contactsIcon}
          alt="contacts icon"
        />
      </div>
      <div className="flex-wrapper">
        <div className="address-details">
          <div className="logo-wrapper">
            <img src={logo} alt="studio17 logo" />
          </div>
          <p className="icons-with-text">
            <span className="fa-icon-wrapper">
              <i class="fas fa-map-marker-alt fa-icon-style"></i>
            </span>
            <span>
              <p>{contacts["contacts info"].city}</p>
              <p>{contacts["contacts info"].address}</p>
            </span>
          </p>
          <p className="icons-with-text">
            <span className="fa-icon-wrapper">
              <i className="fas fa-bell fa-layers fa-icon-style"></i>
            </span>
            {contacts["contacts info"].ringbell}:{" "}
            {contacts["contacts info"]["ringbell number"]}
          </p>
          <p className="icons-with-text">
            <span className="fa-icon-wrapper">
              <i className="fas fa-envelope-open fa-icon-style"></i>
            </span>
            <span
              onClick={() => {
                dispatch(showEmailAction());
              }}
            >
              {contacts["contacts info"].email}
            </span>
          </p>
          <p className="icons-with-text">
            <span className="fa-icon-wrapper">
              <i className="fab fa-facebook-f fa-icon-style"></i>
            </span>
            <a
              href="https://www.facebook.com/Studio17gyogytorna/"
              target="_blank"
            >
              {contacts["contacts info"].facebook}
            </a>
          </p>
          <img className="exercise-picture" src={exercise} />
        </div>
        <GoogleMapConfigured />
      </div>
    </div>
  );
};

export default Contacts;
