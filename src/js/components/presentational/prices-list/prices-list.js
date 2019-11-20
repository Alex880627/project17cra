import React from "react";
import pricesIcon from "../../../../data/images/icons/wallet-icon.png";
import './prices-list.css';

const PricesComp = props => {
  let prices = props.language.prices;
  return (
    <div className="prices-wrapper">
      <div className="prices-heading">
        <h3 style={{ animation: "fadeInRightDown 2s ease" }}>{prices["prices title"]}</h3>
        <img style={{ animation: "fadeInLeftDown 2s ease" }} src={pricesIcon} alt="price icon" />
      </div>
      <div className="treatments-list-wrapper">
        {prices.treatments.map(element => {
          return (
            <div className="treatments-list" key={element.name}>
                <p style={{ animation: "fadeInDown 2s ease" }}>{element.name}</p>
                <p style={{ animation: "fadeInLeft 2s ease" }}>{element.price}<span>{`/${prices.occasion} (${element.duration})`}</span></p>
              <p style={{ animation: "fadeInUp 2s ease" }}>{element.description}</p>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default PricesComp;
