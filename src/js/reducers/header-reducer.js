import { SET_HEADER , UNSET_HEADER } from '../constants/constants';
export const initState = {
  header: ""
};

const headerReducer = (state=initState, action) => {
  switch (action.type) {
    case SET_HEADER:
      return Object.assign({}, state, {
        header: action.payload
      });
    case UNSET_HEADER:
      return Object.assign({}, state, {
        header: ""
      });
    default:
      return state;
  }
}
export default headerReducer;