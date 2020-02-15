import React from "react";
import logo from "../../../../data/images/icons/logo-horizontal-big.svg";
import { useSelector, useDispatch } from "react-redux";
import { showBugreportAction } from "../../../actions/bugreport-action";
import "./footer.css";
import NavigationLinks from "../navigation-links/navigation-links";
import privacyPdf from "../../../../data/privacy-policy/privacy-policy.pdf";

const FooterComp = () => {
  const dispatch = useDispatch();
  const footer = useSelector(state => state.changeLanguage.language.footer);
  return (
    <div className="footer-wrapper">
      <div className="pre-footer">
        <NavigationLinks />
        <div className="aditional-description-with-icons">
          <div className="privacy-policy-footer">
            <i class="fas fa-lock fa-icon-style"></i>
            <a href={privacyPdf} target="blank" className="privacy-policy-link">
              {footer["privacy policy"]}
            </a>
          </div>
          <div className="icons-credit">
            <i class="fas fa-icons fa-icon-style"></i>
            {footer.icons}{" "}
            <a
              href="https://www.flaticon.com/authors/freepik"
              target="blank"
              title="Freepik"
            >
              Freepik
            </a>{" "}
            {footer["icons-made"]}{" "}
          </div>
          <div className="error-report">
            <i class="fas fa-bug fa-icon-style"></i>
            <p
              onClick={() => {
                dispatch(showBugreportAction());
              }}
            >
              {footer["bugreport"]}
            </p>
          </div>
          <div className="studio17-logo-footer"></div>
        </div>
       
      </div>
      <div className="footer">
        <p>{"©2019 Studio 17 - " + footer.copyright}</p>
      </div>
    </div>
  );
};

export default FooterComp;
