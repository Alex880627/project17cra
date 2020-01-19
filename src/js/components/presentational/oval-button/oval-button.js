import React from "react";
import Button from "@material-ui/core/Button";
import "./oval-button.css";

export const OvalButton = ({ text, onClick, transparent, color, noBorderLeft, noBorderRight }) => {
  return (
    <Button
      className="oval-button"
      variant="outlined"
      onClick={onClick}
      style={{
        borderTopLeftRadius: `${noBorderLeft? "none":"20px"}`,
        borderBottomLeftRadius: `${noBorderLeft? "none":"20px"}`,
        borderBottomRightRadius: `${noBorderRight? "none":"20px"}`,
        borderTopRightRadius: `${noBorderRight? "none":"20px"}`,
        fontSize: "14px",
        backgroundColor: `${transparent ? "none" : "rgb(44, 175, 39)"}`,
        border: "1px solid red !important",
        borderColor: "rgb(44, 175, 39)",
        color: `${color || "white"}`,
        marginBottom: "35px",
        marginLeft: "2px",
        marginRight: "2px",
        padding: "4px",
        textTransform: "none",
        fontFamily: "Work Sans"
      }}
    >
      <p>{text}</p>
    </Button>
  );
};
