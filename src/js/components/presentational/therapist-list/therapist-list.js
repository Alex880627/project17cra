import React, { useRef } from "react";
import useOnScreen from "../../../hooks/useScreen";
import therapists from "../../../../data/images/icons/therapists.png";
import "./therapist-list.css";

function importAll(r) {
  return r.keys().map(e => {
    return r(e);
  });
}

const picArray = importAll(
  require.context(
    "../../../../data/images/therapists/normal/",
    false,
    /\.(png|jpe?g|svg|jpg)$/
  )
);

const picArrayHover = importAll(
  require.context(
    "../../../../data/images/therapists/hover/",
    false,
    /\.(png|jpe?g|svg|jpg)$/
  )
);

const TherapistList = props => {
  let collagues = props.language.collagues;
  return (
    <>
      <div className="therapist-wrapper">
        <div className="heading">
          <h3 style={{ animation: "fadeInRightDown 2s ease" }}>
            {collagues.collagues}
          </h3>
          <img
            style={{ animation: "fadeInLeftDown 2s ease" }}
            src={therapists}
            alt="therapist icon"
          />
        </div>
        <div className="therapist-pictures">
          {picArray.map((element, index) => {
            return (
              <Therapists
                key={element}
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
    </>
  );
};

const Therapists = ({
  element,
  index,
  picArrayHover,
  collagues,
  showTherapistDetails
}) => {
  let ref = useRef(null);
  let isOnScreen = useOnScreen(ref);
  return (
    <div
      className={
        isOnScreen && window.innerWidth < 768
          ? "therapist therapist-mobile-view"
          : "therapist"
      }
      ref={ref}
      key={element}
    >
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
      <div
        className="therapist-info"
        key={`${element} info`}
        style={{ animation: "fadeInUp 1s ease" }}
      >
        <h4>{collagues.therapists[index].name}</h4>
        <p>{collagues.therapists[index].occupation}</p>
        <button>{collagues.details}</button>
      </div>
    </div>
  );
};

export default TherapistList;
