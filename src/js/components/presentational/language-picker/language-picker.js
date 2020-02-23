import huFlag from "../../../../data/images/icons/hu-flag.jpg";
import enFlag from "../../../../data/images/icons/en-flag.jpg";
import "./language-picker.css";
import { useSelector, useDispatch } from "react-redux";
import React, { useState, useEffect } from "react";
import {
  changeLangToENAction,
  changeLangToHUAction
} from "../../../actions/change-language-action";

import { openSnackBarError } from "../../../actions/snack-bar-actions";
import {
  setLoadingAction,
  unsetLoadingAction
} from "../../../actions/loading-actions";

const LanguagePickerButton = () => {
  const dispatch = useDispatch();
  const language = useSelector(state => state.changeLanguage.language.lang);
  const [height, setHeight] = useState("2.5em");
  const setLang = () => {
    /* dispatch(setLoadingAction()); */
    setTimeout(() => {
      language === "Magyar"
        ? dispatch(
            openSnackBarError(
              "We don't speak english! \n Just kidding! Coming Soon :)"
            ) /* changeLangToENAction() */
          )
        : dispatch(changeLangToHUAction());
    }, 300);
  };
  useEffect(() => {
    dispatch(unsetLoadingAction());
  }, [language]);
  return (
    <ul className="languagepicker">
      {window.innerWidth > 1000 ? (
        <li
          onClick={() => {
            height === "2.5em" ? setHeight("5em") : setHeight("2.5em");
          }}
        >
          <img src={language === "Magyar" ? huFlag : enFlag} alt="flag" />
          {language === "Magyar" ? "Magyar" : "English"}
        </li>
      ) : null}

      <li
        onClick={() => {
          setLang();
          setHeight("2.5em");
        }}
      >
        <img src={language === "Magyar" ? enFlag : huFlag} alt="flag" />
        {language === "Magyar" ? "English" : "Magyar"}
      </li>
    </ul>
  );
};

export default LanguagePickerButton;
