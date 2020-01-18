import React from "react";
import Carousel, { Modal, ModalGateway } from "react-images";
import modal from "../modal/modal";
import CloseButton from "../close-button/close-button";
import "./img-galery.css";

function importAll(r) {
  return r.keys().map((e, i) => {
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

const grid = [
  { size: "30" },
  { size: "15" },
  { size: "20" },
  { size: "35" },
  { size: "15" },
  { size: "20" },
  { size: "25" },
  { size: "40" },
  { size: "30" },
  { size: "20" },
  { size: "30" },
  { size: "20" },
  { size: "10" },
  { size: "15" },
  { size: "15" },
  { size: "60" }
];

grid.forEach((element, i) => {
  element["source"] = images[i].source;
  element["index"] = i;
});

let gridMulti = [];

for (let index = 0; index < 4; index++) {
  let tempArray = [];
  for (let a = 0; a < 4; a++) {
    tempArray.push(grid[a + index * 4]);
  }
  gridMulti.push(tempArray);
}

class Galery extends React.PureComponent {
  state = { modalIsOpen: false };
  state = { currentModal: null };
  toggleModal = index => {
    this.setState(state => ({ modalIsOpen: !state.modalIsOpen }));
    this.setState({ currentModal: index });
  };
  getGallerySize = () => {
    return window.innerWidth < 800 ? 0.9 : 0.6;
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
        <div className="gallery">
          {window.innerWidth < 768 ? (
            <CloseButton hideFunction={this.props.hideGallery} />
          ) : null}
          {gridMulti.map(e => {
            return (
              <div className="thumbnails-row">
                {e.map(element => {
                  return (
                    <div
                      className="thumbnails"
                      key={element.source}
                      style={{
                        width: `${element.size * this.getGallerySize()}vw`,
                        height: "22vh"
                      }}
                    >
                      <div
                        style={{
                          backgroundImage: `url('${element.source}')`,
                          backgroundPosition: "center",
                          width: "100%",
                          height: "100%",
                          backgroundSize: "cover"
                        }}
                        onClick={() => {
                          this.toggleModal(element.index);
                        }}
                      ></div>
                    </div>
                  );
                })}
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
                views={images}
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

const GalleryModal = modal(Galery, "gallery");

export default GalleryModal;
