import {
  GET_SESSION_DATES,
  GET_SESSION_DATES_SUCCESS,
  GET_SESSION_DATES_FAIL
} from "../constants/constants";
const initState = {
  groupSessionDates: [],
  loadingSmall: false,
  error: ""
};

const groupSessionDatesReducer = (state = initState, action) => {
  switch (action.type) {
    case GET_SESSION_DATES:
      return Object.assign({}, state, {
        loadingSmall: true
      });
    case GET_SESSION_DATES_SUCCESS:
      return Object.assign({}, state, {
        loadingSmall: false,
        groupSessionDates: action.payload.data
      });
    case GET_SESSION_DATES_FAIL:
      return Object.assign({}, state, {
        loadingSmall: false,
        error: action.payload
      });
    default:
      return state;
  }
};

export default groupSessionDatesReducer;
