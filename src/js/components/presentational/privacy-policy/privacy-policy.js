import React, { useState, useEffect } from "react";
import privacyPdf from "../../../../data/privacy-policy/privacy-policy.pdf"
import { useSelector } from "react-redux";
import "./privacy-policy.css";

const PrivacyPolicyComp = () => {
  const storage = window.localStorage;
  const policy = useSelector(state=>state.changeLanguage.language["privacy policy"])

  const [show, setShow] = useState(false);
  useEffect(() => {
    const time = storage.getItem('acceptedPrivacyTime');
    if(time===null){
      setShow(true);
    }else if((Date.now()-time)<43200000){
      setShow(false);
    }else{
      setShow(true);
    }
  }, [storage]);
  return (
      <div className="privacy-policy" style={!show? {bottom: "-60%", transition: 'bottom 1.8s'}:null}>
      <p>
        {`${policy.sentence} `}
        <a href={privacyPdf} target="blank">{`${policy.link}`}</a>
        {`.`}
        <button onClick={()=>{
          setShow(false);
          storage.setItem('acceptedPrivacyTime', Date.now());
        }}>{policy.button}</button>
      </p>
    </div>
  );
};

export default PrivacyPolicyComp;
