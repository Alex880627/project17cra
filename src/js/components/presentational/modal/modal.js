import React from "react";
import Modal from "@material-ui/core/Modal";

if (process.env.NODE_ENV !== 'production') {
  const whyDidYouRender = require('@welldone-software/why-did-you-render');
  whyDidYouRender(React);
}

export default function modal(ComponentParam, storeParam) {
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
          <Modal
            /*             aria-labelledby="Üzenj nekünk"
            aria-describedby="Gyogytorna jelentkezes üzenetben" */
            open={this.props[`${storeParam}`]}
            onClose={this.props[`hide${this.capitalize(storeParam)}`]}
            children={<ComponentParam {...this.props} />}
            style={{ overflow: "scroll" }}
          ></Modal>
      );
    }
  };
}

modal.whyDidYouRender=true;
