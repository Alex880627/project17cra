import {
  GET_SESSION_DATES,
  GET_SESSION_DATES_SUCCESS,
  GET_SESSION_DATES_FAIL
} from "../constants/constants";
import getData from "../services/get-data";

const getSessionDates = () => ({
  type: GET_SESSION_DATES
});
const getSessionDatesSuccess = data => ({
  type: GET_SESSION_DATES_SUCCESS,
  payload: data
});

const getSessionDatesFail = () => ({
  type: GET_SESSION_DATES_FAIL
});

export const getGroupSessionDates = dispatch => {
  dispatch(getSessionDates());
  getData(`${process.env.REACT_APP_BASE_URL}/api/csoporttorna/lista`)
    .then(data => {
      dispatch(getSessionDatesSuccess(data));
    })
    .catch(error => {
      dispatch(getSessionDatesFail());
    });
};
