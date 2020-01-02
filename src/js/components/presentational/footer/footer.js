import React from "react";
import "./footer.css";
import Galery from "../img-galery/img-galery";
import privacyPdf from "../../../../data/privacy-policy/privacy-policy.pdf";

const FooterComp = props => {
  let footer = props.language.footer;
  let contacts = props.language.contacts;
  return (
    <div className="footer-wrapper">
      <div className="pre-footer">
        <div className="contact-info-footer">
          <div className="contact-description">
            <iframe
              src="https://www.facebook.com/plugins/page.php?href=https://www.facebook.com/Studio17gyogytorna&width=308&height=120&small_header=true&adapt_container_width=true&hide_cover=false&show_facepile=true&appId=299633294303411"
              width="308"
              height="120"
              style={{border:"none",overflow:"hidden"}}
              scrolling="no"
              frameborder="0"
              allowTransparency="true"
              allow="encrypted-media"
            ></iframe>
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
