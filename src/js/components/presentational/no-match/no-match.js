import React from "react";
import "./no-match.css";

const NoMatchComponent = () => (
  <div className="nomatch-comp">
    <form action="/">
      <h1>{"404"}</h1>
      <h3>{"A keresett oldal nem található!"}</h3>
      <button type="submit">{"Vissza a főoldalra"}</button>
    </form>
  </div>
)

export default NoMatchComponent;
