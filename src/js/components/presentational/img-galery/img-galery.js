import React from "react";
import Carousel, { Modal, ModalGateway } from "react-images";
import "./img-galery.css";

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

class Galery extends React.Component {
  state = { modalIsOpen: false };
  state = { currentModal: null };
  state = { pictures: [] };
  toggleModal = index => {
    this.setState(state => ({ modalIsOpen: !state.modalIsOpen }));
    this.setState({ currentModal: index });
  };
  setImage = index => {
    return new Promise((res, rej) => {
      this.setState(state => ({
        pictures: [images[index]]
      }));
      return res("geci");
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
          {thumbnails.map((element, index) => {
            return (
              <div className="thumbnails" key={element.source}>
                <img
                  src={element.source}
                  onClick={() => {
                    this.setImage(index)
                      .then(() => {
                        this.toggleModal(index+1);
                      })
                      .then(() => {
                        this.setState(state => ({
                          pictures: [...this.state.pictures, images[index]]
                        }));
                      }).then(() => {
                        this.setState(state => ({
                          pictures: [images[index + 2], ...this.state.pictures]
                        }));
                      })
                  console.log(this.state.pictures, this.state.currentModal);
                  }
                }
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
