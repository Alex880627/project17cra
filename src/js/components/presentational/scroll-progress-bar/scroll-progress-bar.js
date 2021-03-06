import React, { useEffect, useState } from "react";

const ScrollProgress = () => {
  const calculate = () => {
    let body = document.body,
      html = document.documentElement;
    let height =
      Math.max(
        body.scrollHeight,
        body.offsetHeight,
        html.clientHeight,
        html.scrollHeight,
        html.offsetHeight
      ) - window.innerHeight;
    let current = Math.floor((window.scrollY / height) * window.innerWidth);
    return current;
  };
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
    zIndex: 99999,
    height: "2px",
    backgroundColor: "#FF3366",
    width: `${width}px`
  };
  return <div style={style}></div>;
};

export default ScrollProgress;
