import React from "react";
import GoogleMapConfigured from "../google-maps/google-maps-configured";
import Galery from "../img-galery/img-galery";
import contactsIcon from "../../../../data/images/icons/contactsIcon.png";
import './contacts.css';

const Contacts = props => {
  let contacts = props.language.contacts;
  return (
    <div className="contacts-wrapper">
      <div className="contacts-heading">
        <h3>{contacts["contacts title"]}</h3>
        <img src={contactsIcon} alt="contacts icon" />
      </div>
      <div className="flex-wrapper">
        <div className="address-details">
          <h4>{contacts["contacts info"].name}</h4>
          <p>{contacts["contacts info"].address}</p>
          <p>{contacts["contacts info"].city}</p>
          <p>
            {contacts["contacts info"].ringbell}:{" "}
            {contacts["contacts info"]["ringbell number"]}
          </p>
          <p>{"Email: "}<span onClick={props.openModal}>{contacts["contacts info"].email}</span></p>
        </div>
        <GoogleMapConfigured />
      </div>
      <Galery/>
    </div>
  );
};

export default Contacts;
