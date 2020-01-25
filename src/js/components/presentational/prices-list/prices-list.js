import React from "react";
import pricesIcon from "../../../../data/images/icons/wallet-icon.png";
import { useSelector } from "react-redux";
import Tooltip from "@material-ui/core/Tooltip";
import "./prices-list.css";

const healtProviders = [
  "MKB egészségpénztár",
  "Allianz egészségpénztár",
  "Generali egészségpénztár",
  "OTP egészségpénztár",
  "Patika egészségpénztár",
  "Premium egészségpénztár"
];

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

const PricesComp = () => {
  let prices = useSelector(state => state.changeLanguage.language.prices);
  return (
    <div className="prices-wrapper">
      <div className="prices-heading">
        <h3 style={{ animation: "fadeInRightDown 2s ease" }}>
          {prices["prices title"]}
        </h3>
        <img
          style={{ animation: "fadeInLeftDown 2s ease" }}
          src={pricesIcon}
          alt="price icon"
        />
      </div>
      <div className="treatments-list-wrapper">
        {prices.treatments.map(element => {
          return (
            <div className="treatments-list" key={element.name}>
              <p style={{ animation: "fadeInDown 2s ease" }}>{element.name}</p>
              <p style={{ animation: "fadeInLeft 2s ease" }}>{element.price}</p>
              <span>{`${prices.occasion} (${element.duration})`}</span>
              <p style={{ animation: "fadeInUp 2s ease" }}>
                {element.description}
              </p>
            </div>
          );
        })}
      </div>
      <div className="health-care-wrapper">
        <p>{prices["health providers heading"]}</p>
        <div className="health-care-images">
          {images.map((image, index) => {
            return (
              <Tooltip title={healtProviders[index]}>
                <img src={image.source}></img>
              </Tooltip>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default PricesComp;
