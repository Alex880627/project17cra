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
    return <Backdrop {...this.props} onTouchMove={this.onTouchMove} />;
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
          anchor="left"
          BackdropInvisible={false}
          anchorOrigin={{ vertical: "top", horizontal: "left" }}
          transformOrigin={{ vertical: "top", horizontal: "left" }}
          BackdropComponent={BackDropIOSWorkaround}
          ModalProps={{
            onClose: () => this.props[`hide${this.capitalize(storeParam)}`]
          }}
          open={this.props[`${storeParam}`]}
          onClose={this.props[`hide${this.capitalize(storeParam)}`]}
          children={<ComponentParam {...this.props} />}
          /* style={{
            overflow: "scroll",
          }} */
        ></SwipeableDrawer>
      );
    }
  };
}
