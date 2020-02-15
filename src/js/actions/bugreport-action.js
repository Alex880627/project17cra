import { SHOW_BUGREPORT, HIDE_BUGREPORT } from '../constants/constants';

const showBugreportAction = () => ({
  type: SHOW_BUGREPORT,
});
const hideBugreportAction = () => ({
  type: HIDE_BUGREPORT,
});

export { showBugreportAction, hideBugreportAction };
