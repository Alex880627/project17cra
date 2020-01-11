import React from "react";
import "./cover-pic.css";
import { useSelector } from "react-redux";

const CoverPic = () => {
  const blur = useSelector(state => state.blurReducer.blur);
  const isSmallScreen = () => window.innerWidth / window.innerHeight < 1.35;

  return (
    <div
      className={`cover-img ${blur ? "blur-img" : ""} ${
        isSmallScreen() ? "cover-mobile" : "cover-desktop"
      }`}
    ></div>
  );
};

export default CoverPic;
