import React, { useRef } from "react";
import Chip from "@material-ui/core/Chip";
import phone from "../../../../data/images/icons/phone.png";
import mail from "../../../../data/images/icons/mail-white.png";
import swipeableModal from "../swipeable-drawer/swipeable-drawer";

const ThreapistDetailsComp = props => {
  let therapistsObject = {};
  function importAll(r) {
    return r.keys().forEach((e, i) => {
      therapistsObject[props.language.collagues.therapists[i]["nick name"]] = r(
        e
      );
    });
  }
  importAll(
    require.context(
      "../../../../data/images/therapists/hover",
      false,
      /\.(png|jpe?g|svg|jpg)$/
    )
  );
  let therapistName = props.therapistName;
  let filteredArray = props.language.collagues.therapists.filter(element => {
    return element.name === therapistName;
  });
  let therapist = filteredArray[0];

  const getTherapistPic = () => {
    return therapistsObject[therapist["nick name"]];
  };
  const ref = useRef(null)

  return (
    <div className="therapist-details" ref={ref} >
      <div className="therapist-heading">
        <div>
          <h3>{therapist.name}</h3>
          <p>{`${therapist.occupation}`}</p>
        </div>
        <img src={getTherapistPic()} />
      </div>
      <div className="content-box">
        <div className="details">
          <div className="therapist-techniques">
            {therapist.techniques.data.map(techniq => {
              return <Chip variant="outlined" size="small" label={techniq} />;
            })}
          </div>
          <div className="therapist-contacts">
            <div className="phone">
              <div>
                <img src={phone} />
              </div>
              <a href={`tel: +36${therapist["phone number"]}`}>
                {therapist["phone number"]}
              </a>
            </div>
            <div className="email">
              <div>
                <img src={mail} />
              </div>
              <p
                onClick={() => {
                  props.showEmail();
                }}
              >
                {therapist["email"]}
              </p>
            </div>
          </div>
        </div>
      </div>
      <p className="therapist-content">{therapist.details}</p>
    </div>
  );
};

const TherapistListDetails = swipeableModal(ThreapistDetailsComp, "therapistDetails");

export default TherapistListDetails;
