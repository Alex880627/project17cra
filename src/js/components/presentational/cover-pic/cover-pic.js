import React from "react";
import "./cover-pic.css";

const CoverPic = () => {
  const isSmallScreen = () => window.innerWidth / window.innerHeight < 1.35;

  return (
    <div
      className={`cover-img ${
        isSmallScreen() ? "cover-mobile" : "cover-desktop"
      }`}
    ></div>
  );
};

export default CoverPic;
