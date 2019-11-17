import React, { useState, useEffect } from "react";

const UpNavButton = () => {
  const [visibility, setVisibility] = useState("hidden");
  const onScroll = () => {
    if (window.pageYOffset > 400) {
      setVisibility("visible");
    } else if (window.pageYOffset < 400) {
      setVisibility("hidden");
    }
  };
  useEffect(() => {
    window.addEventListener("scroll", onScroll);
    return () => {
      window.removeEventListener("scroll", onScroll);
    };
  }, []);
  return (
    <nav className="up-button">
      <a href="#page-up">
        <h1 className={visibility}>{"upButton"}</h1>
      </a>
    </nav>
  );
};

export default UpNavButton;