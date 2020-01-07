import React from "react";
import "./no-match.css";

if (process.env.NODE_ENV !== "production") {
  const whyDidYouRender = require("@welldone-software/why-did-you-render");
  whyDidYouRender(React);
}

const NoMatchComponent = React.memo( () => (
  <div className="nomatch-comp">
    <form action="/">
      <h1>{"404"}</h1>
      <h3>{"A keresett oldal nem található!"}</h3>
      <button type="submit">{"Vissza a főoldalra"}</button>
    </form>
  </div>
));

NoMatchComponent.whyDidYouRender = true;
export default NoMatchComponent;
