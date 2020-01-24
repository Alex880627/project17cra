import React from "react";
import { useSelector } from "react-redux";
import "./footer.css";
import privacyPdf from "../../../../data/privacy-policy/privacy-policy.pdf";

const FooterComp = () => {
  let footer = useSelector(state => state.changeLanguage.language.footer);
  return (
    <div className="footer-wrapper">
      <div className="pre-footer">
      
      </div>
      <div className="footer">
        <p>{"@2019 Studio 17"}</p>
        <p>{footer.copyright}</p>
        <a href={privacyPdf} target="blank">
          {footer["privacy policy"]}
        </a>
      </div>
    </div>
  );
};

export default FooterComp;
