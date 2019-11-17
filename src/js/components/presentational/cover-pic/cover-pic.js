import React from "react";
import pic7 from "../../../../data/images/pic7.jpg";
import './cover-pic.css';

const CoverPic = (props) => {
  console.log(props);
  
  return (
    <div
      className={`cover-img ${props.blur? "blur-img":""}`}
      style={{ width: window.innerWidth <= 1275 ? "1275px" : "100%" }}
    >
      <img src={pic7} />
    </div>
  );
};

export default CoverPic;
