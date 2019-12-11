import {
  GET_SESSION_DATES,
  GET_SESSION_DATES_SUCCESS,
  GET_SESSION_DATES_FAIL
} from "../constants/constants";
const initState = {
  groupSessionDates: [],
};

const groupSessionDatesReducer = (state = initState, action) => {
  switch (action.type) {
    case GET_SESSION_DATES:
      return Object.assign({}, state, {
      });
    case GET_SESSION_DATES_SUCCESS:
      return Object.assign({}, state, {
        groupSessionDates: action.payload.data
      });
    case GET_SESSION_DATES_FAIL:
      return Object.assign({}, state, {
      });
    default:
      return state;
  }
};

export default groupSessionDatesReducer;
