import React from "react";
import { useSelector } from "react-redux";
import NavBar from "../navbar/navbar";
import ScrollDown from "../scroll-down-icon/scroll-down-icon";
import PrivacyPolicyNotification from "../privacy-policy/privacy-policy";
import GlobalSnackBar from "../snack-bar/snack-bar";
import TherapistListDetails from "../therapist-list-details/therapist-list-details";
import logoVertical from "../../../../data/images/icons/logo-vertical-big.svg";
import GalleryModal from "../img-galery/img-galery";
import giveProps from "../../container/give-props";
import "./landing-page.css";

const GalleryModalWithProps = giveProps(GalleryModal);

const LandinPage = props => {
  const landingSentence = useSelector(state=>state.changeLanguage.language.landingSentence)
  const isBigScreen = () => window.innerWidth > 1000;
  return (
    <>
      <GlobalSnackBar />
      <GalleryModalWithProps />
      <NavBar />
      <TherapistListDetails />
      <ScrollDown />
      <div className="landing-page" id="page-up" role="main" aria-labelledby="treatments">
        {isBigScreen() ? (
          <>
          <div className="cover-sentence-header">
            <h3 className="left-sentence">
              {landingSentence.coverSentenceLeft}
            </h3>
            <h3 className="right-sentence">
              <span className="connect-word">{landingSentence.coverSentenceRight}</span>
              <span>{landingSentence.coverSentenceColored}</span>
            </h3>
          </div>
          <div className="cover-description">
            {landingSentence.coverDescription}
          </div>
          </>
        ) : (
          <div className="cover-logo">
            <img src={logoVertical} alt="Studio17 logo"/>
          </div>
        )}
      </div>
      <PrivacyPolicyNotification {...props} />
    </>
  );
};

export default LandinPage;
