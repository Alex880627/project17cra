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
  toggleModal = index => {
    this.setState(state => ({ modalIsOpen: !state.modalIsOpen }));
    this.setState({ currentModal: index });
  };
  render() {
    const Footer = () => {
      return <div onClick={()=>{this.setState(state => ({ modalIsOpen: !state.modalIsOpen }))}}>
      </div>
    }
    const { modalIsOpen } = this.state;
    return (
      <>
        <div className="galery-wrapper">
          {thumbnails.map((element, index) => {
            return (
              <div className="thumbnails">
                <img
                  src={element.source}
                  onClick={() => {
                    this.toggleModal(index);
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
              allowFullscreen={false}
              closeOnBackdropClick={true}
            >
              <Carousel views={images} components={{Footer: Footer}} currentIndex={this.state.currentModal} />
            </Modal>
          ) : null}
        </ModalGateway>
      </>
    );
  }
}

export default Galery;
