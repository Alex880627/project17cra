import React, { useRef, useState } from "react";
import useOnScreen from "../../../hooks/useScreen";

export const withLazyLoad = (Component, id, color = "#265C42") => {
  return props => {
    const ref = useRef(null);
    const [load, setLoad] = useState(false)
    const [height, setHeight] = useState("100vh")
    const isOnScreen = useOnScreen(ref, 0.5);
    const style = {
      width: "100%",
      height: height,
      backgroundColor: color
    };
    if(isOnScreen && !load){
      setLoad(true);
      setHeight("auto")
    }
    return (
      <div id={id} className="lazy-load-wrapper" style={style} ref={ref}>
        { load ?
        <Component /> : null }
      </div>
    );
  };
};

export default withLazyLoad;
