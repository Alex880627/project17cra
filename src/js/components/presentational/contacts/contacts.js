import React from "react";
import GoogleMapConfigured from "../google-maps/google-maps-configured";
import contactsIcon from "../../../../data/images/icons/contactsIcon.png";
import logo from "../../../../data/images/icons/logo-horizontal-big.svg";
import exercise from "../../../../data/images/icons/exercise.png";
import "./contacts.css";

const Contacts = props => {
  let contacts = props.language.contacts;
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
            <img src={logo} />
          </div>
          <p>{contacts["contacts info"].address}</p>
          <p>{contacts["contacts info"].city}</p>
          <p>
            {contacts["contacts info"].ringbell}:{" "}
            {contacts["contacts info"]["ringbell number"]}
          </p>
          <p>
            <span onClick={props.showEmail}>
              {contacts["contacts info"].email}
            </span>
          </p>
          <img className="exercise-picture" src={exercise} />
        </div>
        <GoogleMapConfigured />
      </div>
    </div>
  );
}

export default Contacts;
