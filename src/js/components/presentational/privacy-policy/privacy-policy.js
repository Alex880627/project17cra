import React, { useState, useEffect } from "react";
import privacyPdf from "../../../../data/privacy-policy/privacy-policy.pdf"
import "./privacy-policy.css";

if (process.env.NODE_ENV !== 'production') {
  const whyDidYouRender = require('@welldone-software/why-did-you-render');
  whyDidYouRender(React);
}


const PrivacyPolicyComp = React.memo( props => {
  const storage = window.localStorage;
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
  let policy=props.language["privacy policy"];
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
});

PrivacyPolicyComp.whyDidYouRender = true;

export default PrivacyPolicyComp;
