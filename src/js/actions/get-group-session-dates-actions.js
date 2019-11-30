import { GET_SESSION_DATES, GET_SESSION_DATES_SUCCESS, GET_SESSION_DATES_FAIL } from '../constants/constants';

const getSessionDates = () => ({
  type: GET_SESSION_DATES,
});
const getSessionDatesSuccess = (data) => ({
  type: GET_SESSION_DATES_SUCCESS,
  payload: data
});

const getSessionDatesFail = () => ({
  type: GET_SESSION_DATES_FAIL,
});

export { getSessionDates, getSessionDatesSuccess, getSessionDatesFail };
