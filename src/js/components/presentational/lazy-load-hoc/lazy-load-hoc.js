import React, { useRef, useState, Suspense, useEffect } from "react";
import { useSelector } from "react-redux";
import useOnScreen from "../../../hooks/useScreen";

export const withLazyLoad = (Component, id, color = "#265C42") => {
  return () => {
    const ref = useRef(null);
    const [load, setLoad] = useState(false);
    const [height, setHeight] = useState("100vh");
    const isOnScreen = useOnScreen(ref, 0.6);
    const header = useSelector(state => state.headerReducer.header);
    useEffect(() => {}, [header]);
    const style = {
      width: "100%",
      height: height,
      backgroundColor: color
    };
    if (isOnScreen && !load) {
      setLoad(true);
      setHeight("auto");
    }
    /* if (isOnScreen) {
      window.location.hash = `#${id}`;
    } */
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
};

export default withLazyLoad;
