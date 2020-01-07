import huFlag from "../../../../data/images/icons/hu-flag.jpg";
import enFlag from "../../../../data/images/icons/en-flag.jpg";
import "./language-picker.css";

import React, { useState, useEffect } from "react";

if (process.env.NODE_ENV !== 'production') {
  const whyDidYouRender = require('@welldone-software/why-did-you-render');
  whyDidYouRender(React);
}

const LanguagePickerButton = React.memo(({
  language,
  changeLanguageToEN,
  changeLanguageToHU,
  setLoading,
  unsetLoading
}) => {
  const [height, setHeight] = useState("2.5em");
  const setLang = () => {
    setLoading();
    setTimeout(() => {
      language.lang === "Magyar" ? changeLanguageToEN() : changeLanguageToHU();
    
    }, 300);
  };
  useEffect(() => {
    unsetLoading();
  }, [language]);
  return (
    <ul className="languagepicker">
      {window.innerWidth > 1000 ? (
        <li
          onClick={() => {
            height === "2.5em" ? setHeight("5em") : setHeight("2.5em");
          }}
        >
          <img src={language.lang === "Magyar" ? huFlag : enFlag} alt="flag" />
          {language.lang === "Magyar" ? "Magyar" : "English"}
        </li>
      ) : null}

      <li
        onClick={() => {
          setLang();
          setHeight("2.5em");
        }}
      >
        <img src={language.lang === "Magyar" ? enFlag : huFlag} alt="flag" />
        {language.lang === "Magyar" ? "English" : "Magyar"}
      </li>
    </ul>
  );
});

LanguagePickerButton.whyDidYouRender=true;

export default LanguagePickerButton;
