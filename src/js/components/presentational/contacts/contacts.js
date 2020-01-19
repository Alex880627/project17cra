import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { showEmailAction } from "../../../actions/email-action";
import GoogleMapConfigured from "../google-maps/google-maps-configured";
import contactsIcon from "../../../../data/images/icons/contactsIcon.png";
import logo from "../../../../data/images/icons/logo-horizontal-big.svg";
import exercise from "../../../../data/images/icons/exercise.png";
import "./contacts.css";

const Contacts = () => {
  const contacts = useSelector(state=> state.changeLanguage.language.contacts);
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
            <img src={logo} alt="studio17 logo"/>
          </div>
          <p>{contacts["contacts info"].address}</p>
          <p>{contacts["contacts info"].city}</p>
          <p>
            {contacts["contacts info"].ringbell}:{" "}
            {contacts["contacts info"]["ringbell number"]}
          </p>
          <p>
            <span onClick={()=> {dispatch(showEmailAction())}}>
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
