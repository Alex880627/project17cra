import React, { useState } from "react";
import { withStyles } from "@material-ui/core/styles";
import Zoom from "@material-ui/core/Zoom";
import Chip from "@material-ui/core/Chip";
import Tooltip from "@material-ui/core/Tooltip";
import Typography from "@material-ui/core/Typography";
import ClickAwayListener from "@material-ui/core/ClickAwayListener";
import "./tool-tip.scss";

const HtmlTooltip = withStyles(theme => ({
  tooltip: {
    backgroundColor: "#f5f5f9",
    margin: "20px",
    color: "rgba(0, 0, 0, 0.87)",
    maxWidth: 400,
    fontSize: theme.typography.pxToRem(12),
    border: "1px solid #dadde9"
  }
}))(Tooltip);

const ToolTip = props => {
  const [open, setOpen] = useState(false);
  const handleTooltipClose = () => {
    setOpen(false);
  };
  const handleTooltipOpen = () => {
    setOpen(true);
  };
  return (
    <ClickAwayListener onClickAway={handleTooltipClose}>
        <HtmlTooltip
          TransitionComponent={Zoom}
          disableFocusListener
          disableHoverListener
          disableTouchListener
          PopperProps={{
            disablePortal: true
          }}
          onClose={handleTooltipClose}
          open={open}
          title={
            <>
              <Typography color="inherit"><em>{props.techniqueTitle}</em></Typography>
              
              <br/><p>{props.description}</p>
            </>
          }
        >
          <Chip
            variant="outlined"
            size="small"
            label={props.technique}
            onClick={handleTooltipOpen}
          />
        </HtmlTooltip>
    </ClickAwayListener>
  );
};

export default ToolTip;
