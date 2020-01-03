import React from "react";
import Button from "@material-ui/core/Button";
import "./oval-button.css";

export const OvalButton = ({ text, onClick }) => {
  return (
    <Button
      className="oval-button"
      variant="outlined"
      onClick={onClick}
      style={{
        borderRadius: "20px",
        backgroundColor: "rgb(44, 175, 39)",
        border: "none",
        color: "white",
        marginBottom: "35px",
        textTransform: "none",
        fontFamily: "Work Sans"
      }}
    >
      <p>{text}</p>
    </Button>
  );
};
