import React from "react";
import closeButton from "../../../../data/images/icons/close-button.png";
import "./close-button.css";

const CloseButton = ({ hideFunction }) => {
  return (
    <div
      onClick={hideFunction}
      className="close-button"
      style={{ backgroundImage: `url(${closeButton})` }}
    />
  );
};

export default CloseButton;
