import { CHANGE_TO_HU, CHANGE_TO_EN } from '../constants/constants';

const changeLangToHUAction = () => ({
  type: CHANGE_TO_HU,
});
const changeLangToENAction = () => ({
  type: CHANGE_TO_EN,
});

export { changeLangToHUAction, changeLangToENAction };
