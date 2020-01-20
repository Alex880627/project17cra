import React from "react";
import { useSelector } from "react-redux";
import "./footer.css";
import privacyPdf from "../../../../data/privacy-policy/privacy-policy.pdf";

function importAll(r) {
  return r.keys().map((e, i) => {
    return { source: r(e) };
  });
}

let images = importAll(
  require.context(
    "../../../../data/images/egeszsegpenztar",
    false,
    /\.(png|jpe?g|svg|jpg)$/
  )
);


const FooterComp = () => {
  let footer = useSelector(state => state.changeLanguage.language.footer)
  return (
    <div className="footer-wrapper">
      <div className="pre-footer">
        <div className="contact-info-footer">
          <div className="contact-description">
            {/* <div>
              Icons made by{" "}
              <a
                href="https://www.flaticon.com/authors/freepik"
                title="Freepik"
              >
                Freepik
              </a>{" "}
              from{" "}
              <a href="https://www.flaticon.com/" title="Flaticon">
                www.flaticon.com
              </a>
            </div> */}
          </div>
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
}

export default FooterComp;
