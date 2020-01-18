import SwipeableDrawer from "@material-ui/core/SwipeableDrawer";
import React from "react";
import "./swipeable-drawer.css";

export default function swipeableModal(ComponentParam, storeParam) {
  return class extends React.Component {
    constructor(props) {
      super(props);
      this.capitalize = this.capitalize.bind(this);
    }
    capitalize = s => {
      if (typeof s !== "string") return "";
      return s.charAt(0).toUpperCase() + s.slice(1);
    };

    render() {
      return (
        <SwipeableDrawer
          className="swipeable-modal"
          anchor="left"
          onBackdropClick={{
            onClose: () => this.props[`hide${this.capitalize(storeParam)}`]
          }}
          BackdropInvisible={false}
          anchorOrigin={{ vertical: "top", horizontal: "left" }}
          transformOrigin={{ vertical: "top", horizontal: "left" }}
          open={this.props[`${storeParam}`]}
          onClose={this.props[`hide${this.capitalize(storeParam)}`]}
          children={<ComponentParam {...this.props} />}
        ></SwipeableDrawer>
      );
    }
  };
}
