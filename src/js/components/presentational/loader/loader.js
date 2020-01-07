import React from "react";
import "./loader.css";


if (process.env.NODE_ENV !== "production") {
  const whyDidYouRender = require("@welldone-software/why-did-you-render");
  whyDidYouRender(React);
}

const LoaderComp = React.memo(({ loading }) => {
  return loading ? (
    <div className="loader-wrapper">
      <div className="loader" />
    </div>
  ) : null;
});

LoaderComp.whyDidYouRender = true;
export default LoaderComp;
