import { connect } from 'react-redux'
import React, { Component } from "react";
import {
  changeLangToENAction,
  changeLangToHUAction
} from "../../actions/change-language-action";
import {
  openSideBarAction,
  closeSideBarAction
} from "../../actions/toogle-side-bar-action";
import { showEmailAction, hideEmailAction } from "../../actions/email-action";
import {
  showTherapistDetails,
  hideTherapistDetails
} from "../../actions/therapist-details-action";
import { setBlurAction, unsetBlurAction } from "../../actions/set-blur-action";
import {
  setLoadingAction,
  unsetLoadingAction
} from "../../actions/loading-actions";
import {
  openSnackBarSuccess,
  openSnackBarError,
  closeSnackBar
} from "../../actions/snack-bar-actions";
import getData from "../../services/get-data";

const mapDispatchToProps = dispatch => ({
  changeLanguageToHU: () => {
    dispatch(changeLangToHUAction());
  },
  changeLanguageToEN: () => {
    dispatch(changeLangToENAction());
  },
  openSideBar: () => {
    dispatch(openSideBarAction());
  },
  closeSideBar: () => {
    dispatch(closeSideBarAction());
  },
  showEmail: () => {
    dispatch(showEmailAction());
  },
  hideEmail: () => {
    dispatch(hideEmailAction());
  },
  setBlur: () => {
    dispatch(setBlurAction());
  },
  unsetBlur: () => {
    dispatch(unsetBlurAction());
  },
  setLoading: () => {
    dispatch(setLoadingAction());
  },
  unsetLoading: () => {
    dispatch(unsetLoadingAction());
  },
  showTherapistDetails: payload => {
    dispatch(showTherapistDetails(payload));
  },
  hideTherapistDetails: () => {
    dispatch(hideTherapistDetails());
  },
  openSnackBarSuccess: payload => {
    dispatch(openSnackBarSuccess(payload));
  },
  openSnackBarError: payload => {
    dispatch(openSnackBarError(payload));
  },
  closeSnackBar: () => {
    dispatch(closeSnackBar());
  }
});

const mapStateToProps = state => ({
  groupSessionDates: state.groupSessionDatesReducer.groupSessionDates,
  language: state.changeLanguage.language,
  loading: state.loadingReducer.loading,
  sideBar: state.toogleSideBar.sideBar,
  email: state.emailReducer.email,
  blur: state.blurReducer.blur,
  therapistDetails: state.therapistReducer.therapistDetails,
  therapistName: state.therapistReducer.therapistName,
  snackBar: state.snackBarReducer.snackBar
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
