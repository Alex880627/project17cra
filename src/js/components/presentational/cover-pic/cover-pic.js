import React from "react";
import pic7 from "../../../../data/images/pic7.jpg";
import "./cover-pic.css";

const CoverPic = props => {
  const screenRatio = () => window.screen.width / window.screen.height;

  const isBigSreen = () => window.innerWidth / window.innerHeight > 1.765;
  return (
    <div className={`cover-img ${props.blur ? "blur-img" : ""}`}>
      <img
        src={pic7}
        style={
          isBigSreen
            ? { width: window.screen.width }
            : { width: window.screen.height * screenRatio() }
        }
      />
    </div>
  );
};

export default CoverPic;
