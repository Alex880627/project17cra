import { connect } from "react-redux";
import React, { Component } from "react";
import { showEmailAction, hideEmailAction } from "../../actions/email-action";
import {
  showTherapistDetails,
  hideTherapistDetails
} from "../../actions/therapist-details-action";
import {
  closeGalleryAction,
  openGalleryAction
} from "../../actions/gallery-action";

const mapDispatchToProps = dispatch => ({
  hideGallery: () => {
    dispatch(closeGalleryAction());
  },
  showGallery: () => {
    dispatch(openGalleryAction());
  },
  showEmail: () => {
    dispatch(showEmailAction());
  },
  hideEmail: () => {
    dispatch(hideEmailAction());
  },
  showTherapistDetails: payload => {
    dispatch(showTherapistDetails(payload));
  },
  hideTherapistDetails: () => {
    dispatch(hideTherapistDetails());
  }
});

const mapStateToProps = state => ({
  email: state.emailReducer.email,
  gallery: state.galleryReducer.gallery,
  therapistDetails: state.therapistReducer.therapistDetails,
});

export default function giveProps(ComponentParam) {
  const ComponentParamWithProps = connect(
    mapStateToProps,
    mapDispatchToProps
  )(ComponentParam);
  return class extends Component {
    render() {
      return <ComponentParamWithProps {...this.props} />;
    }
  };
}
