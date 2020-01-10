import React, { useRef, useState, Suspense , useEffect} from "react";
import { useSelector, useDispatch } from 'react-redux';
import useOnScreen from "../../../hooks/useScreen";
import {
  setHeaderUnderlineAction
} from "../../../actions/setHeader-underline";

if (process.env.NODE_ENV !== "production") {
  const whyDidYouRender = require("@welldone-software/why-did-you-render");
  whyDidYouRender(React);
}

export const withLazyLoad = (Component, id, color = "#265C42") => {
  return () => {
    const ref = useRef(null);
    const dispatch = useDispatch()
    const [load, setLoad] = useState(false);
    const [height, setHeight] = useState("100vh");
    const isOnScreen = useOnScreen(ref, 0.6);
    const header = useSelector(state => state.headerReducer.header);
    useEffect(()=>{

    },[header])
    const style = {
      width: "100%",
      height: height,
      backgroundColor: color
    };
    if (isOnScreen && !load) {
      setLoad(true);
      setHeight("auto");
    }
    if (isOnScreen && header !== id && window.innerWidth > 1000) {
      dispatch(setHeaderUnderlineAction(id));
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
};

withLazyLoad.whyDidYouRender = true;

export default withLazyLoad;
