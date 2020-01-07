import React from "react";
import Carousel, { Modal, ModalGateway } from "react-images";
import CircularProgress from "@material-ui/core/CircularProgress";

import "./img-galery.css";

if (process.env.NODE_ENV !== "production") {
  const whyDidYouRender = require("@welldone-software/why-did-you-render");
  whyDidYouRender(React);
}

function importAll(r) {
  return r.keys().map(e => {
    return { source: r(e) };
  });
}

const images = importAll(
  require.context(
    "../../../../data/images/galery/images",
    false,
    /\.(png|jpe?g|svg|jpg)$/
  )
);

const thumbnails = importAll(
  require.context(
    "../../../../data/images/galery/thumbnails",
    false,
    /\.(png|jpe?g|svg|jpg)$/
  )
);

class Galery extends React.PureComponent {
  state = { modalIsOpen: false };
  state = { currentModal: null };
  state = { pictures: [] };
  toggleModal = index => {
    this.setState(state => ({ modalIsOpen: !state.modalIsOpen }));
    this.setState({ currentModal: index });
  };
  setImage = () => {
    return new Promise((res, rej) => {
      this.setState({
        pictures: images
      });
      return res("done");
    });
  };
  render() {
    const Footer = () => {
      return (
        <div
          onClick={() => {
            this.setState(state => ({ modalIsOpen: !state.modalIsOpen }));
          }}
        ></div>
      );
    };
    const { modalIsOpen } = this.state;
    return (
      <>
        <div className="galery-wrapper">
          {/* <CircularProgress disableShrink /> */}
          {thumbnails.map((element, index) => {
            return (
              <div className="thumbnails" key={element.source}>
                <img
                  src={element.source}
                  onClick={() => {
                    if (this.state.pictures.length < 1) {
                      this.setImage().then(() => {
                        this.toggleModal(index);
                      });
                    } else {
                      this.toggleModal(index);
                    }
                  }}
                />
              </div>
            );
          })}
        </div>
        <ModalGateway allowFullscreen={false} touchstart={this.toggleModal}>
          {modalIsOpen ? (
            <Modal
              onClose={this.toggleModal}
              allowFullscreen={true}
              closeOnBackdropClick={true}
            >
              <Carousel
                views={this.state.pictures}
                components={{ Footer: Footer }}
                currentIndex={this.state.currentModal}
              />
            </Modal>
          ) : null}
        </ModalGateway>
      </>
    );
  }
}

export default Galery;
