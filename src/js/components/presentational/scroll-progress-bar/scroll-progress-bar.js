import React, { useEffect, useState } from "react";

const ScrollProgress = () => {
  const calculate = () => {
    let height = document.body.scrollHeight-window.innerHeight;
    let current = Math.floor((window.scrollY/height)*window.visualViewport.width);
    return current;
  }
  const [width, setWidth] = useState(0);
  useEffect(() => {
    const measureProgress = () => {
      setWidth(calculate());
    };
    window.addEventListener("scroll", measureProgress);
    return () => {
      window.removeEventListener("scroll", measureProgress);
    };
    // eslint-disable-next-line
  }, []);
  let style = {
    position: "fixed",
    top: 0,
    left: 0,
    zIndex: 40,
    height: "3px",
    backgroundColor: "#FF3366",
    /* width: `${width}px` */
  }
  return <div style={style}></div>;;
};

export default ScrollProgress;
