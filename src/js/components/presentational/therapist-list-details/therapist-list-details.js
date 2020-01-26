import React, { useRef } from "react";
import giveProps from "../../container/give-props";
import { showEmailAction } from "../../../actions/email-action";
import { useSelector, useDispatch } from "react-redux";
import swipeableModal from "../swipeable-drawer/swipeable-drawer";
import modal from "../modal/modal";
import ToolTip from "../tool-tip/tool-tip";

const ThreapistDetailsComp = () => {
  const dispatch = useDispatch();
  const therapists = useSelector(
    state => state.changeLanguage.language.collagues.therapists
  );
  const therapistName = useSelector(
    state => state.therapistReducer.therapistName
  );
  const treatmentsList = useSelector(
    state => state.changeLanguage.language.treatments["treatments list"]
  );
  let therapistsObject = {};
  function importAll(r) {
    return r.keys().forEach((e, i) => {
      therapistsObject[therapists[i]["nick name"]] = r(e);
    });
  }

  importAll(
    require.context(
      "../../../../data/images/therapists/hover",
      false,
      /\.(png|jpe?g|svg|jpg)$/
    )
  );
  let filteredArray = therapists.filter(element => {
    return element.name === therapistName;
  });
  let therapist = filteredArray[0];
  const getTherapistPic = () => {
    return therapistsObject[therapist["nick name"]];
  };
  const ref = useRef(null);

  const getDescriptionFromTechnique = technique => {
    let searchedTechnique = treatmentsList.filter(e =>
      e.title.includes(technique)
    );

    return searchedTechnique.length > 0
      ? searchedTechnique[0]
      : { title: "Huppsz not implemented yet", description: "" };
  };

  
  return (
    <div className="therapist-details" ref={ref}>
      <div className="therapist-heading">
        <div>
          <h3>{therapist.name}</h3>
          <p>
            {`${therapist.occupation}`}
            <span>{therapist.school ? ` ${therapist.school}` : ""}</span>
          </p>
        </div>
        <img src={getTherapistPic()} />
      </div>
      <div className="content-box">
        <div className="details">
          <div className="therapist-techniques">
            {therapist.techniques.data.map(technique => {
              let searchText = technique.split(" ")[0];
              let techniqueObject = getDescriptionFromTechnique(searchText);
              return (
                <>
                  <ToolTip
                    technique={technique}
                    techniqueTitle={techniqueObject.title}
                    description={techniqueObject.description}
                  />
                </>
              );
            })}
          </div>
          <div className="therapist-contacts">
            <div className="phone">
              <div>
                <i class="fas fa-phone-alt white"></i>
              </div>
              <a href={`tel: +36${therapist["phone number"]}`}>
                {therapist["phone number"]}
              </a>
            </div>
            <div className="email">
              <div>
                <i class="fas fa-envelope-open"></i>
              </div>
              <p
                onClick={() => {
                  dispatch(showEmailAction());
                }}
              >
                {therapist["email"]}
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="therapist-content">
        {therapist.details.map(e => {
          return <p>{e}</p>;
        })}
      </div>
    </div>
  );
};

const TherapistListDetails =
  window.innerWidth > 768
    ? giveProps(modal(ThreapistDetailsComp, "therapistDetails"))
    : giveProps(swipeableModal(ThreapistDetailsComp, "therapistDetails"));

export default TherapistListDetails;
