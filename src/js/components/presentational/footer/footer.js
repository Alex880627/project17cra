import React from "react";
import "./footer.css";
import logoHorizontal from "../../../../data/images/icons/logo-horizontal-big.svg";
import Galery from "../img-galery/img-galery";
import privacyPdf from "../../../../data/privacy-policy/privacy-policy.pdf";

const FooterComp = props => {
  let footer = props.language.footer;
  let contacts = props.language.contacts;
  return (
    <div className="footer-wrapper">
      <div className="pre-footer">
        <div className="contact-info-footer">
          <div className="footer-logo">
            <img src={logoHorizontal} />
          </div>
        </div>
        <div className="pictures-galery">
          <Galery />
        </div>
      </div>
      <div className="footer-divider" />
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
