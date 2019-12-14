import React from "react";
import NavBar from "../navbar/navbar";
import ScrollDown from "../scroll-down-icon/scroll-down-icon";
import PrivacyPolicyNotification from "../privacy-policy/privacy-policy";
import GlobalSnackBar from "../snack-bar/snack-bar";
import TherapistListDetails from "../therapist-list-details/therapist-list-details";
import logoVertical from "../../../../data/images/icons/logo-vertical-big.svg"
import "./landing-page.css";

const LandinPage = props => {
  let landingSentence = props.language.landingSentence;
  return (
    <>
      <GlobalSnackBar {...props} />
      <NavBar {...props} />
      <TherapistListDetails {...props} />
      <ScrollDown />
      <div className="landing-page" id="page-up">
        {window.innerWidth>768?
        <>
        <h3 className="left-sentence">{landingSentence.coverSentenceLeft}</h3>
        <h3 className="right-sentence">{landingSentence.coverSentenceRight}</h3>
        </>:<div className="cover-logo"><img src={logoVertical}/></div>}</div>
      <PrivacyPolicyNotification {...props} />
    </>
  );
};

export default LandinPage;
