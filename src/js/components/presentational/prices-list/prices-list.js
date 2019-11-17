import React from "react";
import pricesIcon from "../../../../data/images/icons/wallet-icon.png";
import Scroll from "react-scroll";
import './prices-list.css';

const PricesComp = props => {
  const Link = Scroll.Element;
  let prices = props.language.prices;
  return (
    <div className="prices-wrapper" id="prices">
      <Link name="prices"></Link>
      <div className="prices-heading">
        <h3>{prices["prices title"]}</h3>
        <img src={pricesIcon} alt="price icon" />
      </div>
      <div className="treatments-list-wrapper">
        {prices.treatments.map(element => {
          return (
            <div className="treatments-list" key={element.name}>
                <p>{element.name}</p>
                <p>{element.price}<span>{`/${prices.occasion} (${element.duration})`}</span></p>
              <p>{element.description}</p>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default PricesComp;
