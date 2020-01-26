import React from "react";
import { useSelector } from "react-redux";
import "./footer.css";
import NavigationLinks from "../navigation-links/navigation-links";
import privacyPdf from "../../../../data/privacy-policy/privacy-policy.pdf";

const FooterComp = () => {
  let footer = useSelector(state => state.changeLanguage.language.footer);
  return (
    <div className="footer-wrapper">
      <div className="pre-footer">
        <NavigationLinks />
        {/* <div>
          Icons made by{" "}
          <a href="https://www.flaticon.com/authors/freepik" title="Freepik">
            Freepik
          </a>{" "}
          from{" "}
          <a href="https://www.flaticon.com/" title="Flaticon">
            www.flaticon.com
          </a>
        </div> */}
         <a href={privacyPdf} target="blank">
          {footer["privacy policy"]}
        </a> 
      </div>
      <div className="footer">
        <p>{"©2019 Studio 17 - "+footer.copyright}</p>
      </div>
    </div>
  );
};

export default FooterComp;
