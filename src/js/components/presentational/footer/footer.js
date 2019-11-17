import React from "react";
import './footer.css';
import privacyPdf from "../../../../data/privacy-policy/privacy-policy.pdf"

const FooterComp = props => {
  let footer = props.language.footer;
  let contacts = props.language.contacts;
  return (
    <div className="footer-wrapper">
     <p>{footer.name}</p>
     <p>{contacts["contacts info"].address}</p>
     <p>{contacts["contacts info"].email}</p>
      <div className="footer">
        <p>{"@2019 Studio 17"}</p>
        <p>{footer.copyright}</p>
        <a href={privacyPdf} target="blank">{footer["privacy policy"]}</a>
      </div>
    </div>
  );
};

export default FooterComp;
