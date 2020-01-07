import React, { useRef, useEffect, useState } from "react";
import treatmentsIcon from "../../../../data/images/icons/treatments-icon.png";
import "./treatments-list.css";

if (process.env.NODE_ENV !== "production") {
  const whyDidYouRender = require("@welldone-software/why-did-you-render");
  whyDidYouRender(React);
}

const TreatementDropdown = React.memo(({ element, props }) => {
  const language = props.language;
  const [open, setOpen] = useState(false);
  let treatmentRef = useRef(null);
  useEffect(() => {
    if (!treatmentRef.current) {
      treatmentRef.current = true;
    } else {
      treatmentRef.current.style.height === "2.5em"
        ? setOpen(false)
        : setOpen(true);
    }
  });

  const changeHeight = () => {
    let currentElement = treatmentRef.current;
    if (currentElement) {
      if (currentElement.style.height === "2.5em") {
        open ? setOpen(false) : setOpen(true);
        currentElement.style.height = `${(currentElement.scrollHeight / 100) *
          6.4}em`;
        currentElement.style.borderBottom = "1px solid rgb(143, 143, 143)";
        currentElement.style.margin = "13px";
      } else {
        currentElement.style.height = "2.5em";
        currentElement.style.margin = "0px";
        currentElement.style.borderBottom = "0px solid black";
        setOpen(false);
      }
      currentElement.parentNode.childNodes.forEach(element => {
        element.childNodes[0].style.transform = "scaleY(1)";
        return element !== treatmentRef.current
          ? ((element.style.height = "2.5em"),
            (element.style.margin = "0px"),
            (element.style.borderBottom = "0px solid black"))
          : null;
      });
    }
  };
  return (
    <div
      style={{ animation: "fadeInLeft 2s ease" }}
      className="treatment"
      onClick={changeHeight}
      style={{
        height: "2.5em",
        transition: "all 0.3s",
        cursor: "pointer"
      }}
      ref={treatmentRef}
    >
      <div
        className="load-more"
        style={window.innerWidth > 768 ? { cursor: "pointer" } : null}
        style={
          open === true
            ? { transform: "scaleY(-1)", transition: "transform 0.2s" }
            : { transform: "scaleY(1)", transition: "transform 0.2s" }
        }
      />
      <h3 style={{ animation: "fadeInLeft 2s ease" }}>{element.title}</h3>
      {element.description.map(e => (
        <p>{e}</p>
      ))}
      <div className="choose-therapist-section">
        <p className="provider-question">
          {language.treatments["provider sentence"]}
        </p>
        <div className="therapist-details-list">
          {element.therapist.map(therapist => {
            return (
              <p
                key={therapist}
                onClick={e => {
                  e.stopPropagation();
                  const therapistObjectFromNickname = language.collagues.therapists.filter(
                    e => {
                      return e["nick name"] === therapist;
                    }
                  );
                  props.showTherapistDetails(
                    therapistObjectFromNickname[0].name
                  );
                }}
              >
                {therapist}
              </p>
            );
          })}
        </div>
      </div>
    </div>
  );
});

const TreatmentsList = React.memo( props => {
  let treatments = props.language.treatments;
  return (
    <div className="treatments-section-wrapper">
      <div className="heading">
        <h3 style={{ animation: "fadeInRightDown 2s ease" }}>
          {treatments["treatments title"]}
        </h3>
        <img
          style={{ animation: "fadeInLeftDown 2s ease" }}
          src={treatmentsIcon}
          alt="Kezelések ikon"
        />
      </div>
      <div className="treatments-wrapper">
        {treatments["treatments list"].map(element => {
          return (
            <TreatementDropdown
              element={element}
              props={props}
              key={element.title}
            />
          );
        })}
      </div>
    </div>
  );
});

TreatementDropdown.whyDidYouRender = true;
TreatmentsList.whyDidYouRender = true;

export default TreatmentsList;
