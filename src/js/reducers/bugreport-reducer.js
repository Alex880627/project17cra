const initState = {
  bugreport: false
};

const bugreportReducer = (state=initState, action) => {
  switch (action.type) {
    case 'SHOW_BUGREPORT':
      return Object.assign({}, state, {
        bugreport: true,
      });
    case 'HIDE_BUGREPORT':
      return Object.assign({}, state, {
        bugreport: false,
      });
    default:
      return state;
  }
}

export default bugreportReducer;