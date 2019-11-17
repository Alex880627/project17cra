const initState = {
  email: false
};

const emailReducer = (state=initState, action) => {
  switch (action.type) {
    case 'SHOW_EMAIL':
      return Object.assign({}, state, {
        email: true,
      });
    case 'HIDE_EMAIL':
      return Object.assign({}, state, {
        email: false,
      });
    default:
      return state;
  }
}

export default emailReducer;