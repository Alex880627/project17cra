import { SET_LOADING, UNSET_LOADING } from '../constants/constants';

const setLoadingAction = () => ({
  type: SET_LOADING,
});
const unsetLoadingAction = () => ({
  type: UNSET_LOADING,
});

export { setLoadingAction, unsetLoadingAction };
