import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import {
  openSnackBarSuccess,
  openSnackBarError
} from "../../../actions/snack-bar-actions";
import giveProps from "../../container/give-props";
import sendInfo from "../../../services/send-info";
import { withStyles } from "@material-ui/core/styles";
import Button from "@material-ui/core/Button";
import TextField from "@material-ui/core/TextField";
import "./bug-report.css";
import modal from "../modal/modal";
import { hideBugreportAction } from "../../../actions/bugreport-action";

const LoaderComp = () => {
  return (
    <div className="loader-wrapper">
      <div className="loader" />
    </div>
  );
};

const CssTextField = withStyles({
  root: {
    "& label.Mui-focused": {
      color: "white"
    },
    "& .MuiInput-underline:after": {
      borderBottomColor: "white"
    },
    "& .MuiOutlinedInput-root": {
      "&.Mui-focused fieldset": {
        borderColor: "white",
        border: "1px solid white"
      }
    }
  }
})(TextField);

const BugreportComp = () => {
  const dispatch = useDispatch();
  const language = useSelector(state => state.changeLanguage.language.lang);
  const bugreport = useSelector(
    state => state.changeLanguage.language.bugreport
  );
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [disabled, setDisabled] = useState(true);
  const isDisabled = () => {
    return title.trim() !== "" && description.trim() !== ""? setDisabled(false): setDisabled(true);
  };
  useEffect(() => {
    isDisabled();
  }, [title, description])
  const onSubmit = e => {
    setIsLoading(true);
    e.preventDefault();
    sendInfo(
      {
        title: title.trim(),
        description: description.trim()
      },
      "https://studio17.duckdns.org/api/hibajelentes"
    )
      .then(json => {
        setIsLoading(false);
        const message = language === "Magyar" ? json.messageHU : json.messageEN;
        dispatch(openSnackBarSuccess(message));
        dispatch(hideBugreportAction());
      })
      .catch(error => {
        setIsLoading(false);
        const message =
          language === "Magyar" ? error.messageHU : error.messageEN;
        dispatch(openSnackBarError(message));
        dispatch(hideBugreportAction());
      });
  };
  const handleChange = e => {
    return e.target.value;
  };

  return (
    <>
      <div className="bugreport-section">
        <h3>{bugreport["title"]}</h3>
        <form onSubmit={onSubmit}>
          <CssTextField
            autoFocus={true}
            id="filled-basic"
            label={bugreport["bug"]}
            margin="dense"
            variant="filled"
            name="title"
            type="text"
            required
            autoComplete="off"
            onChange={e => {
              setTitle(handleChange(e));
            }}
          />
          <CssTextField
            id="filled-basic"
            label={bugreport.description}
            margin="dense"
            variant="filled"
            name="message"
            name="description"
            type="text"
            required
            multiline
            rowsMax="4"
            rows="7"
            cols="40"
            autoComplete="off"
            onChange={e => {
              setDescription(handleChange(e));
            }}
          />
          <Button type="submit" disabled={disabled}>
            {" "}
            {bugreport.send}
          </Button>
        </form>
      </div>
      {isLoading ? <LoaderComp /> : null}
    </>
  );
};

const Bugreport = giveProps(modal(BugreportComp, "bugreport"));

export default Bugreport;
