import { SET_BLUR , UNSET_BLUR } from '../constants/constants';

const setBlurAction = () => ({
  type: SET_BLUR,
});
const unsetBlurAction = () => ({
  type: UNSET_BLUR,
});

export { setBlurAction, unsetBlurAction };
