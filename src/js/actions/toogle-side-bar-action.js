import { OPEN_SIDE_BAR, CLOSE_SIDE_BAR } from '../constants/constants';

const openSideBarAction = () => ({
  type: OPEN_SIDE_BAR,
});
const closeSideBarAction = () => ({
  type: CLOSE_SIDE_BAR,
});

export { openSideBarAction, closeSideBarAction };
