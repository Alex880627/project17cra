import React from "react";
import NavBar from "../navbar/navbar";
import PrivacyPolicyNotification from "../privacy-policy/privacy-policy";
import GlobalSnackBar from "../snack-bar/snack-bar";
import TherapistListDetails from "../therapist-list-details/therapist-list-details";
import "./landing-page.css";

const LandinPage = props => {
  let landingSentence = props.language.landingSentence;
  return (
    <>
      <GlobalSnackBar {...props} />
      <NavBar {...props} />
      <TherapistListDetails {...props} />
      <div className="landing-page" id="page-up">
        <h3 className="left-sentence">{landingSentence.coverSentenceLeft}</h3>
        <h3 className="right-sentence">{landingSentence.coverSentenceRight}</h3>
      </div>
      <PrivacyPolicyNotification {...props} />
    </>
  );
};

export default LandinPage;
