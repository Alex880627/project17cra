import { SET_HEADER , UNSET_HEADER } from '../constants/constants';

const setHeaderUnderlineAction = (payload) => ({
  type: SET_HEADER,
  payload: payload
});
const unsetHeaderUnderlineAction = () => ({
  type: UNSET_HEADER,
});

export { setHeaderUnderlineAction, unsetHeaderUnderlineAction };
