import React, {  useRef } from "react";
import useOnScreen from "../../../hooks/useScreen";
import therapists from "../../../../data/images/icons/therapists.png";
import pic1 from "../../../../data/images/therapists/pic1.jpg";
import pic2 from "../../../../data/images/therapists/pic2.jpg";
import pic3 from "../../../../data/images/therapists/pic3.jpg";
import pic1hover from "../../../../data/images/therapists/pic1hover.jpg";
import pic2hover from "../../../../data/images/therapists/pic2hover.jpg";
import pic3hover from "../../../../data/images/therapists/pic3hover.jpg";
import Scroll from "react-scroll";
import TherapistListDetails from "../therapist-list-details/therapist-list-details";
import "./therapist-list.css";

const TherapistList = props => {
  const Link = Scroll.Element;
  let collagues = props.language.collagues;
  const picArray = [pic1, pic2, pic3];
  const picArrayHover = [pic1hover, pic2hover, pic3hover];
  return (
    <>
      <div className="therapist-wrapper" id="colleagues">
        <Link name="colleagues"></Link>
        <div className="heading" >
          <h3 style={{ animation: "fadeInRightDown 2s ease" }}>{collagues.collagues}</h3>
          <img style={{ animation: "fadeInLeftDown 2s ease" }} src={therapists} alt="therapist icon" />
        </div>
        <div className="therapist-pictures" style={{animation: "fadeInRightDown 2s ease"}}>
          {picArray.map((element, index) => {
            return (
              <Therapists
                element={element}
                index={index}
                picArrayHover={picArrayHover}
                collagues={collagues}
                showTherapistDetails={props.showTherapistDetails}
              />
            );
          })}
        </div>
      </div>
      <TherapistListDetails {...props} />
    </>
  );
};

const Therapists = ({ element, index, picArrayHover, collagues, showTherapistDetails }) => {
  let ref = useRef(null);
  let isOnScreen = useOnScreen(ref);
  return (
    <div className={isOnScreen && window.innerWidth<768? "therapist therapist-mobile-view":"therapist"} ref={ref} key={element}>
      <img
        key={`${element} image`}
        src={element}
        onMouseOver={e => {
          e.currentTarget.src = picArrayHover[index];
        }}
        onMouseLeave={e => (e.currentTarget.src = element)}
        id={collagues.therapists[index].name}
        onClick={() => {
          showTherapistDetails(collagues.therapists[index].name);
        }}
        alt="studio 17 therapist"
      />
      <div className="therapist-info" key={`${element} info`}>
        <h4>{collagues.therapists[index].name}</h4>
        <p>{collagues.therapists[index].occupation}</p>
        <button>{collagues.details}</button>
      </div>
    </div>
  );
};



export default TherapistList;
