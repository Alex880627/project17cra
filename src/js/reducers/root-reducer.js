import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux';
import changeLanguage from './change-language-reducer';
import toogleSideBar from './side-bar-reducer';
import emailReducer from "./email-reducer";
import therapistReducer from "./therapist-details-reducer";
import snackBarReducer from "./snack-bar-reducer";
import blurReducer from "./blur-reducer";
import loadingReducer from "./loading-reducer";
import groupSessionDatesReducer from "./get-group-session-dates-reducer";

const rootReducer = combineReducers({
  groupSessionDatesReducer,
  changeLanguage,
  toogleSideBar,
  emailReducer,
  loadingReducer,
  therapistReducer,
  snackBarReducer,
  routing: routerReducer,
  blurReducer
});

export default rootReducer;
