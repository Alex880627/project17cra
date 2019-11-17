import { OPEN_SNACKBAR_SUCCESS , OPEN_SNACKBAR_ERROR, CLOSE_SNACKBAR } from '../constants/constants';

const openSnackBarSuccess = (payload) => ({
  type: OPEN_SNACKBAR_SUCCESS,
  payload: payload
});
const openSnackBarError = (payload) => ({
  type: OPEN_SNACKBAR_ERROR,
  payload: payload
});
const closeSnackBar = () => ({
  type: CLOSE_SNACKBAR
});

export { openSnackBarSuccess, openSnackBarError, closeSnackBar };
