const initState = {
  loading: false
};

const loadingReducer = (state=initState, action) => {
  switch (action.type) {
    case 'SET_LOADING':
      return Object.assign({}, state, {
        loading: true,
      });
    case 'UNSET_LOADING':
      return Object.assign({}, state, {
        loading: false,
      });
    default:
      return state;
  }
}

export default loadingReducer;