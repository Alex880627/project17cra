import React, { useRef, useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { showTherapistDetails } from "../../../actions/therapist-details-action";
import treatmentsIcon from "../../../../data/images/icons/treatments-icon.png";
import "./treatments-list.css";

const TreatementDropdown = ({ element }) => {
  const treatments = useSelector(state=> state.changeLanguage.language.treatments)
  const therapists = useSelector(state=> state.changeLanguage.language.collagues.therapists)
  const dispatch = useDispatch();
  const [open, setOpen] = useState(false);
  let treatmentRef = useRef(null);
  useEffect(() => {
    if (!treatmentRef.current) {
      treatmentRef.current = true;
    } else {
      treatmentRef.current.style.height === "3.2rem"
        ? setOpen(false)
        : setOpen(true);
    }
  });

  const changeHeight = () => {
    let currentElement = treatmentRef.current;
    console.log(currentElement.id);
    
    if (currentElement) {
      if (currentElement.style.height === "3.2rem") {
        open ? setOpen(false) : setOpen(true);
        currentElement.style.height = `${(currentElement.scrollHeight / 100) *
          6.5}rem`;
        currentElement.style.borderBottom = "1px solid rgb(143, 143, 143)";
        currentElement.style.margin = "13px";
      } else {
        currentElement.style.height = "3.2rem";
        currentElement.style.margin = "0px";
        currentElement.style.borderBottom = "0px solid black";
        setOpen(false);
      }
      currentElement.parentNode.childNodes.forEach(element => {
        element.childNodes[0].style.transform = "scaleY(1)";
        return element !== treatmentRef.current
          ? ((element.style.height = "3.2rem"),
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
      key={element.title}
      id={element.title}
      style={{
        height: "3.2rem",
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
          {treatments["provider sentence"]}
        </p>
        <div className="therapist-details-list">
          {element.therapist.map(therapist => {
            return (
              <p
                key={therapist}
                onClick={e => {
                  e.stopPropagation();
                  const therapistObjectFromNickname = therapists.filter(
                    e => {
                      return e["nick name"] === therapist;
                    }
                  );
                  dispatch(showTherapistDetails(
                    therapistObjectFromNickname[0].name
                  ));
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
};

const TreatmentsList = props => {
  const treatments = useSelector(state=> state.changeLanguage.language.treatments)
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
            />
          );
        })}
      </div>
    </div>
  );
};

export default TreatmentsList;
