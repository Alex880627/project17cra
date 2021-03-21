import {
  GET_SESSION_DATES,
  GET_SESSION_DATES_SUCCESS,
} from "../constants/constants";
import * as groupSessions from '../../data/languages/server-data.json'; 

const getSessionDates = () => ({
  type: GET_SESSION_DATES
});
const getSessionDatesSuccess = data => ({
  type: GET_SESSION_DATES_SUCCESS,
  payload: data
});

export const getGroupSessionDates = dispatch => {
  dispatch(getSessionDates());
  dispatch(getSessionDatesSuccess(groupSessions.default));
};
