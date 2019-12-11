import React from "react";
import pic7 from "../../../../data/images/pic7.jpg";
import './cover-pic.css';

const CoverPic = (props) => {
  return (
    <div
      className={`cover-img ${props.blur? "blur-img":""}`}
    >
      <img src={pic7}  style={{ width: window.screen.width}}/>
    </div>
  );
};

export default CoverPic;
