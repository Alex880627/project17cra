import React, { useRef, useState, Suspense } from "react";
import useOnScreen from "../../../hooks/useScreen";
import giveProps from "../../container/give-props";

if (process.env.NODE_ENV !== "production") {
  const whyDidYouRender = require("@welldone-software/why-did-you-render");
  whyDidYouRender(React);
}

export const withLazyLoad = (Component, id, color = "#265C42") => {
  const IntersectingWrappedComponent = props => {
    const ref = useRef(null);
    const [load, setLoad] = useState(false);
    const [height, setHeight] = useState("100vh");
    const isOnScreen = useOnScreen(ref, 0.6);
    const style = {
      width: "100%",
      height: height,
      backgroundColor: color
    };
    if (isOnScreen && !load) {
      setLoad(true);
      setHeight("auto");
    }
    if (isOnScreen && props.header !== id && window.innerWidth > 1000) {
      props.setHeaderUnderLine(id);
    }
    return (
      <div id={id} className="lazy-load-wrapper" style={style} ref={ref}>
        {load ? (
          <Suspense fallback={<div></div>}>
            <Component />
          </Suspense>
        ) : null}
      </div>
    );
  };
  const IntersectingWrappedComponentWithProps = giveProps(
    IntersectingWrappedComponent
  );
  return IntersectingWrappedComponentWithProps;
};

withLazyLoad.whyDidYouRender = true;

export default withLazyLoad;
