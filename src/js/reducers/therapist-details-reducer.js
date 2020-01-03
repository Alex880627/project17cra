const initState = {
  therapistDetails: false,
  therapistName: ""
};

const therapistReducer = (state=initState, action) => {
  switch (action.type) {
    case 'SHOW_THERAPIST':
      return Object.assign({}, state, {
        therapistDetails: true,
        therapistName: action.payload
      });
    case 'HIDE_THERAPIST':
      return Object.assign({}, state, {
        therapistDetails: false,
      });
    default:
      return state;
  }
}

export default therapistReducer;