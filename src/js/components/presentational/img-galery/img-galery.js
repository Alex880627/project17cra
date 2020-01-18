import React, { Suspense } from "react";
import Carousel, { Modal, ModalGateway } from "react-images";
import modal from "../modal/modal";
import CloseButton from "../close-button/close-button";
import pic1 from "../../../../data/images/galery/thumbnails/1.jpg";
import pic2 from "../../../../data/images/galery/thumbnails/2.jpg";
import pic3 from "../../../../data/images/galery/thumbnails/3.jpg";
import pic4 from "../../../../data/images/galery/thumbnails/4.jpg";
import pic5 from "../../../../data/images/galery/thumbnails/5.jpg";
import pic6 from "../../../../data/images/galery/thumbnails/6.jpg";
import pic7 from "../../../../data/images/galery/thumbnails/7.jpg";
import pic8 from "../../../../data/images/galery/thumbnails/8.jpg";
import pic9 from "../../../../data/images/galery/thumbnails/9.jpg";
import pic10 from "../../../../data/images/galery/thumbnails/10.jpg";
import pic11 from "../../../../data/images/galery/thumbnails/11.jpg";
import pic12 from "../../../../data/images/galery/thumbnails/12.jpg";
import pic13 from "../../../../data/images/galery/thumbnails/13.jpg";
import pic14 from "../../../../data/images/galery/thumbnails/14.jpg";
import pic15 from "../../../../data/images/galery/thumbnails/15.jpg";
import pic16 from "../../../../data/images/galery/thumbnails/16.jpg";

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

let grid = [
  [
    { size: "30", source: pic1, index: 0 },
    { size: "15", source: pic2, index: 8 },
    { size: "20", source: pic3, index: 9 },
    { size: "35", source: pic4, index: 10 }
  ],
  [
    { size: "15", source: pic5, index: 11 },
    { size: "20", source: pic6, index: 12 },
    { size: "25", source: pic7, index: 13 },
    { size: "40", source: pic8, index: 14 }
  ],
  [
    { size: "30", source: pic9, index: 15 },
    { size: "20", source: pic10, index: 1 },
    { size: "30", source: pic11, index: 2 },
    { size: "20", source: pic12, index: 3 }
  ],
  [
    { size: "10", source: pic13, index: 4 },
    { size: "15", source: pic14, index: 5 },
    { size: "15", source: pic15, index: 6 },
    { size: "60", source: pic16, index: 7 }
  ]
];

const gridMobile = [
  [
    { size: "25", source: pic1, index: 0 },
    { size: "25", source: pic2, index: 8 },
    { size: "25", source: pic3, index: 9 },
    { size: "25", source: pic4, index: 10 }
  ],
  [
    { size: "25", source: pic5, index: 11 },
    { size: "25", source: pic6, index: 12 },
    { size: "25", source: pic7, index: 13 },
    { size: "25", source: pic8, index: 14 }
  ],
  [
    { size: "25", source: pic9, index: 15 },
    { size: "25", source: pic10, index: 1 },
    { size: "25", source: pic11, index: 2 },
    { size: "25", source: pic12, index: 3 }
  ],
  [
    { size: "25", source: pic13, index: 4 },
    { size: "25", source: pic14, index: 5 },
    { size: "25", source: pic15, index: 6 },
    { size: "25", source: pic16, index: 7 }
  ]
];

if(window.innerWidth<768){
  grid = gridMobile;
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
        <Suspense
          fallback={
            <div className="loader-wrapper">
              <div className="loader" />
            </div>
          }
        >
          <div className="gallery">
            {window.innerWidth < 768 ? (
              <CloseButton hideFunction={this.props.hideGallery} />
            ) : null}
            {grid.map(e => {
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
        </Suspense>
      </>
    );
  }
}

const GalleryModal = modal(Galery, "gallery");

export default GalleryModal;
