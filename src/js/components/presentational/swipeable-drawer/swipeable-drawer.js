import SwipeableDrawer from "@material-ui/core/SwipeableDrawer";
import Drawer from "@material-ui/core/Drawer";
import React from "react";
import "./swipeable-drawer.css";
import Backdrop from "@material-ui/core/Modal/SimpleBackdrop";

/**
 * Prevents scrolling of content behind the backdrop.
 */
export class BackDropIOSWorkaround extends React.PureComponent {
  onTouchMove(event) {
    event.preventDefault();
  }
  render() {
    return <Backdrop onTouchMove={this.onTouchMove} />;
  }
}

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
