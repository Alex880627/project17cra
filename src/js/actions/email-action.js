import { SHOW_EMAIL, HIDE_EMAIL } from '../constants/constants';

const showEmailAction = () => ({
  type: SHOW_EMAIL,
});
const hideEmailAction = () => ({
  type: HIDE_EMAIL,
});

export { showEmailAction, hideEmailAction };
