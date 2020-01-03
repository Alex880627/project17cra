import SwipeableDrawer from "@material-ui/core/SwipeableDrawer";
import Drawer from "@material-ui/core/Drawer";
import React from "react";
import './swipeable-drawer.css';

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
          anchor="bottom"
          ModalProps={{
            onClose: ()=>this.props[`hide${this.capitalize(storeParam)}`]
          }}
          open={this.props[`${storeParam}`]}
          onClose={this.props[`hide${this.capitalize(storeParam)}`]}
          children={<ComponentParam {...this.props} />}
          style={{
            overflow: "scroll",
          }}
        ></SwipeableDrawer>
      );
    }
  };
}
