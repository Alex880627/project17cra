import React from "react";
import "./cover-pic.css";

if (process.env.NODE_ENV !== "production") {
  const whyDidYouRender = require("@welldone-software/why-did-you-render");
  whyDidYouRender(React);
}

const CoverPic = React.memo(props => {
  const isSmallScreen = () => window.innerWidth / window.innerHeight < 1.35;

  return (
    <div
      className={`cover-img ${props.blur ? "blur-img" : ""} ${
        isSmallScreen() ? "cover-mobile" : "cover-desktop"
      }`}
    ></div>
  );
});
CoverPic.whyDidYouRender = true;

export default CoverPic;
