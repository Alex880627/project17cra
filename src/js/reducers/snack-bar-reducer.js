const initState = {
  snackBar: {
    open: false,
    status: "success",
    message: "bla"
  }
};

const snackBarReducer = (state = initState, action) => {
  switch (action.type) {
    case "OPEN_SNACKBAR_SUCCESS":
      return Object.assign({}, state, {
        snackBar: {
          open: true,
          status: "success",
          message: action.payload
        }
      });
    case "OPEN_SNACKBAR_ERROR":
      return Object.assign({}, state, {
        snackBar: {
          open: true,
          status: "error",
          message: action.payload
        }
      });
    case "CLOSE_SNACKBAR":
      return Object.assign({}, state, {
        snackBar: {
          open: false,
          status: state.snackBar.status,
          message: state.snackBar.message
        }
      });
    default:
      return state;
  }
};

export default snackBarReducer;
