const initState = {
  blur: false
};

const blurReducer = (state=initState, action) => {
  switch (action.type) {
    case 'SET_BLUR':
      return Object.assign({}, state, {
        blur: true,
      });
    case 'UNSET_BLUR':
      return Object.assign({}, state, {
        blur: false,
      });
    default:
      return state;
  }
}

export default blurReducer;