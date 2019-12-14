import React from "react";
import groupSessionDates from "../../../../data/languages/mock-server-data.json";
import groupIcon from "../../../../data/images/icons/group-icon.png";
import "./group-sessions.css";

const GroupSessionsContainer = props => {
  if(props.groupSessionDates<1){
    props.getGroupSessionDates();
  }
  const groupSessionDates = [...props.groupSessionDates];
  let groupSessions = props.language["group sessions"];

  const makeMultiArrayFromDataByHours = objArray => {
    objArray.sort((a, b) => parseFloat(a.hour) - parseFloat(b.hour));
    let resultArr = [];
    let objOfHours = {};
    objArray.forEach(element =>
      objOfHours[element.hour] === undefined
        ? (objOfHours[element.hour] = "0")
        : null
    );
    for (let a = 0; a < Object.keys(objOfHours).length; a++) {
      let newArr = [];
      for (let i = 0; i < objArray.length; i++) {
        if (Object.keys(objOfHours)[a] === objArray[i].hour) {
          newArr.push(objArray[i]);
        }
      }
      resultArr.push(newArr);
    }
    return resultArr;
  };
  return (
    <>
      <div className="group-sessions-wrapper">
        <div className="heading">
          <h3 style={{ animation: "fadeInRightDown 2s ease" }}>{groupSessions["group sessions title"]}</h3>
          <img style={{ animation: "fadeInLeftDown 2s ease" }} src={groupIcon} alt="time table icon" />
        </div>
        <div className="group-sessions-description">
          <p>{groupSessions.description}</p>
          <h5>{groupSessions.interval}</h5>
        </div>
        <div className="group-sessions-table-wrapper">
        <div className="group-sessions-table">
          <div className="table-header">
            <div className="table-element header" />
            {Object.entries(groupSessions.days).map(element => {
              return (
                <div className="table-element header" key={element[0]}>
                  {element[1]}
                </div>
              );
            })}
          </div>
          {makeMultiArrayFromDataByHours(groupSessionDates).map(
            element => {
              return (
                <div className="table-row" key={`${Math.random()}`}>
                  <div className="table-element"><h3>{element[0].hour}</h3></div>
                  {Object.keys(groupSessions.days).map(day => {
                    const filteredTableData = element.filter(data => {
                      return data.day === day;
                    });
                    return filteredTableData.length !== 0 ? (
                      <div className="table-element" key={`${Math.random()}`}>
                        {" "}
                        <h3>{filteredTableData[0].type}</h3>
                        <p>
                          <span>(</span>
                          <span>{filteredTableData[0].therapist}</span>
                          <span>)</span>
                        </p>
                      </div>
                    ) : (
                      <div className="table-element" key={`${Math.random()}`} /> // eslint-disable-line no-use-before-define
                    );
                  })}
                </div>
              );
            }
          )}
          </div>
        </div>
      </div>
    </>
  );
};

export default GroupSessionsContainer;
