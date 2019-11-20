import React, { useRef, useEffect, useState } from "react";
import treatmentsIcon from "../../../../data/images/icons/treatments-icon.png";
import "./treatments-list.css";

const TreatementDropdown = ({ element }) => {
  const [open, setOpen] = useState(false);
  let treatmentRef = useRef(null);
  useEffect(() => {
    if (!treatmentRef.current) {
      treatmentRef.current = true;
    } else {
      treatmentRef.current.style.height === "3em"
        ? setOpen(false)
        : setOpen(true);
    }
  });

  const changeHeight = () => {
    let currentElement = treatmentRef.current;
    if (currentElement) {
      if (currentElement.style.height === "3em") {
        open ? setOpen(false) : setOpen(true);
        currentElement.style.height = `${(currentElement.scrollHeight / 100) *
          6}em`;
        currentElement.style.borderBottom = "1px solid rgb(143, 143, 143)";
        currentElement.style.margin = "13px";
      } else {
        currentElement.style.height = "3em";
        currentElement.style.margin = "0px";
        currentElement.style.borderBottom = "0px solid black";
        setOpen(false);
      }
      currentElement.parentNode.childNodes.forEach(element => {
        element.childNodes[0].style.transform = "scaleY(1)";
        return element !== treatmentRef.current
          ? ((element.style.height = "3em"),
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
        height: "3em",
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
            ? { transform: "scaleY(-1)", transition: "transform 0.1s" }
            : { transform: "scaleY(1)", transition: "transform 0.1s" }
        }
      />
      <h3 style={{ animation: "fadeInLeft 2s ease" }}>{element.title}</h3>
      <p>{element.description}</p>
    </div>
  );
};

const TreatmentsList = props => {
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
          alt="treatments icon"
        />
      </div>
      <div className="treatments-wrapper">
        {treatments["treatments list"].map(element => {
          return <TreatementDropdown key={element.title} element={element} />;
        })}
      </div>
    </div>
  );
};

export default TreatmentsList;
