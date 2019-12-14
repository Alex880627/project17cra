import React from "react";
import coverBig from "../../../../data/images/cover-big.jpeg";
import coverMobile from "../../../../data/images/cover-mobile.jpg";
import "./cover-pic.css";

const CoverPic = props => {
  let coverPic = coverBig;
  const screenRatio = () => window.innerWidth / window.innerHeight;
  const isBigSreen = () => window.innerWidth / window.innerHeight > 1.765;
  let ratio = 1.765;
  if(screenRatio()<1){
    ratio=1;
    coverPic=coverMobile;
  }

  return (
    <div className={`cover-img ${props.blur ? "blur-img" : ""}`}>
      <img
        src={coverPic}
        style={
          isBigSreen()
            ? { width: window.screen.width }
            : { width: window.innerHeight * ratio, height: window.innerHeight  }
        }
      />
    </div>
  );
};

export default CoverPic;
