import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import List from "@material-ui/core/List";
import Divider from "@material-ui/core/Divider";
import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemText from "@material-ui/core/ListItemText";
import Scroll from "react-scroll";
import SwipeableDrawer from "@material-ui/core/SwipeableDrawer";

import treatmentsIcon from "../../../../data/images/icons/treatments-icon.png";
import contactsIcon from "../../../../data/images/icons/contactsIcon.png";
import therapists from "../../../../data/images/icons/therapistsBlack.png";
import walletIcon from "../../../../data/images/icons/wallet-icon.png";
import groupIcon from "../../../../data/images/icons/group-icon-black.png";
import mail from "../../../../data/images/icons/mail.png";
import pictures from "../../../../data/images/icons/pictures-black.png";
import "./side-drawer.css";

const useStyles = makeStyles({
  list: {
    width: 250
  },
  fullList: {
    width: "auto"
  }
});

const SideDrawer = React.memo(props => {
  const scroller = Scroll.scroller;
  const icons = [
    treatmentsIcon,
    groupIcon,
    therapists,
    walletIcon,
    contactsIcon,
    pictures,
    mail
  ];
  let navbar = props.language.navbar;
  const classes = useStyles();
  const [state, setState] = React.useState({
    left: false
  });

  const link = element => {
    scroller.scrollTo(element, {
      delay: 0,
      duration: 0,
      smooth: "easeInOutExpo",
      offset: -50
    });
  };
  const toggleDrawer = (side, open) => event => {
    setTimeout(() => {
      props.closeSideBar();
    }, 100);

    if (
      event.type === "keydown" &&
      (event.key === "Tab" || event.key === "Shift")
    ) {
      return;
    }
    setState({ ...state, [side]: open });
  };

  const sideList = side => (
    <div
      className={classes.list}
      style={{ WebkitOverflowScrolling: "touch" }}
      role="presentation"
      onClick={toggleDrawer(side, false)}
      onKeyDown={toggleDrawer(side, false)}
    >
      <List>
        {Object.entries(navbar).map((element, index) => {
          if (element[0] !== "contactUs" && element[0] !== "pictures") {
            return (
              <ListItem
                button
                key={"text"}
                onClick={() => {
                  link(`${element[0]}`);
                }}
              >
                <ListItemText primary={element[1]} />
                <ListItemIcon>
                  <img src={icons[index]} id="drawer-icons" />
                </ListItemIcon>
              </ListItem>
            );
          } else if (element[0] === "pictures") {
            return (
              <ListItem
                button
                key={"text"}
                onClick={e => {
                  e.stopPropagation();
                  props.showGallery();
                }}
              >
                <ListItemText primary={element[1]} />
                <ListItemIcon style={{ pointerEvents: "none" }}>
                  <img src={icons[index]} id="drawer-icons" />
                </ListItemIcon>
              </ListItem>
            );
          } else {
            return (
              <ListItem
                button
                key={"text"}
                onClick={e => {
                  e.stopPropagation();
                  props.showEmail();
                }}
              >
                <ListItemText primary={element[1]} />
                <ListItemIcon style={{ pointerEvents: "none" }}>
                  <img src={icons[index]} id="drawer-icons" />
                </ListItemIcon>
              </ListItem>
            );
          }
        })}
      </List>
    </div>
  );

  return (
    <div>
      <SwipeableDrawer
        open={props.sideBar}
        onOpen={toggleDrawer("left", true)}
        onClose={toggleDrawer("left", false)}
      >
        {sideList("left")}
        <Divider />
      </SwipeableDrawer>
    </div>
  );
});

export default SideDrawer;
